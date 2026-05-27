import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <h3>About</h3>
          <p>first name of group members</p>
        </div>
        
        <hr className="footer-divider" />
        
        <div className="footer-bottom">
          <p>©2026 Design by Amaka & Ifeoma A. <br className="mobile-break" /> Built by GroupName. All rights reserved</p>
          <p className="footer-logo">TSAcademy</p>
        </div>
      </div>
    </footer>
  );
}
