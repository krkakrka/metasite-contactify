import React from 'react';
import './ContactsTable.css';
// todo move to props later
import CONTACTS_DATA from './contacts.json';

function ContactsTable() {
  return (
    <div className="ContactsTable">
      <table>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>City</th>
          <th>Email</th>
          <th>Phone</th>
          <th></th>
        </tr>
        {CONTACTS_DATA.map(contact => (
          <tr key={contact.id}>
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
      </table>
    </div>
  );
}

export default ContactsTable;
