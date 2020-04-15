import React from 'react';

class DisLikeButton extends React.Component {
    state = { 
        clicks:0
    }

    clickAdd = ()=>{
        let dislikes = this.state. clicks;
        this.setState({
            clicks:dislikes+1
        });
    };

    render() { 

        return ( 
            <>
                <button className='dislikeButton' onClick={this.clickAdd}>Dislike</button>
                <span className='likeCounts'><b>{this.state.clicks}</b></span>
            </>
        );
    }
}
 
export default DisLikeButton;