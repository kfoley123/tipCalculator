import React from "react";
import cs from "classnames";

export default function TipSplit(props) {
    return (
        <>
            <p>How many people are paying?</p>

            <ul className="splitContainer">
                {props.totalPeople.map((item) => {
                    return (
                        <li
                            className={cs({
                                clicked: props.numberOfPeople === item,
                            })}
                            key={item}
                            onClick={(event) => {
                                props.setNumberOfPeople(item);
                            }}
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
