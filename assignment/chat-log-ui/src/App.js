import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TableEvents from './components/TableEvents';
import TableChats from './components/TableChats';
import Home from './components/Home';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';


class App extends React.Component {
  render(){
    return (
    <BrowserRouter>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/eventLogs' component={TableEvents}/>
          <Route exact path='/chatLogs' component={TableChats}/>
          <Route path='/chatLogs/:roomname?' component={TableChats}/>
        </Switch>
      </div>
    </BrowserRouter>
    )
  }
}

export default App;
