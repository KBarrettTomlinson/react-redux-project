import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, resetCount } from '../redux/ducks/counter.js';
import { Button } from '@material-ui/core';
import './Counter.css';

const Counter = (props) => {

    const {name} = props;
    const textInternal = `The internal in the Counter component for ${name} is:`;
    const [internalCount, setInternalCount] = useState(0); 

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
        setInternalCount(internalCount + 1);
    }

    const handleDecrement = () => {
        dispatch(decrement());
        setInternalCount(internalCount -1);
    }

    const handleResetCount = () => {
        const isPositive = internalCount >= 0;
        if (isPositive) {
            for (let i = 0; i < internalCount; i++) {
                console.log("decrement");
                dispatch(decrement());
            }
        } else { 
            for (let i = 0; i < Math.abs(internalCount); i++) {
                dispatch(increment());
                console.log("increment");
            }
        }
        setInternalCount(0);
    }

    return (
        <React.Fragment>
            <p>{textInternal} {internalCount}</p>
            <div className = "button">
                <Button variant="contained" color="primary"onClick = {handleIncrement}>
                    Increment
                </Button>
            </div>

            <div className = "button">
                <Button variant="contained" color="secondary" onClick = {handleDecrement}>
                    Decrement
                </Button>
            </div>

            <div className = "button">
                <Button variant="contained" color="default" onClick = {handleResetCount}>
                    Reset Count
                </Button>
            </div>

        </React.Fragment>
    );
};

export default Counter;