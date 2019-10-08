import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Contact name='Kelly Jimenez' img='https://randomuser.me/api/portraits/men/7.jpg' online='true' />
      <Contact name='William Little' img='https://randomuser.me/api/portraits/men/79.jpg' online='false' />
      <Contact name='Shelly Ward' img='https://randomuser.me/api/portraits/women/0.jpg' online='true' />
    </div>
  );
}

export default App;
