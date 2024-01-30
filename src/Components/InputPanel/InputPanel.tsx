import React, { useState } from "react";
import './InputPanel.scss';
import errorIcon from "../icons/error.png";
import successIcon from '../icons/success.png';
import warningIcon from '../icons/warning.png';

export const InputPanel = () => {
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [iconError, setIconError] = useState<string>('');
    const [iconWarning, setIconWarning] = useState<string>('');
    const [iconSuccess, setIconSuccess] = useState<string>('');
    const [showIcon, setShowIcon] = useState<boolean>(false);


    const checkInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const regex: RegExp = /[а-яА-Я]/;
        const latinRegex: RegExp = /[A-Z]/;

        const containCyrillic: boolean = regex.test((event.target as HTMLInputElement).value);
        const containUpperCaseLatin: boolean = latinRegex.test((event.target as HTMLInputElement).value);

        if (containCyrillic) {
            setErrorMessage('Необходимо вводить только латинские символы!');
            (event.target as HTMLInputElement).classList.add('error-input');
            setShowIcon(true);
            setIconError(errorIcon);
        } else {
            setErrorMessage('');
            (event.target as HTMLInputElement).classList.remove('error-input');
            setShowIcon(false);
            setIconError('');
        }

        if (event.target.value === '') {
            (event.target as HTMLInputElement).classList.remove('warning-input');
        } else {
            if (!containUpperCaseLatin && !containCyrillic) {
                (event.target as HTMLInputElement).classList.add('warning-input');
                setShowIcon(true);
                setIconWarning(warningIcon);
            } else {
                (event.target as HTMLInputElement).classList.remove('warning-input');
                setShowIcon(false);
                setIconWarning('');
            }
        }

        if (!containCyrillic && containUpperCaseLatin) {
            (event.target as HTMLInputElement).classList.add('success-input');
            setShowIcon(true);
            setIconSuccess(successIcon);
        } else {
            (event.target as HTMLInputElement).classList.remove('success-input');
            setShowIcon(false);
            setIconSuccess('');
        }
    }
    return (
        <div className="input-container">
            <div className="row">
                <input type="text" className="gray-input" placeholder="Введите текст" />
                <div className="active-input">
                    <input type="text" className="blue-input" placeholder="Введите текст" />
                </div>
                <input type="text" className="disabled-input" placeholder="Введите текст" disabled />
            </div>
            <div className="row">
                <div className="input-state">
                    <input type="text" placeholder="Введите текст" onChange={checkInput} />
                    <div className="icon-container">
                        {iconError && <img src={iconError} className='input-icon' alt="Error icon" />}
                        {iconWarning && <img src={iconWarning} className='input-icon' alt="Warning icon" />}
                        {iconSuccess && <img src={iconSuccess} className='input-icon' alt="Success icon" />}
                    </div>
                </div>
                <div className="input-state">
                    <input type="text" placeholder="Введите текст" onChange={checkInput} />
                    <div className="icon-container">
                        {iconError && <img src={iconError} className='input-icon' alt="Error icon" />}
                        {iconWarning && <img src={iconWarning} className='input-icon' alt="Warning icon" />}
                        {iconSuccess && <img src={iconSuccess} className='input-icon' alt="Success icon" />}
                    </div>

                </div>
                <div className="input-state">
                    <input type="text" placeholder="Введите текст" onChange={checkInput} />

                </div>
            </div>
        </div>
    );
};

