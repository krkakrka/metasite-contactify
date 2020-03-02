import React from 'react';
import { Header, Contacts, Footer } from '../';
import CONTACTS_DATA from './contacts.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Contacts contacts={CONTACTS_DATA} />
      <Footer />
    </div>
  );
}

export default App;
