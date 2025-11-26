import React from "react";

const repos = [
  { name: "HTML Projects (4)", url: "https://github.com/Mohammed-Jameal-J/HTML_LEARNZ" },
  { name: "CSS Projects (19)", url: "https://github.com/Mohammed-Jameal-J/CSS_LEARNZ" },
  { name: "JS Projects (11)", url: "https://github.com/Mohammed-Jameal-J/LEARN_JS" },
  { name: "REACT Projects (20)", url: "https://github.com/Mohammed-Jameal-J/LEARNZ_REACT" }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Project Repositories</h2>
        <div className="projects-list">
          {repos.map(r => (
            <a key={r.name} className="repo-card" href={r.url} target="_blank" rel="noreferrer">
              <div>
                <div className="repo-name">{r.name}</div>
                <div className="repo-sub">Click to view on GitHub</div>
              </div>
              <svg className="arrow" viewBox="0 0 24 24" width="20" height="20">
                <path d="M14 5l7 7-7 7M3 12h18" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
