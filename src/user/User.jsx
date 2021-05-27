import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/ducks/users';

const User = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);

    const users = useSelector((state) => state.users.users);
    const {name, email} = users ? users[0] : {};

    return (
        <React.Fragment>
            {users && (
                <h1>Howdy {name}: {email}</h1>
            )}
        </React.Fragment>
    );
}

export default User;