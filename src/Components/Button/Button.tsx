import React from 'react';
import './Button.scss'

type ButtonType = {
    text?: string,
    onClick: () => void,
    icon?: string,
    textColor?: string,
    disabled: number,
    color: string
};



export const Button = ({ onClick, icon, text, textColor, disabled, color }: ButtonType) => {
    if (!text && !icon) {
        throw new Error('Пустое значение для text или icon')
    };

    if (text && icon) {
        throw new Error('Выберите либо text либо icon')
    };

    return (
        <button className='button' onClick={onClick}
            style={{
                backgroundColor: color,
                opacity: disabled,
            }}>
            {text && <span className='text' style={{ color: textColor }}>{text}</span>}
            {icon && <img className='icon' src={icon} alt="Icon" />}
        </button>

    )
}