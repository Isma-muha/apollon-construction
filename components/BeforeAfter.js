"use client";
import { useState } from "react";

export default function BeforeAfter({ before, after, labels, view }) {
  const [pos, setPos] = useState(50);
  return (
    <figure style={{ margin: 0 }}>
      <div className="ba">
        <img src={after} alt="" loading="lazy" />
        <img className="ba-before" src={before} alt="" loading="lazy" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
        <div className="line" style={{ left: `${pos}%` }} />
        <div className="knob" style={{ left: `${pos}%` }}>↔</div>
        <span className="tag" style={{ left: 16, background: "rgba(14,15,13,.7)", color: "#f3eee4" }}>{labels.before}</span>
        <span className="tag" style={{ right: 16, background: "rgba(17,100,46,.85)", color: "#fff" }}>{labels.after}</span>
        <input type="range" min="0" max="100" value={pos} onChange={(e) => setPos(Number(e.target.value))} aria-label={labels.hint} />
      </div>
      <figcaption style={{ marginTop: 12, fontSize: 13, color: "#8f887a" }}>{view}</figcaption>
    </figure>
  );
}
