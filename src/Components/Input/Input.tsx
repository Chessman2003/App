import React, { useEffect, useState, CSSProperties } from "react";
import { IconWarning, IconError, IconSuccess } from "../icons/icons";

import './Input.scss';

export enum TypeIcon {
    None = 0,
    Warning = 1,
    Error = 2,
    Success = 3
}

type InputProps = {
    text: string,
    hint: string,
    disabled: boolean,
    type?: TypeIcon,
    active: boolean,
    onChange?: (text: string) => void,
};


export const Input = ({
    text,
    hint,
    disabled,
    onChange,
    active,
    type = TypeIcon.None

}: InputProps) => {
    const [activeColor, setActiveColor] = useState<string>('gray');
    const [icon, setIcon] = useState<string | null>(null);


    useEffect(() => {
        if (type == TypeIcon.None) {
            setActiveColor((active && text.length === 0) ? 'blue' : 'gray');
            setIcon(null);
        } else if (type == TypeIcon.Warning) {
            setActiveColor('yellow');
            setIcon(IconWarning.default);
        } else if (type == TypeIcon.Error) {
            setActiveColor('red');
            setIcon(IconError.default);
        } else if (type == TypeIcon.Success) {
            setActiveColor('green');
            setIcon(IconSuccess.default);
        }
    }, [type, active, text]);

    const wrapperBoxStyle: CSSProperties = {
    }
    const wrapperStyle: CSSProperties = {
        border: '1px solid ' + activeColor,
        borderRadius: '5px'
    }

    let inputHintStyle: CSSProperties = {
        color: activeColor,
    }

    if (active && text.length === 0) {
        inputHintStyle = {
            color: 'gray'
        }
    }


    const inputLineStyle: CSSProperties = {
        borderColor: activeColor
    }

    return (
        <div className="inputBoxWrapper" style={wrapperBoxStyle}>
            <div className="inputWrapper" style={wrapperStyle}>
                <div className="inputLine" style={inputLineStyle} />
                <div className="inputField">
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => onChange && onChange(e.target.value)}
                        disabled={disabled}
                        placeholder="Введите текст"
                    />
                </div>
                <div className="inputIcon">
                    {icon && <img src={icon} />}
                </div>
            </div>
            <div className="inputHint" style={inputHintStyle}>
                {hint}
            </div>
        </div>
    );
}