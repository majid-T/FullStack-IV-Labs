import React from 'react';
import './App.css';
import  Home from './component/Home';
import  About from './component/About';
import  Contact from './component/Contact';
import Navigation from './component/Navigation';
import Student from './component/Student'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import history from './History';
import Redirect from './component/Redirect';

class App extends React.Component {
  
  render() { 
    return ( 
      <BrowserRouter history={history}>
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
            <Route path="/Redirect" component={Redirect}/>
          </Switch>
        </div>
      </BrowserRouter>
     );
  }
}
 
export default App;