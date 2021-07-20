import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import Text from './Text';
import Data from './Data';
import './index.css';

function App() {
 const [people, setPeople] = useState(Data);
  return (
  <main>
        <section className="message">
        <Text />
        </section>
        
      <section className="container">
        <h3>{people.length} Total Birthdays Today</h3>
        <List people={people}/>
      <button onClick={() => setPeople([])}>Clear All</button>

      </section>
  </main>

  );
}

export default App;
