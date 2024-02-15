import React, { useState } from 'react';
import { IconArrowDown, IconArrowUp, IconClear } from '../icons/icons';
import './Dropdown.scss'

interface Option {
    label: string;
    value: string;
    disabled?: boolean;
}

interface Props {
    options: Option[];
}

export const Dropdown: React.FC<Props> = ({ options }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
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
        setSelectedOption(null);
    };

    const handleDropdownClick = () => {
        setShowDropdown(!showDropdown);
    };


    const handleOptionClick = (option: Option) => {
        if (option.disabled) {
            return;
        };
        setSelectedOption(option);
        setInputValue(option.label);

    };

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
                    <button className='clearButton' onClick={handleClearClick}>
                        <img className='clearIcon' src={IconClear.default} />
                    </button>
                )}

                <button className='dropdownButton' onClick={handleDropdownClick}>
                    <img
                        className='iconArrow'
                        src={showDropdown ? IconArrowUp.default : IconArrowDown.default}
                        alt='Dropdown'
                    />
                </button>
            </div>

            <div className={`dropdown ${className}`}>
                {showDropdown && (
                    <>
                        {filteredOptions.map(option => (
                            <div
                                className={`optionsClassName ${(selectedOption?.value === option.value && inputValue === selectedOption?.label) ? 'selectedOption' : ''}`}
                                key={option.value}
                                onClick={() => handleOptionClick(option)}
                                style={{ opacity: option.disabled ? 0.5 : 1 }}

                            >
                                {option.label}
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};
