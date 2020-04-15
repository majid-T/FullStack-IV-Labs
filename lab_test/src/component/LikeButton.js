import React from 'react';

class LikeButton extends React.Component {
    state = { 
        clicks:0
    }

    clickAdd = ()=>{
        let likes = this.state. clicks;
        this.setState({
            clicks:likes+1
        });
    };

    render() { 

        return ( 
            <>
                <button onClick={this.clickAdd}>Like</button>
                <span className='likeCounts'><b>{this.state.clicks}</b></span>
            </>
        );
    }
}
 
export default LikeButton;