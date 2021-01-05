import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppBar from '../AppBar/AppBar';
import AppLogo from '../AppLogo/AppLogo';
import NavItem from '../NavItem/NavItem';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import Clock from '../Clock/Clock';
import Counter from '../Counter/Counter';
import './Netflix.css';
import Form from '../Form/Form';
import HomePage from '../../routes/Home/Home'
import ShowDetail from '../../routes/ShowDetail/ShowDetail';

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
        // for Login Button change state
        const button = this.state.username !== null ? (<LogoutButton logout={this.logout}/>) : (<LoginButton login={this.login}/>)

        return (
        <Router>
            <AppBar>
                <AppLogo/>{' '}
                <NavItem path='/'>Home</NavItem>{' '}
                <NavItem path='/myList'>My List</NavItem>{' '}
                <div className='grow'/>
                {button}
            </AppBar>
            <main>
                {this.state.username !== null && this.state.username}
                <br/>
                <Switch>
                    <Route path='/' exact>
                        <HomePage/>
                    </Route>
                    <Route path='/myList'>My List</Route>
                    <Route path='/shows/:id/:name?' exact>
                        <ShowDetail/>
                    </Route>
                </Switch>
                <br/>
                <Clock datetime='value changes'/>
                <Counter/>
                <br/>
                <Form/>
            </main>
        </Router>
        );
    }
}

// only one single export default. Naming doesnt matter.
export default Netflix;