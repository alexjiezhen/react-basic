import React from 'react';
import './NavItem.css';

// Functional Components accepts property via arguments
export default function NavItem(props) {
    return <a href={props.path} activeClassName='nav-item--active' className='nav-item'>{props.text}</a>;
}