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
    onChange?: (text: string) => void,
};


export const Input = ({
    text,
    hint,
    disabled,
    onChange,
    type = TypeIcon.None

}: InputProps) => {
    const [currentColor, setCurrentColor] = useState<string>('grey');
    const [icon, setIcon] = useState<string | null>(null);

    const [showLine, setShowLine] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    useEffect(() => {
        if (isFocused) {
            setCurrentColor('blue');
            setShowLine(true);
            setIcon(null);
        } else {
            if (type == TypeIcon.None) {
                setCurrentColor('gray');
                setIcon(null);
            } else if (type == TypeIcon.Warning) {
                setCurrentColor('yellow');
                setIcon(IconWarning.default);
            } else if (type == TypeIcon.Error) {
                setCurrentColor('red');
                setIcon(IconError.default);
            } else if (type == TypeIcon.Success) {
                setCurrentColor('green');
                setIcon(IconSuccess.default);
            }
            setShowLine(false);
        }
    }, [type, isFocused]);

    const wrapperBoxStyle: CSSProperties = {
    }
    const wrapperStyle: CSSProperties = {
        border: '1px solid ' + currentColor,
        borderRadius: '5px',
        background: 'white'
    }

    let inputHintStyle: CSSProperties = {
        color: currentColor,
    }

    const colorLine = (showLine ? currentColor : 'transparent');
    const inputLineStyle: CSSProperties = {
        borderRight: '1px solid ' + colorLine,
    }

    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleBlur = () => {
        setIsFocused(false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.target.value)
    }

    return (
        <div className="inputBoxWrapper" style={wrapperBoxStyle}>
            <div className={`inputWrapper ${isActive ? 'active' : ''}`} style={wrapperStyle}>
                <div className={`inputLine ${isActive ? 'active' : ''}`} style={inputLineStyle} />
                <div className="inputField">
                    <input
                        type="text"
                        value={text}
                        onChange={handleChange}
                        disabled={disabled}
                        placeholder="Введите текст"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="inputIcon">
                    {icon && <img src={icon} />}
                </div>
            </div>
            <div className="inputHint" style={inputHintStyle}>
                {!isFocused && hint}
            </div>
        </div>
    );
}