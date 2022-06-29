import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
    const [billAmount, setBillAmount] = useState(0);
    const [tipAmount, setTipAmount] = useState(0);
    const [totalWithTip, setTotalWithTip] = useState(0);
    const [costPerPerson, setCostPerPerson] = useState(0);
    const tip = 10;
    const [numberOfPeople, setNumberOfPeople] = useState(1);

    function getTipAmount(bill, tip) {
        return bill * (tip / 100);
    }

    function getTotalwTip(bill, tip) {
        return getTipAmount(bill, tip) + bill;
    }

    function unselectAll(event) {
        event.target.parentNode.childNodes.forEach((li) =>
            li.classList.remove("clicked")
        );
    }

    useEffect(() => {
        setTipAmount(getTipAmount(billAmount, tip));
        setTotalWithTip(getTotalwTip(billAmount, tip));
        let CostPerPersonFixed = totalWithTip / numberOfPeople;
        setCostPerPerson(CostPerPersonFixed.toFixed(2));
    }, [billAmount, tipAmount, totalWithTip, costPerPerson, numberOfPeople]);

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
                    <div>
                        <p>Tip Amount</p>
                        <div className="tipButtons">
                            <button>10%</button>
                            <button>15%</button>
                            <button>20%</button>
                        </div>
                    </div>

                    <button className="customTipButton">Custom</button>
                </div>

                <p>How many people are paying?</p>

                <ul className="splitContainer">
                    {[1, 2, 3, 4, 5, 6].map((item) => {
                        return (
                            <li
                                key={item}
                                onClick={(event) => {
                                    setNumberOfPeople(item);

                                    unselectAll(event);

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
