import React from "react";
import cs from "classnames";

export default function CustomTip(props) {
    return (
        <>
            <button
                className={cs("customTipButton", {
                    clicked: props.customTip,
                })}
                onClick={() => {
                    props.setDialogOpen(true);
                }}
            >
                Custom Tip {props.customTip && props.tip}%
            </button>
            <dialog open={props.dialogOpen}>
                <h3>Custom Tip</h3>

                <form method="dialog">
                    <input type="text" placeholder="%" />
                    <div>
                        <button
                            value="cancel"
                            onClick={() => props.setDialogOpen(false)}
                        >
                            cancel
                        </button>
                        <button
                            value="default"
                            onClick={(event) => {
                                props.setDialogOpen(false);
                                props.setCustomTip(true);
                                props.setTip(
                                    event.target.parentNode
                                        .previousElementSibling.value
                                );
                            }}
                        >
                            confirm
                        </button>
                    </div>
                </form>
            </dialog>
        </>
    );
}
