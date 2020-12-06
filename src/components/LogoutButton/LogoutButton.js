import React from 'react';

export default function LogoutButton(props) {
    return (
        <button type='text' onClick={props.logout}>Log Out</button>
    )
}