import React from 'react';
import './Contacts.css';

function Contacts() {
  return (
    <main className="Contacts">
      <div className="Contacts-header">
        <div>Filter</div>
        <button>Add new contact</button>
      </div>
      <div className="Contacts-main">
        <div>selected contact</div>
        <div>contacts table</div>
      </div>
    </main>
  );
}

export default Contacts;
