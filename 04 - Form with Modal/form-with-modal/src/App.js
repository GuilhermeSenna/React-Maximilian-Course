import React, { useState } from 'react';
import UserForm from "./components/Users/UserForm";
import './App.module.css'
import Card from "./components/UI/Card";
import UserList from './components/Users/UserList';

const App = () => {

  const [users, setUser] = useState([])

  const addUserHandler = user => {
    setUser(prevUsers => {
      return [...prevUsers, user]
    })
  }

  return (
    <div>
      <Card >
        <UserForm onSaveUser={addUserHandler} />
      </ Card>
      <Card>
        <UserList users={users} />
      </ Card>
    </div>
  );
};

export default App;
