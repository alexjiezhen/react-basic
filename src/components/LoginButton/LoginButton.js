import React from 'react';

export default function LoginButton(props) {

    return (
        <button type='text' onClick={props.login}>Login</button>
    );
}