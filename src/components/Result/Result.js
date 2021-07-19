import React from 'react';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Result = () => {
    const transfer = useSelector(state => state.transfer.transfer)
    return (
        <div className={"container flex justify-center items-center"}>
            <div className="flex flex-col py-12 justify-center items-center text-xl">
                <div className="w-1/2">
                    <img alt="success" src={transfer ? "/success1.jpg" : "/fail.jpg"} />
                </div>
                <h3 className={transfer ? "text-green-700 text-2xl" : 'text-red-700 text-2xl'}>Transfer {transfer ? "Successful" : "Failed"}</h3>
                <NavLink to="/">
                    <button className="btn-grad p-4 rounded-xl">Go back to Home</button>
                </NavLink>
            </div>
        </div>
    );
}

export default Result;