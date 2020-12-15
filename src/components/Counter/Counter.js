import React, { Component } from 'react'
import './Counter.css';

export default class Counter extends Component {
    state = {
        itemCount: 0
    };

    // Binding  function to class context
    constructor() {
        super();
        this.addToCounter = this.addToCounter.bind(this);
        this.removeToCounter = this.removeToCounter.bind(this);
    };

    incrementCount() {
        this.setState({
            itemCount: this.state.itemCount + 1,
        });
    };

    decreaseCount() {
        this.setState({
            itemCount: this.state.itemCount - 1,
        });
    };

    addToCounter () {
        console.log('adding to counter');
        this.incrementCount();
    }

    removeToCounter () {
        console.log('removing to counter');
        this.decreaseCount();
    }

    render () {
        return (
            <div>
                <p>Counter ({this.state.itemCount})</p>
                <button className='button' type='button' onClick={this.addToCounter}>+</button>{' '}
                <button className='button' type='button' onClick={this.removeToCounter}>-</button>
            </div>
        )
    }
}