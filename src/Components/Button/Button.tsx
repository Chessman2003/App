import React, { FC, ReactNode } from 'react';

import './Button.scss'

type ButtonType = {
    text?: string,
    onClick: () => void,
    icon?: ReactNode
};

export const Button: FC<ButtonType> = ({ onClick, icon, text }) => {
    return (
        <div className="ButtonNext">
            <button className='button' onClick={onClick}>
                {text && <span className='text'>{text}</span>}
                {icon && icon}
            </button>
        </div>
    )
}