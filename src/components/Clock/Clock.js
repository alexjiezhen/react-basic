import React, {Component} from 'react';

export default class Clock extends Componenet {
    constructor(props) {
        super();
        this.state = {
            datetime: new Date(),
            timezone: 'GMT+8',
            format: '24hours',
        };
    };

    //attaching component to the browser 
    // only run once
    componentDidMount () {
        this.timer = setInterval ( () => {
            this.setState({
                datetime: new Date(),
            });
            console.log(this.state.datetime);
        }, 1000);
    }

    //updating component
    componentDidUpdate () {
    //update state here
    // if (this.state.datetime.AMPM === 'PM') {
    //     this.state.datetime + 12hour;
    // }
    // not a valid javascript. just for example.
    }

    //removing component browser
    //only run once
    componentWillUnmount () {
        clearInterval(this.timer);
    }

    render () {
        return <div>{this.state.datetime.toLocaleTimeString()}</div>;
    }

}