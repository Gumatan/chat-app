import React from 'react';
import Contact from './components/Contact';
import contactList from './ContactList';

function App() {
  return (
    <div>
      {contactList.map(contact=>(<Contact name={contact.name} img={contact.img} online={contact.online} />))}
    </div>
  );
}

export default App;
