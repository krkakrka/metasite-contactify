import React from 'react';
import { Header, Contacts, Footer } from '../';
import CONTACTS_DATA from './contacts.json';
import './App.css';

const MAIN_LINKS = [
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Contacts', href: '#contacts' },
  { label: 'Notifications', href: '#notifications' },
];
const OTHER_LINKS = [
  { label: 'Groups', href: '#groups' },
  { label: 'Frequently contacted', href: '#frequently-contacted' },
  { label: 'Preferences', href: '#preferences' },
  { label: 'Log out', href: '#logout' },
];

function App() {
  return (
    <div className="App">
      <Header mainLinks={MAIN_LINKS} dropdownLinks={OTHER_LINKS} />
      <Contacts contacts={CONTACTS_DATA} />
      <Footer mainLinks={MAIN_LINKS} otherLinks={OTHER_LINKS} />
    </div>
  );
}

export default App;
