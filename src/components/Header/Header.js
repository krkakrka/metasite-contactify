import React from 'react';
import './Header.css';

function Header({ mainLinks, dropdownLinks }) {
  return (
    <div className="Header">
      <img className="Header-logo" />
      <div className="Header-links">
        {mainLinks.map((link, index) => (
          <a className={`link ${index === 1 ? 'active' : ''}`} href={link.href}>{link.label}</a>
        ))}
      </div>
      <input className="Header-search" type="text" placeholder="search" />
      <button className="Header-menu-button">Username</button>
    </div>
  );
}

export default Header;
