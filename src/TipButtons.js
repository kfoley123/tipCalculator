import React from "react";
import cs from "classnames";

export default function TipButtons(props) {
    return (
        <>
            <p>Tip Amount</p>
            <div className="tipButtons">
                {[10, 15, 20].map((tipPercent, i) => {
                    return (
                        <button
                            name="tip"
                            value={tipPercent}
                            className={cs({
                                clicked:
                                    tipPercent === props.tip &&
                                    !props.customTip,
                            })}
                            key={i}
                            onClick={props.handleFormData}
                        >
                            {tipPercent}%
                        </button>
                    );
                })}
            </div>
        </>
    );
}
