import React, { useState } from 'react';

import './App.css';

import Form from './components/form/Form'

function App() {

  const [users, setUsers] = useState([]) //Set on response from axios call - when the new user is created this array will get a new item containing their name

  return (
    <div className="App">

      <Form users={users} setUsers={setUsers} />

      {users.map((item, index) => <h3 key={index}>{item}</h3>)}

    </div>
  );
}

export default App;
