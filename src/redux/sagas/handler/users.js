import {call, put} from 'redux-saga/effects';
import {setUsers} from '../../ducks/users.js'
import requestGetUsers from '../request/users.js'

export function* handleGetUsers(){
    try {
        const response = yield call(requestGetUsers);
        const { data } = response;
        yield put(setUsers(data));
    } catch (error){
        console.log(error);
    }
} 