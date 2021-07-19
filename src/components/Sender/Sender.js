import React from 'react';
import "./Sender.css";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Sender = () => {
    const sender = useSelector(state => state.transfer.sender)
    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center py-8">
                <h1 className="p-2 text-3xl">Confirm Sender</h1>
                <div className={"flex flex-col justify-center w-1/2 text-xl bg-white rounded-3xl shadow-lg p-12"}>
                    <div className="flex justify-evenly">
                        <div className={"sender-info flex flex-col p-2 rounded-lg m-2"}>
                            <h3>UserName:</h3>
                            <p className="font-bold">{sender.username}</p>
                        </div>
                        <div className={"sender-info flex flex-col p-2 rounded-lg m-2"}>
                            <h3>Email</h3>
                            <p className="font-bold">{sender.email}</p>
                        </div>
                    </div>
                    <div className={"sender-info flex flex-col p-2 rounded-lg m-2"}>
                        <h3>Mobile Number</h3>
                        <p className="font-bold">{sender.mobileNumber}</p>
                    </div>
                    <div className={"sender-info flex flex-col p-2 rounded-lg m-2"}>
                        <h3 className="text-xl">Current Balance:</h3>
                        <p className="font-bold text-3xl">{sender.currentBalance}</p>
                    </div>
                    <div className={"p-2 flex justify-center my-3 mx-2"}>
                        <NavLink to="/receiver" className={"btn-proceed bg-green-500 hover:bg-green-700 rounded-lg mx-2 p-3"}>
                            Proceed
                        </NavLink>
                        <NavLink to="/customers" className={"btn-cancel bg-gray-400 hover:bg-gray-700 rounded-lg mx-2 p-3"}>
                            Go Back
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Sender;