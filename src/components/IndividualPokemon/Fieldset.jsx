import React from "react";

function Fieldset({ name, labelText, value }) {
    return (
        <fieldset className="set-stat">
            <label htmlFor={name}>{labelText}</label>
            <input type="text" disabled name={name} value={value} />
        </fieldset>
    );
}

export default Fieldset;
