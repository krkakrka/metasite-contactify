import React from 'react';
import _ from 'lodash';
import './ContactsTable.css';

function sortContactsAsc(contacts, sortOrder) {
  const sorted = _.sortBy(contacts, (contact) => contact.name);
  return sortOrder === 'desc' ? sorted.reverse() : sorted;
}

function ContactsTable({ contacts, onContactSelect }) {
  const [sortOrder, setSortOrder] = React.useState('asc');
  const resortContactsByName = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
  const sortedContacts = sortContactsAsc(contacts, sortOrder);

  return (
    <div className="ContactsTable">
      <table>
        <thead>
          <tr>
            <th className="NameColumn cell" onClick={resortContactsByName}>
              {`Name ${sortOrder}`}
            </th>
            <th className="SurnameColumn cell">Surname</th>
            <th className="CityColumn cell">City</th>
            <th className="EmailColumn cell">Email</th>
            <th className="PhoneColumn cell">Phone</th>
            <th className="ContactActionColumn cell"></th>
          </tr>
        </thead>
        <tbody>
          {sortedContacts.map(contact => (
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
