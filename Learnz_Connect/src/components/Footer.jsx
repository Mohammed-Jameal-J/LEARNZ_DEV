import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div>© {new Date().getFullYear()} Learned — Created by a LearnzDevelopmentHub learner</div>
      </div>
    </footer>
  );
}
