import './App.css';
import React from 'react';
import UserList from './UserList';

function App() {

  const users = [
    {
      name: "John Doe",
      email: "john@example.com"
    },
    {
      name: "Jane Smith",
      email: "jane@example.com"
    }
  ]


  return (
    <div className="App">
      <UserList users={users} />
    </div>
  );
}

export default App;
