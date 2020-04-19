import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = ()=>{
    const theStyle ={
        textDecoration: 'none', 
        color: '#212529',
        margin: '10px'
    };

    return(
        <div className='NavBar'>
            <span className='NavItemSpan'><Link style={theStyle} to='/'>Home</Link></span>
            <span className='NavItemSpan'><Link style={theStyle} to='/eventLogs'>Event Logs</Link></span>
            <span className='NavItemSpan'><Link style={theStyle} to='/chatLogs'>All Chat Logs</Link></span>
            <span className='NavItemSpan'><Link style={theStyle} to='/chatLogs/Mars'>Mars</Link></span>
            <span className='NavItemSpan'><Link style={theStyle} to='/chatLogs/Jupiter'>Jupiter</Link></span>
            <span className='NavItemSpan'><Link style={theStyle} to='/chatLogs/Saturn'>Saturn</Link></span>
            <span className='NavItemSpan'><Link style={theStyle} to='/chatLogs/Sun'>Sun</Link></span>
            <span className='NavItemSpan'><Link style={theStyle} to='/chatLogs/Earth'>Earth</Link></span>            
        </div>
    );
};

export default NavBar;