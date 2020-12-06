import React, { Component } from 'react';
import AppBar from '../AppBar/AppBar';
import AppLogo from '../AppLogo/AppLogo';
import NavItem from '../NavItem/NavItem';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import './Netflix.css';

//Class Component (Smart Component)
// need extend from Component provided by 'react' library
class Netflix extends Component {
    //everything under this class will exported when export default

    state = {
        username: null,
    };

    login = () => {
        this.setState({
            username: 'Alex',
        });
    };

    logout = () => {
        this.setState({
            username: null,
        });
    };

    render() {
        const button = this.state.username !== null ? (<LogoutButton/>) : (<LoginButton/>)
        return (
        <div>
            <AppBar>
                <AppLogo logo={logo}/>{' '}
                <NavItem text='Home' path='/#home'/>{' '}
                <NavItem text='My List' path='/#myList'/>{' '}
                <div className='grow'/>
                {this.state.username !== null && this.state.username}
                {button}
            </AppBar>
        </div>
        );
    }
}

// only one single export default. Naming doesnt matter.
export default Netflix;