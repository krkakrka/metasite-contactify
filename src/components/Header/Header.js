import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <img className="Header-logo" />
      <div className="Header-links">Links</div>
      <input className="Header-search" type="text" placeholder="search" />
      <button className="Header-menu-button">Username</button>
    </div>
  );
}

export default Header;
