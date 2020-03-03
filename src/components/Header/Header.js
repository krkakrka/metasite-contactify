import React from 'react';
import './Header.css';
import { HorizontalLinkList } from '..';

function Header({ mainLinks, dropdownLinks }) {
  return (
    <header className="Header">
      <img className="Header-logo" alt="Contactify logo" />
      <HorizontalLinkList links={mainLinks} />
      <input className="Header-search" type="text" placeholder="search" />
      <button className="Header-menu-button">Username</button>
    </header>
  );
}

export default Header;
