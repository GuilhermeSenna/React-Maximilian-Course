import React, { useState } from 'react';
import UserForm from "./components/UserForm";
import './App.css'
import Card from "./components/Card";
import UserList from './components/UserList';

const App = () => {

  const [users, setUser] = useState([])

  const addUserHandler = user => {
    setUser(prevUsers => {
      return [...prevUsers, user]
    })
  }

  return (
    <div>
      <Card>
        <UserForm onSaveUser={addUserHandler} />
      </ Card>
      <Card>
        <UserList users={users} />
      </ Card>
    </div>
  );
}

export default App;
