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
        numberOfPeople: 0,
    });

    function handleFormData(event) {
        //     if (event.target.value === "") {
        //         setBillAmount(0);
        //     } else setBillAmount(parseFloat(event.target.value));
        // }
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value,
            };
        });
    }

    const [tipAmount, setTipAmount] = useState(0);
    const [totalWithTip, setTotalWithTip] = useState(0);
    const [costPerPerson, setCostPerPerson] = useState(0);
    const [tip, setTip] = useState(0);
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [customTip, setCustomTip] = useState(false);

    let totalPeople = [1, 2, 3, 4, 5, 6];

    function getTipAmount(bill, tip) {
        let wholeTipAmount = bill * (tip / 100);
        let tipDecimal = wholeTipAmount.toFixed(2);
        return parseFloat(tipDecimal);
    }

    useEffect(() => {
        setTipAmount(getTipAmount(formData.billAmount, tip));

        let totalwTipNum =
            getTipAmount(formData.billAmount, tip) +
            parseFloat(formData.billAmount);
        setTotalWithTip(totalwTipNum.toFixed(2));

        let CostPerPersonFixed = totalWithTip / numberOfPeople;
        setCostPerPerson(CostPerPersonFixed.toFixed(2));
    }, [formData, tipAmount, totalWithTip, costPerPerson, numberOfPeople, tip]);

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
                    customTip={customTip}
                    tip={tip}
                    setTip={setTip}
                    setCustomTip={setCustomTip}
                />
                <CustomTip
                    dialogOpen={dialogOpen}
                    setDialogOpen={setDialogOpen}
                    customTip={customTip}
                    tip={tip}
                    setTip={setTip}
                    setCustomTip={setCustomTip}
                />

                <TipSplit
                    numberOfPeople={numberOfPeople}
                    setNumberOfPeople={setNumberOfPeople}
                    totalPeople={totalPeople}
                />
            </div>
            <CostPerPerson finalCost={costPerPerson} />
        </div>
    );
}

export default App;
