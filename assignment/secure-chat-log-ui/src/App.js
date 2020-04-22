import React from 'react';
import Login from './components/Login';
import './App.css';
import NavBar from './components/NavBar';
import TableEvents from './components/TableEvents';
import TableChats from './components/TableChats';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: 'test',
      token: ''
    }

    this.updateLoginStatus = this.updateLoginStatus.bind(this)
  }
  
  
  updateLoginStatus (userObject) {
    this.setState(userObject)
  }

  Element = ()=>{
    if(this.state.loggedIn){
      return(
        <BrowserRouter>
          <div>
            <NavBar username={this.state.username}/>
            <Switch>
              <Route exact path='/' render={(props) => <TableEvents {...props} token={this.state.token} />}/>
              <Route path='/eventLogs' render={(props) => <TableEvents {...props} token={this.state.token} />}/>
              <Route exact path='/chatLogs' render={(props) => <TableChats {...props} token={this.state.token} />}/>
              <Route path='/chatLogs/:roomname?' render={(props) => <TableChats {...props} token={this.state.token} />}/>
            </Switch>
          </div>
        </BrowserRouter>
      );
    }else{
      return(
        <Login updateLoginStatus={this.updateLoginStatus}/>
      );
    }
  }

  render(){
    return ( 
      <this.Element/>
    );
  }
}

export default App;
