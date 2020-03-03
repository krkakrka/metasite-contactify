import React from 'react';
import { ContactsTable, ContactDetails } from '..';
import Filter from './Filter';
import './Contacts.css';

function filterContacts(contacts, filter) {
  const matches = contacts.filter(contact => {
    const nameMatch = filter.name.length > 0 ? contact.name.toLowerCase() === filter.name.toLowerCase() : true;
    const cityMatch = filter.city.length > 0 ? contact.city.toLowerCase() === filter.city.toLowerCase() : true;
    const activityMatch = filter.showActive === contact.active;
    return nameMatch && cityMatch && activityMatch;
  });
  return matches;
}

function Contacts({ contacts }) {
  const [selectedContact, setSelectedContact] = React.useState();
  const [filter, setFilter] = React.useState();
  const filteredContacts = filter ? filterContacts(contacts, filter) : contacts;

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
        <Filter onSubmit={setFilter} />
        <button>Add new contact</button>
      </div>
      <div className="Contacts-main">
        {selectedContact && (
          <ContactDetails contact={selectedContact} />
        )}
        <ContactsTable contacts={filteredContacts} onContactSelect={handleContactSelection} />
      </div>
    </main>
  );
}

export default Contacts;
