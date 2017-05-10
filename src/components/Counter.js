import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, incrementByValue } from '../AC/counter';

class Counter extends Component {
    state = {
        incrementByValue: 0
    };

    handleChange = (incrementByValue) => {
        this.setState({
            incrementByValue: +incrementByValue
        });
    };

    render() {
        const { plusOne, counter, plusBy } = this.props;
        const { incrementByValue } = this.state;

       return (
            <div>
                <h1>{counter}</h1>
                <button onClick={plusOne}>Increment</button>
                <br />
                <input type="number" value={incrementByValue} onChange={(e) => this.handleChange(e.target.value)}/>
                <button onClick={() => plusBy(incrementByValue)}>Increment by value</button>
            </div>
        )
    }
}

export default connect((state) => {
    const { counter } = state;
    return { counter }
}, {
    plusOne: increment,
    plusBy: incrementByValue
})(Counter);