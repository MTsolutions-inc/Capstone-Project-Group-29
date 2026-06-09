import React from 'react';
import logoGraphic from '../../assets/graphics.png';
import './Navbar.css';
function Navbar() {
  return (
    <nav>
      <a href="#" className="logo">
        <img src={logoGraphic} alt="Planet Logo" className="logo-image" />     
      </a>
    </nav>
  );
}

export default Navbar;