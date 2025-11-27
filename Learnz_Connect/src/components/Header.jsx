import React, { useState } from "react";

const LOGO_PATH = "/assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="section-inner header-inner">
          <div className="header-left">
            <img src={LOGO_PATH} alt="Learned logo" className="logo" />
            <div className="site-title logo-gradient">LearnzConnect</div>
          </div>

          {/* Desktop nav */}
          <nav className="header-nav desktop-only">
            <a href="#skills">Skills</a>
            <a href="#connect">Connect</a>
            <a href="https://mohammed-jameal-j.github.io/My-Portfolio/">Portfolio</a>
          </nav>

          {/* Right side: nav / profile */}
          <div className="header-right">
            {/* Profile icon (click opens modal) */}
            <button
              className="profile-icon"
              onClick={() => setProfileOpen(true)}
              aria-label="Open profile"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" strokeWidth="1.2" />
                <path d="M6 20c0-3.31 2.69-6 6-6s6 2.69 6 6" strokeWidth="1.2" />
              </svg>
            </button>

            {/* Hamburger (mobile) */}
            <button
              className={`hamburger mobile-only ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile slide-down nav */}
        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#connect" onClick={() => setMenuOpen(false)}>Connect</a>
          <a href="https://mohammed-jameal-j.github.io/My-Portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
        </div>
      </header>

      {/* Profile Modal */}
      {profileOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true" onClick={() => setProfileOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setProfileOpen(false)} aria-label="Close">✕</button>
            <div className="modal-body">
              <h3>About Me</h3>
              <p><strong>User:</strong> Mohammed Jameal J</p>

              <div className="modal-buttons">
                <a className="btn-gh" href="https://github.com/Mohammed-Jameal-J" target="_blank" rel="noreferrer">
                  View GitHub
                </a>
                <a className="btn-linkedin filled" href="https://www.linkedin.com/in/mohammed-jameal-j" target="_blank" rel="noreferrer">
                  View LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
