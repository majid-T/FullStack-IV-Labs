import React from 'react';
import './App.css';
import TweeterContainer from './component/TweeterContainer';

function App() {
  return (
    <div className="App">
      <TweeterContainer status="Bad day To be out!"/>
      <TweeterContainer status="Wonder how much I should stay home..."/>
      <TweeterContainer status="This is good, I never go out much any way..."/>
    </div>
  );
}

export default App;
