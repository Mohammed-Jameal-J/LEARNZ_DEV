import React from "react";
const LOGO_PATH = "/assets/logo.png"; // update if you store it elsewhere

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="header-left">
          <img src={LOGO_PATH} alt="Learned logo" className="logo" />
          <div className="site-title">LearnzConnect</div>
        </div>

        <nav className="header-nav">
          <a href="#skills">Skills</a>
          <a href="#connect">Connect</a>
          <a href="#">Portfolio</a>
          <div className="profile-icon" title="profile">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" strokeWidth="1.2" />
              <path d="M6 20c0-3.31 2.69-6 6-6s6 2.69 6 6" strokeWidth="1.2" />
            </svg>
          </div>
        </nav>
      </div>
    </header>
  );
}
