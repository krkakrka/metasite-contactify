import React from 'react';
import { ContactsTable, ContactDetails } from '..';
import './Contacts.css';

function Contacts({ contacts }) {
  const [selectedContact, setSelectedContact] = React.useState();
  const handleContactSelection = (contact) => {
    if (selectedContact) {
      const newSelectedContact = selectedContact.id !== contact.id ? contact : undefined;
      setSelectedContact(newSelectedContact);
    } else {
      setSelectedContact(contact);
    }
  };

  return (
    <main className="Contacts">
      <div className="Contacts-header">
        <div>Filter</div>
        <button>Add new contact</button>
      </div>
      <div className="Contacts-main">
        {selectedContact && (
          <ContactDetails contact={selectedContact} />
        )}
        <ContactsTable contacts={contacts} onContactSelect={handleContactSelection} />
      </div>
    </main>
  );
}

export default Contacts;
