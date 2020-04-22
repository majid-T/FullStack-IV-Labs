import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import axios from 'axios';
import qs from 'querystring';


class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            msg:'',
            msgClass:'',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) { 
        event.preventDefault();
        console.log('handleSubmit');
        let payload = {
            email: this.state.username,
            password: this.state.password
        };
        axios.post('http://localhost:3030/login',qs.stringify(payload))
            .then(response => {
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateLoginStatus({
                        loggedIn: true,
                        username: this.state.username,
                        token: response.data.token
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                this.setState({
                    msg:'Error in Login',
                    msgClass:'errMsg',
                });
        });
    }

    render() {
        return (
            <div className='loginDiv'>
                <h3>Login</h3>
                <form>
                    <input type="text" id="username" name="username" placeholder="Username"
                        value={this.state.username} onChange={this.handleChange}/><br/>
                    <input placeholder="password" type="password" name="password"
                        value={this.state.password} onChange={this.handleChange}/><br/>
                    <button onClick={this.handleSubmit} type="submit">Login</button>
                </form>
                <div className={this.state.msgClass}>{this.state.msg}</div>
            </div>
        );
    };
}

export default LoginForm