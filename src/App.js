import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import cs from "classnames";

function App() {
    const tipTotalsDiv = useRef(null);
    const [billAmount, setBillAmount] = useState(0);
    const [tipAmount, setTipAmount] = useState(0);
    const [totalWithTip, setTotalWithTip] = useState(0);
    const [costPerPerson, setCostPerPerson] = useState(0);
    const [tip, setTip] = useState(0);
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [customTip, setCustomTip] = useState(false);

    function getTipAmount(bill, tip) {
        let wholeTipAmount = bill * (tip / 100);
        let tipDecimal = wholeTipAmount.toFixed(2);
        return parseFloat(tipDecimal);
    }

    function getTotalwTip(bill, tip) {
        let totalwTipNum = getTipAmount(bill, tip) + parseFloat(bill);
        return totalwTipNum.toFixed(2);
    }

    function convertTip(tip) {
        return parseFloat(tip.slice(0, 2));
    }

    useEffect(() => {
        setTipAmount(getTipAmount(billAmount, tip));
        setTotalWithTip(getTotalwTip(billAmount, tip));
        let CostPerPersonFixed = totalWithTip / numberOfPeople;
        setCostPerPerson(CostPerPersonFixed.toFixed(2));
    }, [
        billAmount,
        tipAmount,
        totalWithTip,
        costPerPerson,
        numberOfPeople,
        tip,
        getTotalwTip,
    ]);

    return (
        <div className="calculatorContainer">
            <div className="calculatorFunctions">
                <p>Bill Amount</p>

                <input
                    type="text"
                    placeholder="0.00"
                    onChange={(event) => {
                        if (isNaN(event.target.value)) {
                            setBillAmount(0);
                        }
                        setBillAmount(parseFloat(event.target.value));
                    }}
                />
                <div
                    className={cs("tipTotals", { hidden: billAmount > 0 })}
                    ref={tipTotalsDiv}
                >
                    <p>Tip Amount:$ {tipAmount}</p>
                    <p>
                        Total with Tip:$
                        {totalWithTip}
                    </p>
                </div>

                <div>
                    <p>Tip Amount</p>
                    <div className="tipButtons">
                        {["10%", "15%", "20%"].map((tipPercent, i) => {
                            return (
                                <button
                                    className={cs({
                                        clicked:
                                            convertTip(tipPercent) === tip &&
                                            !customTip,
                                    })}
                                    key={i}
                                    onClick={(event) => {
                                        setTip(convertTip(tipPercent));
                                        setCustomTip(false);
                                    }}
                                >
                                    {tipPercent}
                                </button>
                            );
                        })}
                    </div>
                    <button
                        className={cs("customTipButton", {
                            clicked: customTip,
                        })}
                        onClick={(event) => {
                            setDialogOpen(true);
                        }}
                    >
                        Custom Tip {customTip && tip}
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
                                    value="default"
                                    onClick={(event) => {
                                        setDialogOpen(false);
                                        setCustomTip(true);
                                        setTip(
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
                </div>

                <p>How many people are paying?</p>

                <ul className="splitContainer">
                    {[1, 2, 3, 4, 5, 6].map((item) => {
                        return (
                            <li
                                className={cs({
                                    clicked: numberOfPeople === item,
                                })}
                                key={item}
                                onClick={(event) => {
                                    setNumberOfPeople(item);
                                }}
                            >
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="finalOutput">
                <p>
                    <span>${costPerPerson}</span> / per person
                </p>
            </div>
        </div>
    );
}

export default App;
