import React from 'react';
import logo from './logo.svg';
import './App.css';
import TweeterContainer from './component/TweeterContainer';

function App() {
  return (
    <div className="App">
      <TweeterContainer status="Bad day To be out!"/>
      <TweeterContainer status="Wonder how much i should stay home..."/>
      <TweeterContainer status="This is good, i never go out much any way..."/>
    </div>
  );
}

export default App;
