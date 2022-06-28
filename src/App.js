import "./App.css";
import React, { useState } from "react";

function App() {
    const [billAmount, setBillAmount] = useState(0);

    function getTipAmount(bill, tip) {
        return parseInt(bill) * (tip / 100);
    }

    function getTotalwTip(bill, tip) {
        return getTipAmount(bill, tip) + parseInt(bill);
    }

    return (
        <div className="calculatorContainer">
            <div className="calculatorFunctions">
                <p>Bill Amount</p>

                <input
                    type="text"
                    placeholder="$0.00"
                    onChange={(event) => setBillAmount(event.target.value)}
                />
                <div className="tipTotals">
                    <p>Tip Amount:$ {getTipAmount(billAmount, 15)}</p>
                    <p>
                        Total with Tip:$
                        {getTotalwTip(billAmount, 15)}
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
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                </ul>
            </div>
            <div className="finalOutput">
                <p>
                    <span>${getTotalwTip(billAmount, 15) / 2}</span> / per
                    person
                </p>
            </div>
        </div>
    );
}

export default App;
