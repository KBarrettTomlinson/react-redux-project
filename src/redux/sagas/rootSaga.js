import {takeLatest} from 'redux-saga/effects';
import { handleGetUsers } from './handler/users.js';
import {GET_USERS} from '../../redux/ducks/users.js';

export function* watcherSaga() {
    yield takeLatest(GET_USERS, handleGetUsers);
}