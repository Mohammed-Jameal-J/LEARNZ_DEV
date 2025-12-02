import React from "react";

const certs = [
  {
    id: 1,
    title: "Master React Bootcamp",
    issuer: "LearnzDevelopmentHub",
    img: "/assets/React-Bootcamp.png",
  },
  {
    id: 2,
    title: "React Frontend",
    issuer: "LearnzDevelopmentHub",
    img: "/assets/Frontend-Development.png",
  },
  {
    id: 3,
    title: "JavaScript",
    issuer: "LearnzDevelopmentHub",
    img: "/assets/Javascript.png",
  },
];

export default function Certificates() {
  return (
    <section className="full-width-section certificates-section">
      <div className="section-inner">
        <h2 className="section-title">Certificates</h2>

        <div className="cert-grid">
          {certs.map((c) => (
            <div className="cert-card" key={c.id}>
              <div className="cert-img-box">
                <img src={c.img} alt={c.title} />
              </div>

              <div className="cert-text">
                <p className="cert-title">{c.title}</p>
                <p className="cert-issuer">{c.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}