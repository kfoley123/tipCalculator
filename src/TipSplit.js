import React from "react";
import cs from "classnames";

export default function TipSplit(props) {
    return (
        <>
            <p>How many people are paying?</p>

            <div className="splitContainer">
                {props.totalPeople.map((item) => {
                    return (
                        <button
                            name="numberOfPeople"
                            value={item}
                            className={cs({
                                clicked: props.numberOfPeople === item,
                            })}
                            key={item}
                            onClick={props.handleFormData}
                        >
                            {item}
                        </button>
                    );
                })}
            </div>
        </>
    );
}
