import React from 'react';
import axios from 'axios';

class DeleteStudent extends React.Component {
    state = { 
        id:''
    }


    handleChange = event => {
        this.setState({ id: event.target.value });
      }
    
    handleSubmit = event => {
        this.deleteStudent(event);
    }


    deleteStudent(e){
        e.preventDefault();

        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
            .then(res => {
            console.log(res);
            console.log(res.data);
        });
    }
    
    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                    Person ID:
                    <input type="text" name="id" onChange={this.handleChange} />
                </label>
                <button type="submit">Delete</button>
                </form>
            </div>
        );
    }
}
 
export default DeleteStudent;