import React from 'react';
import Contact from './components/Contact';
import contactList from './ContactList';

function App() {
  return (
    <div>
      {contactList.map(contact=>(<Contact {...contact} />))}
    </div>
  );
}

export default App;
