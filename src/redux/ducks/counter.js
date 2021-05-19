const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const RESET_COUNT = 'resetCount';

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});

export const resetCount = () => ({
    type: RESET_COUNT
});

const initialState = {
    count: 0
};

export default (state = initialState, action ) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1};
        case DECREMENT:
            return {...state, count: state.count - 1};
        case RESET_COUNT:
            return {...state, count: 0};
        default:
            return state;
    }
};