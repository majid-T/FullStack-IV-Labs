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
      <Student/>
      <Student/>
      <Student/>
      <College/>
    </>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
