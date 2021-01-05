import React from 'react';
import { NavLink } from 'react-router-dom'
import './NavItem.css';

// Functional Components accepts property via arguments
export default function NavItem({path, children}) {
    return (
        <NavLink to={path} activeclassname='nav-item--active' className='nav-item'>
            {children}
        </NavLink>
    )
}