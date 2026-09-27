// Placeholder visuel pour les emplacements photo qui n'ont pas encore de vraie image de chantier.
// Pas d'appel externe : bloc de couleur + libellé, en attendant les photos du client.
const TONES = {
  dark: { bg: "#171814", fg: "rgba(243,238,228,.55)" },
  bronze: { bg: "#0e4f25", fg: "rgba(255,255,255,.8)" },
  ivoire: { bg: "#e7ded0", fg: "rgba(14,15,13,.5)" }
};

export default function Ph({ label, tone = "dark", style }) {
  const c = TONES[tone] || TONES.dark;
  return (
    <div
      className="placeholder-block"
      style={{ background: c.bg, ...style }}
      role="img"
      aria-label={label || "Photo à venir"}
    >
      <span className="placeholder-label" style={{ color: c.fg }}>
        {label ? `${label} — photo à venir` : "Photo à venir"}
      </span>
    </div>
  );
}
