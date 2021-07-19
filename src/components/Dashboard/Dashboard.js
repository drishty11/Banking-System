import React, { useEffect } from 'react';
import "./Dashboard.css";
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions/index';
import photo from '../../images/2311974.jpg';
const Dashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.getTransactions());
    }, [dispatch])
    return (
        <div className={"min-h-full w-full flex justify-center items-center"}>
            <div className={"h-full py-8 flex flex-col container items-center align-center justify-center"}>
                <h1 className={" text-6xl font-bold my-5"}>Basic Banking System</h1>
                <div className="flex justify-evenly items-center align-middle">
                    <div className="w-1/2 h-1/2  justify-center">
                        <img src={photo} alt="abcd" className="rounded-lg opacity-60" />
                    </div>
                    <div className="flex flex-col justify-center ">
                        <p className={" text-3xl font-weight-bold my-3"}>Create Simple Transactions</p>
                        <NavLink to="/customers" className={"btn-grad rounded-lg my-3 ml-2 p-3"}>
                            Transfer Money
                        </NavLink>
                        <NavLink to="/allaccounts" className={"btn-grad rounded-lg my-3 ml-5 p-3"}>
                            Accounts
                        </NavLink>
                        <NavLink to="/transfers" className={"btn-grad rounded-lg my-3 ml-7 p-3"}>
                            Transactions History
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;