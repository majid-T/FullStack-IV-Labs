import React from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';

const Navigation = ()=>{
    return(
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>about</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </>
    );
};

export default Navigation;