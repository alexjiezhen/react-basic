// Need this import statement to indicate to compiler this is a React Component
import React from 'react';
//except .js extension, all import require extension
import logo from '../../assets/netflix-logo.svg';
import './AppLogo.css';

export default function AppLogo () {
    return (
        <div>
            <img src={logo} alt='logo'></img>
        </div>
    );
}