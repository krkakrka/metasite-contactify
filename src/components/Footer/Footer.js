import React from 'react';
import './Footer.css';

function Footer({ mainLinks, otherLinks }) {
  return (
    <div className="Footer">
      <div className="Footer-left">
        {mainLinks.map(link => (
          <a href={link.href} key={link.label+link.href}>{link.label}</a>
        ))}
        <div className="copyright">
          <span>C 2015 Contactify</span>
          <a href="#about">About</a>
          <a href="#privacy">Privacy</a>
        </div>
      </div>
      <div className="Footer-middle">
        <div className="sync">Sync</div>
        <div className="support">Support</div>
      </div>
      <div className="Footer-right">
        {otherLinks.map(link => (
          <a href={link.href} key={link.label+link.href}>{link.label}</a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
