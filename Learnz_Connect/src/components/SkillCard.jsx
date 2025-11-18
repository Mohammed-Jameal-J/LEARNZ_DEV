import React from "react";

/**
 * SkillCard
 * Props:
 *  - title: string (e.g. 'HTML', 'CSS', 'JavaScript', 'ReactJS')
 *  - count: number
 *
 * This component uses inline SVGs for icons so there are no external deps.
 * The surrounding .skill-icon.{html,css,js,react} classes control background gradients.
 */

export default function SkillCard({ title = "Skill", count = 0 }) {
  const key = title.toLowerCase().replace(/\s+/g, "");

  // inline SVG icons (white glyphs) sized to fit badge background
const ICONS = {
  // --- keep your existing HTML SVG ---
  html: (
<svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.23332 2H7.13477V2.89062H7.95937V2H8.86086V4.69703H7.95941V3.79391H7.1348V4.69703H6.2334V2H6.23332ZM10.0463 2.89437H9.25273V2H11.7418V2.89437H10.9479V4.69703H10.0464L10.0463 2.89437ZM12.1368 2H13.0767L13.6549 2.94766L14.2326 2H15.1729V4.69703H14.2752V3.36023L13.655 4.31918H13.6395L13.0188 3.36023V4.69703H12.1368V2H12.1368ZM15.6215 2H16.5232V3.80555H17.7909V4.69703H15.6215V2Z" fill="#ffffffff"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.91504 5.93047L6.20449 20.3936L11.991 22L17.7934 20.3914L19.0843 5.93047H4.91504ZM16.1168 12.4772H9.65238L9.49027 10.6608H16.2782L16.437 8.88692H7.55168L8.03012 14.2511H14.1778L13.9719 16.5516L11.9936 17.0856V17.0857L11.9919 17.0862L10.0163 16.5527L9.89004 15.138H8.10937L8.35789 17.9232L11.9915 18.9319L11.9996 18.9296V18.9294L15.63 17.9232L16.0735 12.9536L16.1168 12.4772Z" fill="#ffffffff"/>
</svg>

  ),

  // --- CSS3 style shield ---
  css: (
   <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.23242 2.24032C3.23242 2.37383 3.57065 6.29016 3.98899 10.9453C4.39842 15.5915 4.75445 19.5345 4.76335 19.7036L4.79005 20.0062L8.39486 21.0031L11.9908 22L12.7117 21.8042C13.1034 21.6974 14.7144 21.2523 16.2987 20.8162C18.7553 20.1397 19.1737 19.9973 19.2093 19.846C19.2538 19.6324 20.7669 2.48064 20.7669 2.19582V2H3.23242V2.24032ZM17.5359 6.02314C17.5003 6.23676 17.2689 8.76457 17.0197 11.6573C16.7616 14.5412 16.548 16.9266 16.5302 16.9444C16.4945 16.9889 12.1243 18.1994 11.9997 18.1994C11.9107 18.1994 9.52526 17.5496 7.89642 17.0868L7.44248 16.9533L7.33567 15.7784C7.28227 15.1286 7.21106 14.3453 7.17546 14.0338L7.12205 13.482H8.23465C9.48965 13.482 9.45405 13.4642 9.46295 14.2385C9.46295 14.4344 9.48965 14.737 9.51636 14.915L9.56976 15.2354L10.7892 15.5559L11.9997 15.8763L13.2013 15.5559C13.8599 15.3778 14.4118 15.2265 14.4118 15.2265C14.4207 15.2176 14.4741 14.6925 14.5275 14.0605C14.5809 13.4197 14.6432 12.7966 14.6699 12.6542L14.7144 12.4139H7.07755L7.03304 12.2092C7.00634 12.1024 6.95294 11.5861 6.91734 11.0521L6.85503 10.0997H14.8746L14.928 9.49444C14.9636 9.16511 15.017 8.65777 15.0437 8.37294C15.0793 8.00801 15.0704 7.8656 14.9992 7.9101C14.9458 7.9368 13.05 7.9368 10.7714 7.9012L6.63251 7.8478L6.57911 7.21584C6.5435 6.86871 6.499 6.37027 6.4723 6.11215L6.41889 5.64931H17.5804L17.5359 6.02314Z" fill="#ffffffff"/>
</svg>

  ),

  // --- JavaScript yellow logo with JS letters ---
  javascript: (
<svg width="60" height="6o" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3V21H21V3H3ZM12.8129 17.0226C12.8129 18.7935 11.7677 19.6065 10.2581 19.6065C8.92258 19.6065 8.13871 18.9097 7.73226 18.0387L9.12581 17.1677C9.35806 17.6613 9.61935 18.0387 10.229 18.0387C10.8097 18.0387 11.129 17.8355 11.129 16.9645V11.2742H12.8129V17.0226ZM16.8194 19.6065C15.2516 19.6065 14.2355 18.8226 13.7129 17.8935L15.1065 17.0806C15.4839 17.6613 15.9774 18.0968 16.7903 18.0968C17.4871 18.0968 17.9226 17.7774 17.9226 17.2258C17.9226 16.6452 17.4871 16.4419 16.7032 16.0935L16.2968 15.9194C15.0774 15.4258 14.2645 14.729 14.2645 13.3355C14.2645 12.0581 15.1935 11.129 16.7323 11.129C17.8065 11.129 18.5613 11.5065 19.1129 12.4935L17.8065 13.3645C17.5161 12.871 17.2258 12.6387 16.7032 12.6387C16.2097 12.6387 15.8903 12.9581 15.8903 13.3645C15.8903 13.8581 16.2097 14.0613 16.9065 14.3806L17.3129 14.5548C18.7355 15.1645 19.5774 15.7742 19.5774 17.2258C19.6065 18.7645 18.4161 19.6065 16.8194 19.6065Z" fill="#ffffffff"/>
</svg>

  ),

  // --- React atom logo ---
  reactjs: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <g
        fill="none"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="1.7" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="7" ry="3" />
        <ellipse
          cx="12"
          cy="12"
          rx="7"
          ry="3"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="7"
          ry="3"
          transform="rotate(120 12 12)"
        />
      </g>
    </svg>
  ),
};


  // choose badge class to set gradient background in CSS
  const badgeClass =
    key === "html"
      ? "skill-icon html"
      : key === "css"
      ? "skill-icon css"
      : key === "javascript"
      ? "skill-icon js"
      : key === "reactjs" || key === "react"
      ? "skill-icon react"
      : "skill-icon";

  // pick icon (fallback to text if not found)
  const iconNode = ICONS[key] ?? <span style={{ fontSize: 18, fontWeight: 800 }}>{title.slice(0, 3).toUpperCase()}</span>;

  return (
    <div className="skill-card" role="listitem" aria-label={`${title} skill`}>
      <div className={badgeClass} aria-hidden>
        {iconNode}
      </div>

      <div className="skill-title">{title}</div>
      <div className="skill-sub">{count ? `${count} contents` : "contents"}</div>
    </div>
  );
}
