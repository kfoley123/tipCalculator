import "./App.css";
import React, { useEffect, useState } from "react";
import CostPerPerson from "./CostPerPerson";
import TipSplit from "./TipSplit";
import CustomTip from "./CustomTip";
import TipButtons from "./TipButtons";
import TipTotals from "./TipTotals";
import BillAmount from "./BillAmount";

function App() {
    const [formData, setFormData] = useState({
        billAmount: 0,
        tip: 0,
        customTip: false,
        numberOfPeople: 1,
    });

    function handleFormData(event) {
        console.log(event);
        //     if (event.target.value === "") {
        //         setBillAmount(0);
        //     } else setBillAmount(parseFloat(event.target.value));
        // }

        if (event.target.value === "default") {
            setFormData((prevFormData) => {
                return {
                    ...prevFormData,
                    customTip: true,
                    tip: event.target.parentNode.previousElementSibling.value,
                };
            });
        } else if (event.target.name === "tip") {
            setFormData((prevFormData) => {
                return {
                    ...prevFormData,
                    customTip: false,
                    tip: event.target.value,
                };
            });
        } else {
            setFormData((prevFormData) => {
                return {
                    ...prevFormData,
                    [event.target.name]: event.target.value,
                };
            });
        }
    }

    const [tipAmount, setTipAmount] = useState(0);
    const [totalWithTip, setTotalWithTip] = useState(0);
    const [costPerPerson, setCostPerPerson] = useState(0);
    // const [customTip, setCustomTip] = useState(false);

    let totalPeople = [1, 2, 3, 4, 5, 6];

    function getTipAmount(bill, tip) {
        let wholeTipAmount = bill * (tip / 100);
        let tipDecimal = wholeTipAmount.toFixed(2);
        return parseFloat(tipDecimal);
    }

    useEffect(() => {
        setTipAmount(getTipAmount(formData.billAmount, formData.tip));

        let totalwTipNum =
            getTipAmount(formData.billAmount, formData.tip) +
            parseFloat(formData.billAmount);
        setTotalWithTip(totalwTipNum.toFixed(2));

        let CostPerPersonFixed = totalWithTip / formData.numberOfPeople;
        setCostPerPerson(CostPerPersonFixed.toFixed(2));
    }, [formData, tipAmount, totalWithTip, costPerPerson]);

    return (
        <div className="calculatorContainer">
            <div className="calculatorFunctions">
                <BillAmount handleFormData={handleFormData} />

                <TipTotals
                    billAmount={formData.billAmount}
                    totalWithTip={totalWithTip}
                    tipAmount={tipAmount}
                />

                <TipButtons
                    customTip={formData.customTip}
                    tip={formData.tip}
                    handleFormData={handleFormData}
                />

                <CustomTip
                    customTip={formData.customTip}
                    tip={formData.tip}
                    handleFormData={handleFormData}
                />

                <TipSplit
                    numberOfPeople={formData.numberOfPeople}
                    handleFormData={handleFormData}
                    totalPeople={totalPeople}
                />
            </div>
            <CostPerPerson finalCost={costPerPerson} />
        </div>
    );
}

export default App;
