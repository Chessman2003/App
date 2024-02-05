import React from "react";
import { InputIconsTypes } from "../../types/inputType";
import { IconWarning, IconError, IconSuccess } from "../icons/icons";

import './Input.scss';

type InputProps = {
    text: string,
    icon: InputIconsTypes,
    hint: string,
    disabled: boolean,
    onChange?: (text: string) => void,
    className: string,
};


export const Input = ({ text, icon, hint, disabled, className, onChange }: InputProps) => {
    return (
        <div className="input-component">
            <input
                type="text"
                value={text}
                onChange={(e) => onChange && onChange(e.target.value)}
                disabled={disabled}
                placeholder="Введите текст"
                className={className}
            />

            {icon === InputIconsTypes.Error && <img className="input-icon" src={IconError.default} />}
            {icon === InputIconsTypes.Warning && <img className="input-icon" src={IconWarning.default} />}
            {icon === InputIconsTypes.Success && <img className="input-icon" src={IconSuccess.default} />}

            <span className={className + 'hint'} style={{
                display: 'block',
                color: className === 'error-input' ? 'red'
                    : className === 'warning-input' ? 'yellow'
                        : className === 'success-input' ? 'green'
                            : ''
            }}>{hint}</span>
        </div>
    )
}