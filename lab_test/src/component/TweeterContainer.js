import React from 'react';
import Comment from './Comment';

class TweeterContainer extends React.Component {
    state = { 
        comments : [],
        tmpComment:''
    }

    handleChange = event =>{
        this.setState({tmpComment: event.target.value});
    };

    handleSubmit = event =>{
        event.preventDefault();
        let tmpList = this.state.comments;
        tmpList.push(this.state.tmpComment);
        this.setState({
            comments : tmpList,
            tmpComment:''
        });
    };

    render() { 
        return ( 
            <>
                <h2>{this.props.status}</h2>
                <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" name="comment" onChange={this.handleChange}/>
                    </label>
                    <button type="submit">Post</button>
                </form>
                </div>
                <ul>
                    {this.state.comments.map(comment => (
                        <>
                            <Comment comment={comment}/>
                            <br/>
                        </>
                    ))}
                </ul>
            </>
         );
    }
}
 
export default TweeterContainer;