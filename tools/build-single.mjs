// Génère un fichier HTML autonome (aperçu) à partir de l'export statique Next.js.
// Usage : node tools/build-single.mjs [--light] [--out chemin.html]
// --light : photos compressées, vidéos remplacées par un bloc (fichier ~1 Mo, pour l'aperçu dans l'app).
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const LIGHT = process.argv.includes("--light");
const outIdx = process.argv.indexOf("--out");
const OUT = outIdx > -1 ? process.argv[outIdx + 1] : path.join(ROOT, LIGHT ? "apollon-site-apercu.html" : "apollon-construction-site.html");
const OUTDIR = path.join(ROOT, "out");

if (!process.argv.includes("--no-build")) {
  console.log("→ next build (export statique)…");
  // Les routes API (envoi d'e-mail) ne s'exportent pas en statique : on les met de côté le temps du build.
  const api = path.join(ROOT, "app", "api"), apiOff = path.join(ROOT, ".api-off");
  const hadApi = fs.existsSync(api);
  if (hadApi) fs.renameSync(api, apiOff);
  try {
    execSync("STATIC_EXPORT=1 npx next build", { cwd: ROOT, stdio: "inherit", env: { ...process.env, STATIC_EXPORT: "1" } });
  } finally {
    if (hadApi) fs.renameSync(apiOff, api);
  }
}

// ---- pages
const pages = {};
function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (f === "index.html") {
      const route = "/" + path.relative(OUTDIR, dir).split(path.sep).join("/");
      if (/^\/(fr|nl|en)(\/|$)/.test(route)) pages[route.replace(/\/$/, "")] = fs.readFileSync(p, "utf8");
    }
  }
}
walk(OUTDIR);

// ---- css
let css = "";
const first = Object.values(pages)[0];
for (const m of first.matchAll(/<link[^>]+href="(\/_next\/static\/css\/[^"]+)"[^>]*>/g)) css += fs.readFileSync(path.join(OUTDIR, m[1]), "utf8") + "\n";

// ---- assets → data URIs
const MIME = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml", ".mp4": "video/mp4", ".webp": "image/webp" };
const cache = new Map();
let lightDir = null;
if (LIGHT) {
  lightDir = path.join(ROOT, ".light-assets");
  fs.mkdirSync(lightDir, { recursive: true });
  execSync(`python3 - <<'EOF'
from PIL import Image, ImageOps
import os
for sub in ["images","uploads"]:
    src=os.path.join("${ROOT}","public",sub); dst=os.path.join("${lightDir}",sub); os.makedirs(dst,exist_ok=True)
    for f in os.listdir(src):
        if not f.lower().endswith((".jpg",".jpeg",".png")): continue
        im=ImageOps.exif_transpose(Image.open(os.path.join(src,f))).convert("RGB"); im.thumbnail((1300,1300))
        im.save(os.path.join(dst,f),"JPEG",quality=66,optimize=True,progressive=True)
EOF`, { stdio: "inherit" });
}
function dataUri(urlPath) {
  if (cache.has(urlPath)) return cache.get(urlPath);
  const ext = path.extname(urlPath).toLowerCase();
  let file = path.join(ROOT, "public", urlPath);
  if (LIGHT && (urlPath.startsWith("/images/") || urlPath.startsWith("/uploads/")) && ext !== ".mp4") {
    const alt = path.join(lightDir, urlPath);
    if (fs.existsSync(alt)) file = alt;
  }
  if (!fs.existsSync(file) || !MIME[ext]) return urlPath;
  const v = `data:${MIME[ext]};base64,${fs.readFileSync(file).toString("base64")}`;
  cache.set(urlPath, v);
  return v;
}

const PH_VIDEO = `<div style="aspect-ratio:16/9;background:#171814;display:flex;align-items:flex-end"><span style="padding:16px 18px;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:rgba(243,238,228,.55)">Vidéo chantier — version complète</span></div>`;

function transform(html) {
  let body = html.slice(html.indexOf("<body"), html.lastIndexOf("</body>"));
  body = body.slice(body.indexOf(">") + 1);
  body = body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "").replace(/<script\b[^>]*\/>/g, "");
  body = body.replace(/<noscript>[\s\S]*?<\/noscript>/g, "");
  body = body.replace(/<next-route-announcer[\s\S]*?<\/next-route-announcer>/g, "");
  if (LIGHT) body = body.replace(/<video\b[^>]*><\/video>/g, PH_VIDEO);
  body = body.replace(/href="\/(fr|nl|en)(\/[^"]*)?"/g, (m, l, rest) => `href="#/${l}${(rest || "").replace(/\/(\?|$)/, "$1")}"`);
  body = body.replace(/(src|href|srcset|poster)="(\/(?:images|uploads|logo)\/[^"]+)"/gi, (m, attr, p) => { ASSETS[p] = dataUri(p); return `${attr}="__A${p}__"`; });
  return body;
}
const ASSETS = {};
const PAGES = {};
for (const [route, html] of Object.entries(pages)) PAGES[route] = transform(html);
const titles = {};
for (const [route, html] of Object.entries(pages)) titles[route] = (html.match(/<title>([^<]*)<\/title>/) || [, ""])[1];

const APP = `
const PAGES=${JSON.stringify(PAGES)};
const ASSETS=${JSON.stringify(ASSETS)};
const fill=h=>h.replace(/__A(\\/[^_"]+)__/g,(m,k)=>ASSETS[k]||k);
const TITLES=${JSON.stringify(titles)};
function parse(){let h=location.hash.replace(/^#/,"");const qi=h.indexOf("?");const q=new URLSearchParams(qi>=0?h.slice(qi+1):"");if(qi>=0)h=h.slice(0,qi);h=h.replace(/\\/$/,"")||"/fr";if(!/^\\/(fr|nl|en)/.test(h)){const n=(navigator.language||"fr").slice(0,2).toLowerCase();h="/"+(["fr","nl","en"].includes(n)?n:"fr");}return {route:h,q};}
function render(){const {route,q}=parse();const html=PAGES[route]||PAGES["/"+route.split("/")[1]]||PAGES["/fr"];const app=document.getElementById("app");app.innerHTML=fill(html);document.title=TITLES[route]||document.title;document.documentElement.lang=route.split("/")[1];window.scrollTo(0,0);wire(app,q);}
function wire(app,q){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");io.unobserve(e.target);}}),{threshold:.12});
  app.querySelectorAll("[data-reveal]").forEach(el=>io.observe(el));
  const nav=app.querySelector(".nav");if(nav){const onDark=nav.dataset.ondark==="1";let scrolled=false,open=false;
    const sync=()=>{nav.classList.toggle("scrolled",scrolled&&!open);nav.classList.toggle("open",open);nav.classList.toggle("light",onDark||scrolled||open);};
    window.onscroll=()=>{scrolled=window.scrollY>40;sync();};sync();
    nav.querySelectorAll("[data-open]").forEach(el=>el.addEventListener("mouseenter",()=>{open=true;sync();}));
    nav.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("mouseenter",()=>{open=false;sync();}));
    nav.addEventListener("mouseleave",()=>{open=false;sync();});
    const mob=nav.querySelector(".nav-mobile"),burger=nav.querySelector(".nav-burger");
    if(burger)burger.addEventListener("click",()=>{const s=!mob.classList.contains("show");mob.classList.toggle("show",s);burger.textContent=s?"✕":"☰";});
    const cw=nav.querySelector(".call-wrap"),cm=nav.querySelector(".call-menu");if(cw&&cm){cw.addEventListener("mouseenter",()=>cm.classList.add("show"));cw.addEventListener("mouseleave",()=>cm.classList.remove("show"));cw.querySelector(".call-btn").addEventListener("click",()=>cm.classList.toggle("show"));}
    nav.querySelectorAll(".lang[data-lang]").forEach(b=>b.addEventListener("click",()=>{const {route}=parse();const parts=route.split("/");parts[1]=b.dataset.lang;location.hash="#"+parts.join("/");}));
  }
  const filters=app.querySelector("#filters");if(filters)filters.querySelectorAll(".chip-f").forEach(b=>b.addEventListener("click",()=>{filters.querySelectorAll(".chip-f").forEach(x=>x.classList.toggle("on",x===b));const f=b.dataset.f;app.querySelectorAll("#works figure").forEach(fig=>{fig.hidden=!(f==="all"||fig.dataset.cat===f);});}));
  app.querySelectorAll(".ba").forEach(ba=>{const r=ba.querySelector("input"),before=ba.querySelector(".ba-before"),line=ba.querySelector(".line"),knob=ba.querySelector(".knob");const set=()=>{const v=Number(r.value);before.style.clipPath="inset(0 "+(100-v)+"% 0 0)";line.style.left=v+"%";knob.style.left=v+"%";};r.addEventListener("input",set);r.addEventListener("change",set);});
  const form=app.querySelector("#cform");if(form){const sel=form.querySelector('select[name="service"]');const s=q.get("service");if(sel&&s&&[...sel.options].some(o=>o.value===s))sel.value=s;form.addEventListener("submit",e=>{e.preventDefault();const {route}=parse();location.hash="#"+route.replace(/\\/$/,"")+"/merci";});}
}
window.addEventListener("hashchange",render);render();
`;

const html = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${titles["/fr"]}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Archivo:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${css}</style>
</head>
<body>
<div id="app"></div>
<script>${APP}</script>
</body>
</html>`;
fs.writeFileSync(OUT, html);
console.log("écrit", OUT, (fs.statSync(OUT).size / 1024 / 1024).toFixed(1), "Mo,", Object.keys(PAGES).length, "pages");
