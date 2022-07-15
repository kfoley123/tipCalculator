import React, { useState } from "react";
import cs from "classnames";

export default function CustomTip(props) {
    const [dialogOpen, setDialogOpen] = useState(false);
    return (
        <>
            <button
                className={cs("customTipButton", {
                    clicked: props.customTip,
                })}
                onClick={() => {
                    setDialogOpen(true);
                }}
            >
                Custom Tip {props.customTip && props.tip}%
            </button>
            <dialog open={dialogOpen}>
                <h3>Custom Tip</h3>

                <form method="dialog">
                    <input type="text" placeholder="%" />
                    <div>
                        <button
                            value="cancel"
                            onClick={() => setDialogOpen(false)}
                        >
                            cancel
                        </button>
                        <button
                            name="customTip"
                            value="default"
                            onClick={(event) => {
                                setDialogOpen(false);
                                props.handleFormData(event);
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
