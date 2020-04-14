import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';

const NewRoute = ()=>{
  return (
    <div>
      <p>New Route</p>
  </div>
  );
};

const Home = ()=>{
  return (
    <div>
      <p>Home</p>
    </div>
  );
};

class App extends React.Component {
  
  render() { 
    return ( 
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/newRoute'>New Route</Link></li>
          </ul>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/newRoute' component={NewRoute}/>
          </Switch>
        </div>
      </BrowserRouter>
     );
  }
}
 
export default App;
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

// export default App;
