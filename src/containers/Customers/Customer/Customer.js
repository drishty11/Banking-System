import React from 'react';

import { NavLink } from 'react-router-dom';

const Customer = (props) => {
    return (
        <tr className="">
            <td>{props.index}</td>
            <th> {props.user.username}</th>
            <td>{props.user.email}</td>
            <td>{props.user.mobileNumber}</td>
            <td>{props.user.currentBalance}
            </td>
            <button className={"flex text-white text-lg -right-24 absolute px-2 bg-green-500 hover:bg-blue-400 border-0 rounded-md"}>
                <NavLink to={props.link} onClick={props.clik} className="w-full no-underline">
                    Transfer
                </NavLink>
            </button>
        </tr>
    );
}

export default Customer;