import React from 'react';
import {ButtonType} from '../../types/buttonType';
import './Button.scss'

type ButtonProps = {
    text?: string,
    onClick: () => void,
    icon?: string,
    colorText?: string,
    disabled: boolean,
    colorBackground: string,
    type: ButtonType
};

export const Button = ({ 
    onClick, 
    icon, 
    text, 
    colorText, 
    disabled, 
    colorBackground,
    type
}: ButtonProps) => {
    let className = 'cp_button';
    if (disabled) {
        className += ' disabled';
    }

    const handleClick = () => {
        if (!disabled) {
            onClick();
        }
    }

    const buttonStyle: React.CSSProperties = {
        backgroundColor: colorBackground,
    }
    if (type == ButtonType.Text) {
        if (!text) {
            throw new Error('Пустое значение для text')
        };
        const buttonTextStyle: React.CSSProperties = {
            color: colorText
        }
        return (
            <button 
                className={className} 
                onClick={handleClick}
                style={buttonStyle}>
                <span className='text' style={buttonTextStyle}>{text}</span>
            </button>
        );
    } else if (type == ButtonType.Icon) {
        if (!icon) {
            throw new Error('Пустое значение для icon')
        };

        return (
            <button 
                className={className} 
                onClick={onClick}
                style={buttonStyle}>
                <img className='icon' src={icon} alt="Icon" />
            </button>
    
        )
    }

    console.error('Unknown button type')
    return null;
}