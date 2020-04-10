import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/College';
import './components/Student'
import Student from './components/Student';
import College from './components/College';

class App extends React.Component {
  render(){
    return (
    <>
      <Student name="Rick Rude" number="11111" enrolled={['Course 1','Course 2']}/>
      <Student name="Shawn Michaels" number="22222" enrolled={['Course 1']}/>
      <Student name="Bret Hart" number="33333" enrolled={['Course 3','Course 1']}/>
      <College name="Geroge Brown" location="Casa Loma"/>
    </>
    )
  }
}

export default App;
