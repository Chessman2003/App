import React from "react";
import './InputCheckboxComponent.scss'

type CheckboxProps = {
    text: string
}

export const InputCheckboxComponent = ({text}: CheckboxProps) => {
    return (
        <div className="checkboxWrapper">
        <label className="checkboxContainer">
            <input type="checkbox" id="myCheckbox" /> {text}
        </label>
        </div>
    )
}