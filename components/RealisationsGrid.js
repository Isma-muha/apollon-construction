"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import Ph from "@/components/Ph";

export default function RealisationsGrid({ projects, categories, allLabel }) {
  const [filter, setFilter] = useState("all");
  return (
    <>
      <div id="filters" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <button className={`chip-f ${filter === "all" ? "on" : ""}`} data-f="all" onClick={() => setFilter("all")}>{allLabel}</button>
        {categories.map((c) => (
          <button key={c.id} className={`chip-f ${filter === c.id ? "on" : ""}`} data-f={c.id} onClick={() => setFilter(c.id)}>{c.label}</button>
        ))}
      </div>
      <div id="works" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: "28px 24px", marginTop: 48 }}>
        {projects.map((p, i) => (
          <Reveal key={i} as="figure" data-cat={p.cat} style={{ margin: 0 }} hidden={!(filter === "all" || p.cat === filter)}>
            <div className="hover-zoom" style={{ aspectRatio: "4/3", background: "#0e0f0d" }}>
              {p.img ? <img src={p.img} alt={`${p.title} — ${p.place}`} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : <Ph label={p.catName} />}
            </div>
            <figcaption style={{ marginTop: 14, display: "flex", justifyContent: "space-between", gap: 16, alignItems: "baseline" }}>
              <span style={{ fontFamily: "'Libre Caslon Text',serif", fontSize: 20, lineHeight: 1.2 }}>{p.title}</span>
              <span style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "#11642e", whiteSpace: "nowrap" }}>{p.catName}</span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </>
  );
}
