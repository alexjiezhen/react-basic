import React, { Component } from 'react';
import './Form.css';

export default class Todo extends Component {
    state = {
        todo: '',
    };

    onChangeEventHandler = (event) => {
        this.setState({
            todo: event.target.value,
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
    };

    render () {
        return(
            <form>
                <input className='todo-input' type='text' 
                onChange={this.onChangeEventHandler}/>{' '}
                <button className='todo-button' type='submit' onClick={this.onFormSubmit}>Add Todo</button>
            </form>
        );
    }
}