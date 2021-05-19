import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, resetCount } from '../redux/ducks/counter.js';
import { Button } from '@material-ui/core';
import './Counter.css';

const Counter = () => {
    const text = "The count in the Counter component is:";
    const count = useSelector(state => state.counter.count);

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }

    const handleResetCount = () => {
        dispatch(resetCount());
    }

    return (
        <React.Fragment>
            <p>{text} {count}</p>
            <div class = "button">
                <Button variant="contained" color="primary"onClick = {handleIncrement}>
                    Increment
                </Button>
            </div>

            <div class = "button">
                <Button variant="contained" color="secondary" onClick = {handleDecrement}>
                    Decrement
                </Button>
            </div>

            <div class = "button">
                <Button variant="contained" color="default" onClick = {handleResetCount}>
                    Reset Count
                </Button>
            </div>

        </React.Fragment>
    );
};

export default Counter;