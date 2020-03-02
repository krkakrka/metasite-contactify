import React from 'react';
import { ContactsTable } from '..';
import './Contacts.css';

function Contacts() {
  return (
    <main className="Contacts">
      <div className="Contacts-header">
        <div>Filter</div>
        <button>Add new contact</button>
      </div>
      <div className="Contacts-main">
        <div className="Contacts-selected-contact">selected contact</div>
        <ContactsTable />
      </div>
    </main>
  );
}

export default Contacts;
