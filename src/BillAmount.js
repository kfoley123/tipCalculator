import React from "react";

export default function BillAmount(props) {
    return (
        <>
            <p>Bill Amount</p>

            <input
                type="text"
                placeholder="0.00"
                onChange={(event) => {
                    if (event.target.value === "") {
                        props.setBillAmount(0);
                    } else props.setBillAmount(parseFloat(event.target.value));
                }}
            />
        </>
    );
}
