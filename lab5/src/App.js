import React from 'react';
// import logo from './logo.svg';
import './App.css';
import  Home from './component/Home';
import  About from './component/About';
import  Contact from './component/Contact';
import  Error from './component/Error';
import Navigation from './component/Navigation';
import Student from './component/Student'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';

class App extends React.Component {
  
  render() { 
    return ( 
      <BrowserRouter>
        <div>
          <ul>
            <Navigation/>
          </ul>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route exact path='/Student/:studentname' component={Student}/>
            <Route path="/Student/:studentname/:studentno?" component={Student}/>
            {/* <Route component={Student}/> */}
          </Switch>
        </div>
      </BrowserRouter>
     );
  }
}
 
export default App;