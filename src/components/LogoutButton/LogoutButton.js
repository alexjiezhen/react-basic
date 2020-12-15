import React from 'react';
import './LogoutButton.css'

export default function LogoutButton(props) {
    return (
        <button className='LogoutButton' type='text' onClick={props.logout}>Log Out</button>
    )
}