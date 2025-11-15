import React from "react";

export default function Connect() {
  return (
    <section id="connect" className="full-width-section connect-section">
      <div className="section-inner">
        <h2 className="section-title">Connect & Support Me</h2>

        <div className="connect-card">

          {/* ================= LEFT SIDE — LOGO ================= */}
          <div className="connect-icon custom-logo">
            <img src="/assets/logo.png" alt="logo" />
          </div>

          {/* ================= CENTER TEXT ================= */}
          <div className="connect-text">
            <div className="connect-title">Let's Connect</div>
            <div className="connect-sub">
              Follow me & support my work on my profiles.
            </div>
          </div>

          {/* ================= RIGHT SIDE — TWO BUTTONS ================= */}
          <div className="connect-buttons">

            {/* ---------- LINKEDIN BUTTON ---------- */}
            <a
              className="btn-linkedin filled"
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#0A66C2"/>
                <path 
                  fill="#FFFFFF"
                  d="M6.5 9H9.5V18H6.5V9ZM8 7.5C7.17 7.5 6.5 6.83 6.5 6C6.5 5.17 7.17 4.5 8 4.5C8.83 4.5 9.5 5.17 9.5 6C9.5 6.83 8.83 7.5 8 7.5ZM10.5 9H13.5V10.5H13.53C13.97 9.84 15 9.13 16.44 9.13C19.4 9.13 20 11.02 20 13.58V18H17V14.17C17 13.02 17 11.57 15.5 11.57C14 11.57 13.75 12.77 13.75 14.08V18H10.5V9Z"
                />
              </svg>
              <span style={{ marginLeft: "6px" }}>LinkedIn</span>
            </a>

            {/* ---------- GITHUB BUTTON ---------- */}
            <a
              className="btn-gh"
              href="https://github.com/Mohammed-Jameal-J"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#0F172A"/>
                <path 
                  fill="#FFFFFF"
                  d="M12 .5C5.73.5.98 5.25.98 11.53c0 4.66 3.02 8.61 7.2 10.01.53.1.72-.23.72-.5 0-.25-.01-.92-.01-1.8-2.93.64-3.55-1.3-3.55-1.3-.48-1.22-1.17-1.55-1.17-1.55-.96-.65.07-.64.07-.64 1.06.08 1.62 1.09 1.62 1.09.94 1.62 2.47 1.15 3.07.88.09-.69.37-1.15.67-1.41-2.34-.27-4.8-1.17-4.8-5.2 0-1.15.39-2.08 1.03-2.81-.1-.26-.45-1.27.1-2.65 0 0 .85-.27 2.78 1.07a9.64 9.64 0 012.53-.34c.86 0 1.73.12 2.53.34 1.93-1.34 2.78-1.07 2.78-1.07.55 1.38.2 2.39.1 2.65.64.73 1.03 1.66 1.03 2.81 0 4.03-2.47 4.93-4.82 5.18.38.33.72.98.72 1.98 0 1.43-.01 2.58-.01 2.94 0 .27.19.6.73.5 4.18-1.4 7.2-5.35 7.2-10.01C23.02 5.25 18.27.5 12 .5z"
                />
              </svg>
              <span style={{ marginLeft: "6px" }}>GitHub</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
