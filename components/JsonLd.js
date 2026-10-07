// JSON.stringify laisse passer "<" tel quel : une valeur contenant "</script>" refermerait la
// balise et le reste s'exécuterait. On encode donc "<" en < — JSON strictement équivalent
// pour les moteurs, inoffensif pour le navigateur. Le contenu vient de site-data (pas d'entrée
// utilisateur), c'est une ceinture de sécurité pour le jour où ce ne sera plus le cas.
const safeJson = (d) => JSON.stringify(d).replace(/</g, "\\u003c");

export default function JsonLd({ data }) {
  const list = Array.isArray(data) ? data : [data];
  return list.map((d, i) => (
    <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(d) }} />
  ));
}
