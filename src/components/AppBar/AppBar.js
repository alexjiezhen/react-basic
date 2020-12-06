import React from 'react';
import './AppBar.css';

//Functional Component (Dumb Component)
//Normally use for display data, text, image. Something simple.
export default function AppBar(props) {
    return <div className='app-bar'>{props.children}</div>;
}