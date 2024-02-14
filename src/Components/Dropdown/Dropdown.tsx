import React, { useState } from 'react';
import { IconArrowDown, IconArrowUp, IconClear } from '../icons/icons';
import './Dropdown.scss'


export interface Option {
    label: string;
    value: string;
}

interface Props {
    options: Option[];
}

export const Dropdown: React.FC<Props> = ({ options }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);

        const filtered = options.filter(option =>
            option.label.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredOptions(filtered);
    };

    const handleClearClick = () => {
        setInputValue('');
        setFilteredOptions(options);
    };

    const handleDropdownClick = () => {
        setShowDropdown(!showDropdown)
    }

    let className = ''
    if (showDropdown) {
        className = 'showDropdown'
    }

    return (
        <div className='dropdownWrapper'>
            <div className="dropdownInput">

                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />

                {inputValue && (
                    <button
                        className='clearButton'
                        onClick={handleClearClick}>
                        <img className='clearIcon'
                            src={IconClear.default}
                        />

                    </button>
                )}

                <button
                    className='dropdownButton'
                    onClick={handleDropdownClick}>
                    <img className='iconArrow' src={
                        showDropdown ? IconArrowUp.default : IconArrowDown.default
                    } alt='Dropdown' />

                </button>
            </div>
            <div className={className}>
                {
                    showDropdown && (
                        <ul>
                            {filteredOptions.map(option => (
                                <li key={option.value}>{option.label}</li>
                            ))}
                        </ul>
                    )

                }
            </div>
        </div >
    );
};


