import React from "react";

/**
 * SkillCard
 * Props:
 *  - title: string (e.g. 'HTML', 'CSS', 'JavaScript', 'ReactJS')
 *  - count: number
 *
 * This component uses inline SVGs for icons so there are no external deps.
 * The surrounding .skill-icon.{html,css,js,react} classes control background gradients.
 */

export default function SkillCard({ title = "Skill", count = 0 }) {
  const key = title.toLowerCase().replace(/\s+/g, "");

  // inline SVG icons (white glyphs) sized to fit badge background
  const ICONS = {
    html: (
      <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden xmlns="http://www.w3.org/2000/svg">
        <path fill="#ffffff" d="M3.5 0h17l-1.54 17.06L12 24 4.96 17.06 3.5 0zm13.9 6.6h-9.6l.35 3.9h8.9l-.65 7.07L12 19.7 6.2 17.6l-.35-3.9h2.4l.14 1.6L12 16.9l2.6-1.6.18-1.9H6.3L5.8 6.6h11.6z"/>
      </svg>
    ),

    css: (
      <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden xmlns="http://www.w3.org/2000/svg">
        <path fill="#ffffff" d="M3.5 0h17l-1.54 17.06L12 24 4.96 17.06 3.5 0zm12.9 6.6H7.6l.35 3.9h8.9l-.65 7.07L12 19.7l-6.8-2.1-.35-3.9h2.4l.14 1.6L12 16.9l3.9-1.7.18-1.9z"/>
      </svg>
    ),

    javascript: (
      <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="none"/>
        <path fill="#ffffff" d="M8.6 6.6h2.2v10.8H8.6V6.6zm5.4 0h2.03c1.7 0 2.75.9 2.75 2.5 0 1.1-.6 1.7-1.3 2.1.9.2 1.6.8 1.8 1.9.4 1.9-.7 3-2.7 3H14v-1.9h1.57c.6 0 .95-.25 1.05-.8.06-.35.1-.9.1-1.5 0-1.3-1.2-1.7-2-1.7H14V6.6z"/>
        <text x="6.4" y="16.2" fontFamily="Arial, Helvetica, sans-serif" fontSize="9" fill="#ffffff">JS</text>
      </svg>
    ),

    reactjs: (
      <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden xmlns="http://www.w3.org/2000/svg">
        <g fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="1.4" fill="#ffffff" />
          <ellipse rx="6.5" ry="2.8" cx="12" cy="12" transform="rotate(0 12 12)"></ellipse>
          <ellipse rx="6.5" ry="2.8" cx="12" cy="12" transform="rotate(60 12 12)"></ellipse>
          <ellipse rx="6.5" ry="2.8" cx="12" cy="12" transform="rotate(120 12 12)"></ellipse>
        </g>
      </svg>
    ),
  };

  // choose badge class to set gradient background in CSS
  const badgeClass =
    key === "html"
      ? "skill-icon html"
      : key === "css"
      ? "skill-icon css"
      : key === "javascript"
      ? "skill-icon js"
      : key === "reactjs" || key === "react"
      ? "skill-icon react"
      : "skill-icon";

  // pick icon (fallback to text if not found)
  const iconNode = ICONS[key] ?? <span style={{ fontSize: 18, fontWeight: 800 }}>{title.slice(0, 3).toUpperCase()}</span>;

  return (
    <div className="skill-card" role="listitem" aria-label={`${title} skill`}>
      <div className={badgeClass} aria-hidden>
        {iconNode}
      </div>

      <div className="skill-title">{title}</div>
      <div className="skill-sub">{count ? `${count} contents` : "contents"}</div>
    </div>
  );
}
