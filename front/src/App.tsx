import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const getUsers = (): void => {
    console.log('clicked');
    console.log(name);
    axios.get('http://localhost:8000/users')
      .then(res => {
        console.log('get users successfully')
        console.log(res)
      })
      .catch(err => {
        console.log('get users failed')
        console.log(err)
      })
  }

  const submitData = (e: any): void => {
    e.preventDefault();
    console.log('submit');
    axios.post('http://localhost:8000/users', {Name: name, Email: email})
      .then(res => {
        console.log('create user successfully');
        console.log(res);
      })
      .catch(err => {
        console.log('create user failed');
        console.log(err);
      })
  }

  return (
    <>
      <div>hello</div>
      <button onClick={getUsers}>get users</button>
      <form onSubmit={e => {submitData(e)}}>
        <input type="text" placeholder="name" onChange={e => {setName(e.target.value)}} value={name} />
        <br />
        <input type="text" placeholder="email" onChange={e => {setEmail(e.target.value)}} value={email} />
        <br />
        <button>submit</button>
      </form>
    </>
  );
}

export default App;
