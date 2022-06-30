import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
    const [billAmount, setBillAmount] = useState(0);
    const [tipAmount, setTipAmount] = useState(0);
    const [totalWithTip, setTotalWithTip] = useState(0);
    const [costPerPerson, setCostPerPerson] = useState(0);
    const [tip, setTip] = useState(0);
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [dialogOpen, setDialogOpen] = useState(false);

    function getTipAmount(bill, tip) {
        let wholeTipAmount = bill * (tip / 100);
        let tipDecimal = wholeTipAmount.toFixed(2);
        return parseInt(tipDecimal); // not working
    }

    function getTotalwTip(bill, tip) {
        return getTipAmount(bill, tip) + parseInt(bill);
    }

    function unselectAll(childNodes) {
        childNodes.forEach((li) => li.classList.remove("clicked"));
    }

    function convertTip(tip) {
        return parseInt(tip.slice(0, 2));
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
    ]);

    return (
        <div className="calculatorContainer">
            <div className="calculatorFunctions">
                <p>Bill Amount</p>

                <input
                    type="text"
                    placeholder="0.00"
                    onChange={(event) =>
                        setBillAmount(parseInt(event.target.value))
                    }
                />
                <div className="tipTotals">
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
                                    key={i}
                                    onClick={(event) => {
                                        setTip(convertTip(tipPercent));

                                        unselectAll(
                                            event.target.parentNode.childNodes
                                        );
                                        event.target.classList.toggle(
                                            "clicked"
                                        );
                                    }}
                                >
                                    {tipPercent}
                                </button>
                            );
                        })}
                    </div>
                    <button
                        className="customTipButton"
                        onClick={(event) => {
                            unselectAll(
                                event.target.parentNode.childNodes[1].childNodes
                            );
                            setDialogOpen(true);

                            event.target.classList.toggle("clicked");
                        }}
                    >
                        Custom Tip
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
                                key={item}
                                onClick={(event) => {
                                    setNumberOfPeople(item);
                                    console.log(event);

                                    unselectAll(
                                        event.target.parentNode.childNodes
                                    );

                                    event.target.classList.toggle("clicked");
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
