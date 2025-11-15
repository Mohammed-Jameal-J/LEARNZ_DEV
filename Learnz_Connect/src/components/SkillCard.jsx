import React from "react";

export default function SkillCard({ title, subtitle, icon }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <div className="skill-title">{title}</div>
      <div className="skill-sub">{subtitle}</div>
    </div>
  );
}
