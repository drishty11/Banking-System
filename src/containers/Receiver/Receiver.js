import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/index';
import Customer from '../Customers/Customer/Customer';

const Receiver = () => {
    const users = useSelector(state => state.user.users)
    const sender = useSelector(state => state.transfer.sender)
    const newUsers = users.filter(user => user.email !== sender.email);

    const dispatch = useDispatch();

    return (
        <div className="container py-5">
            <h1 className="text-5xl">Send money to....</h1>
            <div className="flex justify-center items-center p-8">
                <div className="flex flex-col text-lg justify-center bg-white rounded-lg shadow-lg p-8">
                    <table className="w-5/6 relative">
                        <thead>
                            <th>Sl No</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                            <th>Current Balance</th>
                        </thead>
                        <tbody>
                            {newUsers.map((user, index) =>
                                <Customer user={user}
                                    key={'_' + Math.random().toString(36).substr(2, 9)}
                                    index={index + 1}
                                    clik={() => dispatch(actions.addReceiver(user))}
                                    link={"/transfer"} />
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}


export default Receiver;