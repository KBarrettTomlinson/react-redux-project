import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/ducks/users';

const User = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);

    const users = useSelector((state) => state.users.users);
    console.log(users);

    return (
        <React.Fragment>
            <h1>User Component</h1>
        </React.Fragment>
    );
}

export default User;