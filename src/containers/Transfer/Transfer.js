import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import * as actionTypes from '../../store/actions/actionTypes';

import { toast } from 'react-toastify';

const Transfer = () => {
    const [amount, setamount] = useState("")
    const sender = useSelector(state => state.transfer.sender)
    const receiver = useSelector(state => state.transfer.receiver)
    const dispatch = useDispatch()
    const balanceUpdates = () => {
        const pattern = /^\d+$/;

        if (!pattern.test(amount)) {
            toast.error("Invalid amount");
            const tData = {
                sender: sender.email,
                receiver: receiver.email,
                amount: parseInt(amount),
                state: "failure"
            }
            dispatch(actions.addTransaction(tData))
        } else if (amount > sender.currentBalance) {
            toast.error("Transfer amount larger than sender balance");
            const tData = {
                sender: sender.email,
                receiver: receiver.email,
                amount: parseInt(amount),
                state: "failure"
            }
            dispatch(actions.addTransaction(tData))
        } else {
            dispatch({ type: actionTypes.TRANSFER_SUCCESS })
            const sData = {
                ...sender,
                currentBalance: parseInt(sender.currentBalance) - parseInt(amount)
            };
            const rData = {
                ...receiver,
                currentBalance: parseInt(receiver.currentBalance) + parseInt(amount)
            }
            dispatch(actions.updateBalances(sData, rData))
            const tData = {
                sender: sData.email,
                receiver: rData.email,
                amount: parseInt(amount),
                state: "success"
            }
            dispatch(actions.addTransaction(tData))
        }
    }
    return (
        <div className="container flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold pt-12">Transfer Form</h1>
            <div className="flex justify-center items-center w-full p-8">
                <form className={"flex flex-col justify-center bg-white rounded-3xl text-xl p-16"}>
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-green-500 flex flex-row justify-between w-5/6 p-2">
                            <h3 className="">Sender: {sender.username}</h3>
                            <h3 className="">Balance : {sender.currentBalance}</h3>
                        </div>
                        <div className="text-red-500 flex flex-row justify-between w-5/6 p-2">
                            <h3 className="">Receiver: {receiver.username}</h3>
                            <h3>Balance : {receiver.currentBalance}</h3>
                        </div>
                    </div>
                    <div className ="mt-10">
                        <input type="text"  placeholder="Transfer Amount"
                            value={amount}
                            onChange={(e) => setamount(e.target.value)}
                            className="border-green-800 rounded-md p-2 border-2 focus:border-green-300 focus:border-0 bg-transparent outline-none" />
                    </div>
                    <div className="flex p-4">
                        <NavLink to="/result">
                            <button onClick={balanceUpdates} className="btn-proceed bg-green-500 hover:bg-green-700 rounded-lg mx-2 p-2">Transfer</button>
                        </NavLink>
                        <NavLink to="/">
                            <button className="btn-cancel bg-gray-400 hover:bg-gray-700 rounded-lg mx-2 p-2">Cancel</button>
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Transfer;