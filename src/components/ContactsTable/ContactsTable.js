import React from 'react';
import './ContactsTable.css';

function ContactsTable({ contacts, onContactSelect }) {
  return (
    <div className="ContactsTable">
      <table>
        <thead>
          <tr>
            <th className="NameColumn cell">Name</th>
            <th className="SurnameColumn cell">Surname</th>
            <th className="EmailColumn cell">City</th>
            <th className="EmailColumn cell">Email</th>
            <th className="PhoneColumn cell">Phone</th>
            <th className="ContactActionColumn cell"></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id} onClick={() => onContactSelect(contact)}>
              <td className="cell">{contact.name}</td>
              <td className="cell">{contact.surname}</td>
              <td className="cell">{contact.city}</td>
              <td className="cell">{contact.email}</td>
              <td className="Phone cell">{contact.phone}</td>
              <td className="ContactActions cell">
                <button>E</button>
                <button>D</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactsTable;
