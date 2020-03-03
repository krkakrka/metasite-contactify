import React from 'react';
import './HorizontalLinkList.css';

// todo this should check the url itself.
function isLinkActive(link) {
  return link.label === 'Contacts';
}

function HorizontalLinkList({ links }) {
  return (
    <div className="HorizontalLinkList">
      {links.map((link) => (
        <a className={`${isLinkActive(link) ? 'active' : ''}`}
          href={link.href}
          key={link.href}
        >
          {link.label.toUpperCase()}
        </a>
      ))}
    </div>
  );
}

export default HorizontalLinkList;
