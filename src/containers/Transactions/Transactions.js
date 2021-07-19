import React from 'react';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Transaction from './Transaction/Transaction';


const Transactions = () => {

    const transactions = useSelector(state => state.transaction.transactions)

    return (
        <div className="container py-4">
            <h1 className="text-2xl font-bold p-4">Transactions</h1>
            <div className="flex-col flex justify-center items-center">
                <table className="w-4/6">
                    <thead>
                        <th>Sl No</th>
                        <th>Sender</th>
                        <th>Receiver</th>
                        <th>Amount</th>
                        <th>State</th>
                    </thead>
                    <tbody>
                        {Object.keys(transactions).map((transaction, index) => (
                            <Transaction transaction={transactions[transaction]}
                                key={'_' + Math.random().toString(36).substr(2, 9)}
                                index={index + 1} />
                        ))}
                    </tbody>
                </table>
                <NavLink className = "align-center" to="/">
                    <button className="btn-grad p-4 rounded-xl">Go back to Home</button>
                </NavLink>
            </div>
        </div>
    );
}


export default Transactions;