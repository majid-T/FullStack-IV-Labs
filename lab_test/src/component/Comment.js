import React from 'react';
import LikeButton from './LikeButton';
import Timer from './Timer';
import DisLike from './DisLikeButton';

class Comment extends React.Component {
    state = { 

     }
    render() { 
        return (
            <>
                <Timer/>
                <p className='commentText'>{this.props.comment}</p>
                <LikeButton/>
                <DisLike/>
            </>
         );
    }
}
 
export default Comment;