import {combineReducers , createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import counterReducer from './ducks/counter.js';
import userReducer from './ducks/users.js';
import { watcherSaga } from './sagas/rootSaga.js';

const reducer = combineReducers({
    counter: counterReducer,
    users: userReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;