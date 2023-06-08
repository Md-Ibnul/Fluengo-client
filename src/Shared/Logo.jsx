import React from 'react';
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to='/'>
            <img src={logo} alt="logo" width={200}/>
        </Link>
    );
};

export default Logo;