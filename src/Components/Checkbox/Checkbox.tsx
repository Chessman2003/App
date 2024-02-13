import React from "react";
import './Checkbox.scss'

type CheckboxProps = {
    text: string,
    value: boolean,
    onChange: (value: boolean) => void
}

export const Checkbox = ({
    text,
    value,
    onChange
}: CheckboxProps) => {
    return (
        <div className="checkboxWrapper">
            <label className="checkboxContainer">
                <input type="checkbox" id="myCheckbox" checked={value} onChange={(e)=>{onChange(e.target.checked)}} />
                {text}
            </label>
        </div>
    )
}