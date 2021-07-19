import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/index';
import Customer from './Customer/Customer';
import * as actionTypes from '../../store/actions/actionTypes';
import useComponentWilllMount from 'component-will-mount-hook'

const Customers = () => {
    const dispatch = useDispatch();
    useComponentWilllMount(() => {
        dispatch(actions.getAllUsers());
        dispatch({ type: actionTypes.TRANSFER_COMPLETE });
    });
    const users = useSelector(state => state.user.users)

    return (
        <div className="container p-5 items-center">
            <h1 className="text-5xl">Choose Sender</h1>
            <div className="flex justify-center items-center p-8">
                <div className="flex flex-col justify-center bg-white rounded-3xl shadow-lg p-8">
                    <table className="w-5/6 relative">
                        <thead>
                            <th>Sl No</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                            <th>Current Balance</th>
                        </thead>
                        <tbody className="">
                            {users.map((user, index) => (
                                <Customer user={user}
                                    key={'_' + Math.random().toString(36).substr(2, 9)}
                                    index={index + 1}
                                    clik={() => dispatch(actions.addSender(user))}
                                    link={"/sender/" + index} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}


export default Customers;