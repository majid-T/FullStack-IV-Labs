import React from 'react';
import LikeButton from './LikeButton';
import Timer from './Timer';

class Comment extends React.Component {
    state = { 

     }
    render() { 
        return ( 
            <>
                <Timer/>
                <p>Comment</p>
                <LikeButton/>
            </>
         );
    }
}
 
export default Comment;