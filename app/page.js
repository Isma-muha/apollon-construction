import { redirect } from "next/navigation";

export const metadata = { robots: { index: false, follow: true } };

// En production, / redirige vers /fr (voir aussi next.config.js). Pour l'export statique
// (aperçu HTML), on rend une page de redirection côté client.
export default function RootPage() {
  if (process.env.STATIC_EXPORT) {
    return (
      <>
        <meta httpEquiv="refresh" content="0;url=/fr/" />
        <script dangerouslySetInnerHTML={{ __html: "location.replace('/fr/')" }} />
        <a href="/fr/">Apollon Construction</a>
      </>
    );
  }
  redirect("/fr");
}
