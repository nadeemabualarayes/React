/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */


import React, { useEffect, useState } from 'react';


function App() {
  const [firstName, setFirstName] = useState('');
  const lastName = useState('Abu Al Arayes');
  const address = useState('Ramallah - Palestine');
  const [list, setList] = useState(['Red', 'Yallow', 'Green'])

  useEffect(() => { document.title = `My Name is ${firstName}` });


  //
  return (
    <div>
      <h1>My Name is : {firstName}</h1>
      <h1>My LastName is : {lastName}</h1>
      <p> my Address :{address}</p>
      <ul>
        {list.map((item, i) => {
          return (
            <li key={i}>
              <span>{item}</span>
            </li>
          )
        })}
      </ul>

      <input value={firstName} onChange={(e) => {
        console.log(e.target.value);
        setFirstName(e.target.value)
      }}>
</input>


    </div>
  );
}

export default App;
