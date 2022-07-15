import React from "react";

export default function BillAmount(props) {
    return (
        <>
            <p>Bill Amount</p>

            <input
                name="billAmount"
                type="text"
                placeholder="0.00"
                onChange={props.handleFormData}
            />
        </>
    );
}
