import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
<div className="footer-top">
  <h3>About</h3>
  
  <div className="footer-team-list">
    <ul>
      <li>Ayomipo</li>
      <li>Godscovenant</li>
      <li>Chidiebere</li>
      <li>John</li>
      <li>Toyosi</li>
      <li>Oluwatosin</li>
      <li>Charles</li>
      <li>Olaoluwa</li>
      <li>Tolu</li>
      <li>Julius</li>
    </ul>
  </div>
</div>
        
        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>
            ©2026 Design by{" "}
            <a href="https://amakandukwu.com/" target="_blank">
              Amaka
            </a>{" "}
            &{" "}
            <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank">
              Ifeoma A.
            </a>{" "}
            <br className="mobile-break" /> Built by GroupName. All rights
            reserved
          </p>
          <a
            href="https://tsacademyonline.com/"
            target="_blank"
            className="footer-logo"
          >
            TSAcademy
          </a>
        </div>
      </div>
    </footer>
  );
}
