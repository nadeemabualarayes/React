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

  const [num1, setNum1] = useState(7);
  const [num2, setNum2] = useState(8);
  const [sum, setsum] = useState(0);

  useEffect(() => { document.title = `My Name is ${firstName}` });
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `sum = ${num1+num2} `;
  });

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


      <p>sum = {sum} </p> 
      <button onClick={() => setsum(num1 + num2)}>
        Click me
      </button>


    </div>
  );
}

export default App;
