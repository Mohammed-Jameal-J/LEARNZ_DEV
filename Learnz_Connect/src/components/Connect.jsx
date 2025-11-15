import React from "react";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername"
};

export default function Connect() {
  return (
    <section id="connect" className="connect-section">
      <div className="connect-wrap">
        <h2 className="section-title">Let's Connect</h2>

        <div className="connect-card">
          {/* Left: LinkedIn block */}
          <div className="connect-left">
            <div className="connect-icon linkedin" aria-hidden>
              <svg viewBox="0 0 24 24" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#0A66C2"/>
                <path d="M6 9h3v9H6zM7.5 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM10.5 9h3v1.5h.04A3.3 3.3 0 0117 9.5c3.5 0 4 2.3 4 5.3V18h-3v-3c0-1-0.02-2.2-1.4-2.2-1.4 0-1.6 1-1.6 2.1V18h-3V9z" fill="#fff"/>
              </svg>
            </div>

            <div className="connect-text">
              <div className="connect-title">Connect on LinkedIn</div>
              <div className="connect-sub">Follow for project updates and code links.</div>
            </div>

            {/* LinkedIn CTA button (left) */}
            <a
              className="btn-linkedin"
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Open LinkedIn profile"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="white" />
                <path d="M6 9h3v9H6zM7.5 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM10.5 9h3v1.5h.04A3.3 3.3 0 0117 9.5c3.5 0 4 2.3 4 5.3V18h-3v-3c0-1-0.02-2.2-1.4-2.2-1.4 0-1.6 1-1.6 2.1V18h-3V9z" fill="#0A66C2"/>
              </svg>
              <span className="btn-label">LinkedIn</span>
            </a>
          </div>

          {/* Right: GitHub button */}
          <div className="connect-right">
            <a
              className="btn-gh"
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Open GitHub profile"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .5C5.73.5.98 5.25.98 11.53c0 4.66 3.02 8.61 7.2 10.01.53.1.72-.23.72-.5 0-.25-.01-.92-.01-1.8-2.93.64-3.55-1.3-3.55-1.3-.48-1.22-1.17-1.55-1.17-1.55-.96-.65.07-.64.07-.64 1.06.08 1.62 1.09 1.62 1.09.94 1.62 2.47 1.15 3.07.88.09-.69.37-1.15.67-1.41-2.34-.27-4.8-1.17-4.8-5.2 0-1.15.39-2.08 1.03-2.81-.1-.26-.45-1.27.1-2.65 0 0 .85-.27 2.78 1.07a9.64 9.64 0 012.53-.34c.86 0 1.73.12 2.53.34 1.93-1.34 2.78-1.07 2.78-1.07.55 1.38.2 2.39.1 2.65.64.73 1.03 1.66 1.03 2.81 0 4.03-2.47 4.93-4.82 5.18.38.33.72.98.72 1.98 0 1.43-.01 2.58-.01 2.94 0 .27.19.6.73.5 4.18-1.4 7.2-5.35 7.2-10.01C23.02 5.25 18.27.5 12 .5z"/>
              </svg>
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
