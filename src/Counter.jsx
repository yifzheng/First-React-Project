import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Counter.css";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        });
    };
    decrement() {
        if (this.state.count !== 0){
            this.setState({
                count: this.state.count - 1
            });
        }
        else{
            alert("Cannot be less than zero");
        }
    };
    reset() {
        this.setState({
            count: 0
        });
    };
    render() {
        return (
            <div id="counter">
                <h1 float>Current Count: {this.state.count}</h1>
                <button className='increment' onClick={() => this.increment()}>Increment</button>
                <button className='decrement' onClick={() => this.decrement()}>Decrement</button>
                <button className='reset' onClick={() => this.reset()}>Reset</button>
            </div>
        );
    }
};

export default Counter;