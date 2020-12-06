import React from 'react';

// Functional Components accepts property via arguments
export default function NavItem(props) {
    return <a href={props.path}>{props.text}</a>;
}