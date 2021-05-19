import React from 'react';
import { useSelector } from 'react-redux';

const CounterDisplay = () => {

    const text = "The count in the Counter Display component is:";
    const count = useSelector(state => state.counter.count);

    return (
        <React.Fragment>
            <p>{text} {count}</p>
            <div className = "button">
            </div>
        </React.Fragment>
    );
}

export default CounterDisplay;