import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './StudentList';
import DeleteStudent from './DeleteStudent';

function App() {
  return (
    <>
      <UserList/>
      <DeleteStudent/>
    </>
  );
}

export default App;
