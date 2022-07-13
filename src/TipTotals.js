import React from "react";
import cs from "classnames";

export default function TipTotals(props) {
    return (
        <div className={cs("tipTotals", { hidden: props.billAmount <= 0 })}>
            <p>Tip Amount:$ {props.tipAmount}</p>
            <p>
                Total with Tip:$
                {props.totalWithTip}
            </p>
        </div>
    );
}
