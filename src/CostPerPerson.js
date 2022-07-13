import React from "react";

export default function CostPerPerson(props) {
    return (
        <div className="finalOutput">
            <p>
                <span>${props.finalCost}</span> / per person
            </p>
        </div>
    );
}
