import React from 'react';
import './LoginButton.css';

export default function LoginButton(props) {

    return (
        <button className='LoginButton' type='text' onClick={props.login}>Login</button>
    );
}