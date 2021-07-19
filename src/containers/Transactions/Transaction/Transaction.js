import React from 'react';

const Transaction = (props) => {
    let border = null;
    if (props.transaction.state === "success") {
        border = { borderRight: "5px solid green" }
    } else if (props.transaction.state === "failure") {
        border = { borderRight: "5px solid red" }
    }
    return (
        <tr style={border}>
            <td>{props.index}</td>
            <td>{props.transaction.sender}</td>
            <td>{props.transaction.receiver}</td>
            <td>{props.transaction.amount}</td>
            <td>{props.transaction.state}</td>
        </tr>
    );
}

export default Transaction;