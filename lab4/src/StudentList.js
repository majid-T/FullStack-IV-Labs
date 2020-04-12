import React, { Component } from 'react';
import axios from 'axios';
import AddStudent from './AddStudent';

const DeleteStudentElement = (props)=>{
    return <button id={props.id} onClick={deleteUser.bind(this, props.id)}>Delete</button>
};

const deleteUser = stId => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${stId}`)
    .then(res => {
    console.log(res);
    console.log(res.data);
    });
}

class UserList extends Component {
    state = { 
        users : []
     }

    componentDidMount(){
        this.getUsers();
    }


    getUsers(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            const users = res.data;
            this.setState({users});
        });
    };


    render() { 
        return ( 
            <>
                <AddStudent/>
                <ul>
                    {this.state.users.map(user => (
                        <>
                            <li key={user.name.toString()}>{user.name}</li>
                            <DeleteStudentElement id={user.id}/>
                        </>
                    ))}
                    
                </ul>
            </>
         );
    }
}
 
export default UserList;