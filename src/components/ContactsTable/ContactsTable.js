import React from 'react';
import './ContactsTable.css';

function ContactsTable({ contacts, onContactSelect }) {
  return (
    <div className="ContactsTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>City</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id} onClick={() => onContactSelect(contact)}>
              <td>{contact.name}</td>
              <td>{contact.surname}</td>
              <td>{contact.city}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactsTable;
