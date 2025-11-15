import React from "react";
import SkillCard from "./SkillCard";

const sample = [
  { title: "HTML", subtitle: "7 contents", icon: "H" },
  { title: "CSS", subtitle: "4 contents", icon: "C" },
  { title: "JavaScript", subtitle: "7 contents", icon: "JS" },
  { title: "ReactJS", subtitle: "26 contents", icon: "R" }
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {sample.map(s => (
            <SkillCard key={s.title} title={s.title} subtitle={s.subtitle} icon={s.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
