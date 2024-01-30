import React, { useState } from "react";
import './InputPanel.scss';
import errorIcon from "../icons/error.png";
import successIcon from '../icons/success.png';
import warningIcon from '../icons/warning.png';

export const InputPanel = () => {
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [iconError1, setIconError1] = useState<string>('');
    const [iconError2, setIconError2] = useState<string>('');
    const [iconError3, setIconError3] = useState<string>('');
    const [iconWarning1, setIconWarning1] = useState<string>('');
    const [iconWarning2, setIconWarning2] = useState<string>('');
    const [iconWarning3, setIconWarning3] = useState<string>('');
    const [iconSuccess1, setIconSuccess1] = useState<string>('');
    const [iconSuccess2, setIconSuccess2] = useState<string>('');
    const [iconSuccess3, setIconSuccess3] = useState<string>('');


    const checkInput1 = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const regex: RegExp = /[а-яА-Я]/;
        const latinRegex: RegExp = /[A-Z]/;

        const containCyrillic: boolean = regex.test((event.target as HTMLInputElement).value);
        const containUpperCaseLatin: boolean = latinRegex.test((event.target as HTMLInputElement).value);

        if (containCyrillic) {
            setErrorMessage('Необходимо вводить только латинские символы!');
            (event.target as HTMLInputElement).classList.add('error-input');
            setIconError1(errorIcon);
        } else {
            setErrorMessage('');
            (event.target as HTMLInputElement).classList.remove('error-input');
            setIconError1('');
        }

        if (event.target.value === '') {
            (event.target as HTMLInputElement).classList.remove('warning-input');
            setIconWarning1('')
        } else {
            if (!containUpperCaseLatin && !containCyrillic) {
                (event.target as HTMLInputElement).classList.add('warning-input');
                setIconWarning1(warningIcon);
            } else {
                (event.target as HTMLInputElement).classList.remove('warning-input');
                setIconWarning1('');
            }
        }

        if (!containCyrillic && containUpperCaseLatin) {
            (event.target as HTMLInputElement).classList.add('success-input');
            setIconSuccess1(successIcon);
        } else {
            (event.target as HTMLInputElement).classList.remove('success-input');
            setIconSuccess1('');
        }
    }

    const checkInput2 = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const regex: RegExp = /[а-яА-Я]/;
        const latinRegex: RegExp = /[A-Z]/;

        const containCyrillic: boolean = regex.test((event.target as HTMLInputElement).value);
        const containUpperCaseLatin: boolean = latinRegex.test((event.target as HTMLInputElement).value);

        if (containCyrillic) {
            setErrorMessage('Необходимо вводить только латинские символы!');
            (event.target as HTMLInputElement).classList.add('error-input');
            setIconError2(errorIcon);
        } else {
            setErrorMessage('');
            (event.target as HTMLInputElement).classList.remove('error-input');
            setIconError2('');
        }

        if (event.target.value === '') {
            (event.target as HTMLInputElement).classList.remove('warning-input');
            setIconWarning2('')
        } else {
            if (!containUpperCaseLatin && !containCyrillic) {
                (event.target as HTMLInputElement).classList.add('warning-input');
                setIconWarning2(warningIcon);
            } else {
                (event.target as HTMLInputElement).classList.remove('warning-input');
                setIconWarning2('');
            }
        }

        if (!containCyrillic && containUpperCaseLatin) {
            (event.target as HTMLInputElement).classList.add('success-input');
            setIconSuccess2(successIcon);
        } else {
            (event.target as HTMLInputElement).classList.remove('success-input');
            setIconSuccess2('');
        }
    }

    const checkInput3 = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const regex: RegExp = /[а-яА-Я]/;
        const latinRegex: RegExp = /[A-Z]/;

        const containCyrillic: boolean = regex.test((event.target as HTMLInputElement).value);
        const containUpperCaseLatin: boolean = latinRegex.test((event.target as HTMLInputElement).value);

        if (containCyrillic) {
            setErrorMessage('Необходимо вводить только латинские символы!');
            (event.target as HTMLInputElement).classList.add('error-input');
            setIconError3(errorIcon);
        } else {
            setErrorMessage('');
            (event.target as HTMLInputElement).classList.remove('error-input');
            setIconError3('');
        }

        if (event.target.value === '') {
            (event.target as HTMLInputElement).classList.remove('warning-input');
            setIconWarning3('');
        } else {
            if (!containUpperCaseLatin && !containCyrillic) {
                (event.target as HTMLInputElement).classList.add('warning-input');
                setIconWarning3(warningIcon);
            } else {
                (event.target as HTMLInputElement).classList.remove('warning-input');
                setIconWarning3('');
            }
        }

        if (!containCyrillic && containUpperCaseLatin) {
            (event.target as HTMLInputElement).classList.add('success-input');
            setIconSuccess3(successIcon);
        } else {
            (event.target as HTMLInputElement).classList.remove('success-input');
            setIconSuccess3('');
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
                    <input type="text" placeholder="Введите текст" onChange={checkInput1} />
                    {iconError1 && <img src={iconError1} className='input-icon' alt="Error icon" />}
                    {iconWarning1 && <img src={iconWarning1} className='input-icon' alt="Warning icon" />}
                    {iconSuccess1 && <img src={iconSuccess1} className='input-icon' alt="Success icon" />}

                </div>
                <div className="input-state">
                    <input type="text" placeholder="Введите текст" onChange={checkInput2} />
                    {iconError2 && <img src={iconError2} className='input-icon' alt="Error icon" />}
                    {iconWarning2 && <img src={iconWarning2} className='input-icon' alt="Warning icon" />}
                    {iconSuccess2 && <img src={iconSuccess2} className='input-icon' alt="Success icon" />}

                </div>
                <div className="input-state">
                    <input type="text" placeholder="Введите текст" onChange={checkInput3} />
                    {iconError3 && <img src={iconError3} className='input-icon' alt="Error icon" />}
                    {iconWarning3 && <img src={iconWarning3} className='input-icon' alt="Warning icon" />}
                    {iconSuccess3 && <img src={iconSuccess3} className='input-icon' alt="Success icon" />}

                </div>
            </div>
        </div>
    );
};

