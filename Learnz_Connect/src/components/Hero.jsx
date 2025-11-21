import React from "react";
const LOGO_PATH = "/assets/logo.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">Learnz Development Hub<br />Learner</h1>
          <p className="hero-sub">This site is built from everything I learned on the course projects, recordings and documentation.</p>
        </div>

        <div className="hero-right">
          <div className="hero-illustration">
            <img src={LOGO_PATH} alt="logo mock" />
          </div>
        </div>
      </div>
    </section>
  );
}
