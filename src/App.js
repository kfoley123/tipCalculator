import "./App.css";

function App() {
    return (
        <div className="calculatorContainer">
            <div className="calculatorFunctions">
                <p>Bill Amount</p>

                <input type="text" placeholder="0.00" />

                <div>
                    <div className="tipOptionContainer">
                        <p>Tip Amount</p>
                        <div className="tipButtons">
                            <button>10%</button>
                            <button>15%</button>
                            <button>20%</button>
                        </div>
                    </div>

                    <button>Custom</button>
                </div>

                <p>How many people are paying?</p>

                <ul className="splitContainer">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="finalOutput">
                <input type="text" placeholder="0.00" />
            </div>
        </div>
    );
}

export default App;
