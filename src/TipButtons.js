import React from "react";
import cs from "classnames";

export default function TipButtons(props) {
    function convertTip(tip) {
        return parseFloat(tip.slice(0, 2));
    }

    return (
        <>
            <p>Tip Amount</p>
            <div className="tipButtons">
                {["10%", "15%", "20%"].map((tipPercent, i) => {
                    return (
                        <button
                            className={cs({
                                clicked:
                                    convertTip(tipPercent) === props.tip &&
                                    !props.customTip,
                            })}
                            key={i}
                            onClick={() => {
                                props.setTip(convertTip(tipPercent));
                                props.setCustomTip(false);
                            }}
                        >
                            {tipPercent}
                        </button>
                    );
                })}
            </div>
        </>
    );
}
