import React from "react";
import './InputPanel.scss';
import { Icon1 } from "../icons/icons";

export const InputPanel = () => {
    const checkInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const regex: RegExp = /[а-яА-Я]/;
        const latinRegex: RegExp = /[A-Z]/;

        const containCyrillic: boolean = regex.test((event.target as HTMLInputElement).value);
        const containUpperCaseLatin: boolean = latinRegex.test((event.target as HTMLInputElement).value);

        if (containCyrillic) {
            (event.target as HTMLInputElement).classList.add('error-input');
        } else {
            (event.target as HTMLInputElement).classList.remove('error-input')
        }

        if (event.target.value === '') {
            (event.target as HTMLInputElement).classList.remove('warning-input')
        } else {
            if (!containUpperCaseLatin && !containCyrillic) {
                (event.target as HTMLInputElement).classList.add('warning-input')
            } else {
                (event.target as HTMLInputElement).classList.remove('warning-input')
            }
        }

        if (!containCyrillic && containUpperCaseLatin) {
            (event.target as HTMLInputElement).classList.add('success-input')
        } else {
            (event.target as HTMLInputElement).classList.remove('success-input')
        }
    }
    return (
        <div className="input-container">
            <div className="row">
                <input type="text" className="gray-input" placeholder="Введите текст" />
                <input type="text" className="blue-input" placeholder="Введите текст" />
                <input type="text" className="disabled-input" placeholder="Введите текст" disabled />
            </div>
            <div className="row">
                <input type="text" placeholder="Введите текст" onChange={checkInput} />
                <input type="text" placeholder="Введите текст" onChange={checkInput} />
                <input type="text" placeholder="Введите текст" onChange={checkInput} />
            </div>
        </div>
    );
};

