import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newItem: '',
            list: []
        };
    }

    updateInput(key, value) {
        this.setState({
            [key]: value
        })
    }

    addItem () {
        const newItem = {
        id: 1 + Math.random(),
        value: this.state.newItem.slice()
        };

        const list = [...this.state.list];

        list.push(newItem);

        this.setState({
            list,
            newItem: "",
        })
    };

    render () {
        return(
            <>
                <form>
                    <input className='todo-input' type='text' 
                    onChange={e => this.updateInput("newItem", e.target.value)} 
                    value={this.state.newItem}/>{' '}

                    <button className='todo-button' type='submit'
                    onClick={() => this.addItem()}>
                        Add Todo
                    </button>
                </form>
                <div>
                    <ul>
                        {this.state.list.map(item => {
                            return(
                                <li key={item.id}>
                                    {item.value}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </>
        );
    }
}