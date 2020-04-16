import React from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';

const Navigation = ()=>{
    return(
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>about</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/Student/Jim Smith'>Student: Jim Smith</Link></li>
            <li><Link to='/Student/Jim Smith/50001'>Student: Jim Smith,Student No:50001</Link></li>
            <li><Link to='/Redirect'>Redirect</Link></li>
        </>
    );
};

export default Navigation;