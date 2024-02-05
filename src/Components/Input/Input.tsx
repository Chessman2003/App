import React, { useEffect, useState, CSSProperties } from "react";
import { InputIconsTypes } from "../../types/inputType";
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
    let className = '';
    let classForInputDiv = 'cp_input';
    if (className === 'active-input') {
        classForInputDiv += ' active';
    }

    const [activeColor, setActiveColor] = useState<string>('gray');
    const [icon, setIcon] = useState<string|null>(null);

    useEffect(() => {
        if (type == TypeIcon.None) {
            setActiveColor('gray');
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
        } else {
            setActiveColor('transparent');
            setIcon(null);
        }
    }, [type]);

    const wrapperBoxStyle: CSSProperties = {
    }
    const wrapperStyle: CSSProperties = {
        border: '1px solid '+ activeColor,
        borderRadius: '5px'
    }

    const inputHintStyle: CSSProperties = {
        color: activeColor
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

    return (
        <div className={classForInputDiv}>
            <input
                type="text"
                value={text}
                onChange={(e) => onChange && onChange(e.target.value)}
                disabled={disabled}
                placeholder="Введите текст"
                className={className}
            />

            {/*icon === InputIconsTypes.Error && <img className="input-icon" src={IconError.default} />*/}
            {/*icon === InputIconsTypes.Warning && <img className="input-icon" src={IconWarning.default} />*/}
            {/*icon === InputIconsTypes.Success && <img className="input-icon" src={IconSuccess.default} />*/}

            <span className={className + 'hint'} style={{
                display: className !== 'active-input' ? 'block' : '',
                position: className === 'active-input' ? 'absolute' : 'static', // добавлено условие
                top: className === 'active-input' ? '-15px' : 'auto',
                left: className === 'active-input' ? '0px' : 'auto',
                fontSize: className === 'active-input' ? '10px' : '',
                color: className === 'error-input' ? 'red'
                    : className === 'warning-input' ? 'yellow'
                        : className === 'success-input' ? 'green'
                            : ''
            }}>{hint}</span>
        </div >
    )
}