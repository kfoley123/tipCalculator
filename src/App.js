import "./App.css";

function App() {
    return (
        <div className="calculatorContainer">
            <div className="calculatorFunctions">
                <p>Bill Amount</p>

                <input type="text" placeholder="$0.00" />

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
                    <span>$0.00</span> / per person
                </p>
            </div>
        </div>
    );
}

export default App;
