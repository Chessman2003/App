import React, { useState } from 'react';
import { IconArrowDown, IconArrowUp, IconClear } from '../icons/icons';
import './Dropdown.scss'

interface Option {
    id: string;
    label: string;
    disabled?: boolean;
}

type Props = {
    options: Option[]
    textValue?: string
    value?: string
    onChangeValue: (value: string) => void
}

export const Dropdown = ({
    options,
    textValue,
    value,
    onChangeValue
}: Props) => {
    const [inputValue, setInputValue] = useState<string>(textValue || '');
    const [showed, setShowed] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [filteredOptions, setFilteredOptions] = useState<string[]>(options.map(o => o.id));
    const [empty, setEmpty] = useState<boolean>(false);
    const [hoveredOption, setHoveredOption] = useState<string | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);

        const filtered = options.filter(option =>
            option.label.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredOptions(filtered.map(f => f.id));
        setEmpty(filtered.length === 0)
    };

    const handleClearClick = () => {
        setInputValue('');
        setFilteredOptions(options.map(o => o.id));
        setSelectedOption(null);
    };

    const handleDropdownClick = () => {
        setShowed(prevValue => !prevValue);
    };

    const handleOptionClick = (option: Option) => {
        if (option.disabled) {
            return;
        };
        setSelectedOption(option.id);
        setInputValue(option.label);
        setShowed(false);
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

    let className = ''
    if (showed) {
        className = 'showDropdown'
    }

    let lineClassName = '';
    if (inputValue !== '') {
        lineClassName = 'line'
    }


    const DropDownInput = () => {
        return (
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
                        src={showed ? IconArrowUp.default : IconArrowDown.default}
                        alt='Dropdown'
                    />
                </button>
            </div>
        );
    }

    const DropdownBody = () => {
        const showedOptions = options.map(o => {
            if (filteredOptions.indexOf(o.id) != -1) {
                return o;
            }
        }).filter(Boolean) as Option[];
        if (showedOptions.length == 0) {
            return (
                <div className='noMatchesText'>{`Совпадений не найдено`}</div>
            );
        }
        return (
            <>
                {
                    showedOptions.map((o, i) => {
                        let newClassName = 'optionItem';
                        if (o.disabled) {
                            newClassName += ' disabled';
                        }
                        return (
                            <div className={newClassName}
                                key={o.id}
                                onClick={() => handleOptionClick(o)}
                                onMouseEnter={() => {
                                    setHoveredOption(o.id);
                                }}
                            >
                                {o.label}
                            </div>
                        );
                    })
                }
            </>
        );
    }

    return (
        <div className='dropdownWrapper' onKeyDown={handleKeyboard}
            onMouseLeave={() => {
                setHoveredOption(null);
            }}>
            <DropDownInput />
            {showed && <DropdownBody />}
        </div>
    );
};
