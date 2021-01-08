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
                <button className='increment' onClick={(e) => this.increment(e)}>Increment</button>
                <button className='decrement' onClick={(e) => this.decrement(e)}>Decrement</button>
                <button className='reset' onClick={(e) => this.reset(e)}>Reset</button>
            </div>
        );
    }
};

export default Counter;