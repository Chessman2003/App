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
    const [noMatches, setNoMatches] = useState<boolean>(false);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(-1);
    const [selectedOptionClassName, setSelectedOptionClassName] = useState<string>('');
    const [selectedOptionEnter, setSelectedOptionEnter] = useState<boolean>(false);



    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);

        const filtered = options.filter(option =>
            option.label.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredOptions(filtered);

        if (filtered.length === 0) {
            setNoMatches(true)
        } else {
            setNoMatches(false)
        }
    };

    const handleClearClick = () => {
        setInputValue('');
        setFilteredOptions(options);
        setSelectedOption(null);
    };

    const handleDropdownClick = () => {
        setShowDropdown(!showDropdown);
    };


    const handleOptionClick = (option: Option, index: number) => {
        if (option.disabled) {
            return;
        };
        setSelectedOption(option);
        setInputValue(option.label);
        setShowDropdown(false);
        setSelectedOptionIndex(index);
    };

    const handleKeyboard = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            setSelectedOptionClassName('optionsClassName');
            setSelectedOptionIndex(prevIndex =>
                Math.min(prevIndex + 1, filteredOptions.length - 1)
            );
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            setSelectedOptionClassName('optionsClassName');
            setSelectedOptionIndex(prevIndex =>
                Math.max(prevIndex - 1, 0)
            );
        } else if (event.key === 'Enter' && selectedOptionIndex !== -1) {
            setSelectedOptionEnter(true);
            handleOptionClick(filteredOptions[selectedOptionIndex], selectedOptionIndex);
            setShowDropdown(false);

        }
    };


    const handleOptionHover = (index: number) => {
        setSelectedOptionIndex(index);

    };

    let className = ''
    if (showDropdown) {
        className = 'showDropdown'
    }

    let lineClassName = '';
    if (inputValue !== '') {
        lineClassName = 'line'
    }


    return (
        <div className='dropdownWrapper' onKeyDown={handleKeyboard}>
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

                <button className={`dropdownButton ${lineClassName}`} onClick={handleDropdownClick}>
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
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option, index) => (
                                <div
                                    className={`optionsClassName  
                                            ${index === selectedOptionIndex ? 'keydownOption' : ''} 
                                            ${(selectedOptionEnter && selectedOption?.value === option.value) ? 'enterClick' : ''}`
                                    }
                                    key={option.value}
                                    onClick={() => handleOptionClick(option, index)}
                                    onKeyDown={handleKeyboard}
                                    onMouseEnter={() => handleOptionHover(index)}
                                    style={{ opacity: option.disabled ? 0.5 : 1 }}
                                >
                                    {option.label}
                                </div>
                            ))
                        ) : (
                            <div className='noMatchesText'>
                                Совпадений не найдено
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};
