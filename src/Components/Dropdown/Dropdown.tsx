import React, { useState, useEffect, useRef } from 'react';
import { IconArrowDown, IconArrowUp, IconClear } from '../icons/icons';
import './Dropdown.scss'

type Option = {
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



    const dropdownRef = useRef<HTMLDivElement>(null)



    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setShowed(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);

    }, []);


    useEffect(() => {
        if (showed && dropdownRef.current && selectedOption) {
            const selectedIndex = options.findIndex(option => option.id === selectedOption);
            if (selectedIndex !== -1 && dropdownRef.current.childNodes[selectedIndex]) {
                (dropdownRef.current.childNodes[selectedIndex] as HTMLLIElement).focus();
            }
        }
    }, [showed, options, selectedOption]);


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
        };

        const handleOptionKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {

            switch (e.key) {

                case "ArrowDown":
                    e.preventDefault();
                    // if there's a next item, focus on it
                    if (e.currentTarget.nextSibling) {
                        (e.currentTarget.nextSibling as HTMLDivElement).focus();
                        break;
                    }

                    // if there's no next list item (last item), focus on the first item
                    if (!e.currentTarget.nextSibling) {
                        (e.currentTarget.parentNode?.childNodes[0] as HTMLDivElement).focus();
                        break;
                    }
                    break;

                case "ArrowUp":
                    e.preventDefault();
                    // if there's a previous item, focus on it
                    if (e.currentTarget.previousSibling) {
                        (e.currentTarget.previousSibling as HTMLDivElement).focus();
                        break;
                    }
                    // if there's no previous list item (first item), focus on the last item
                    if (!e.currentTarget.previousSibling && e.currentTarget.parentNode) {
                        const indexOfLastElement = e.currentTarget?.parentNode?.childNodes?.length - 1;
                        (e.currentTarget.parentNode?.childNodes[indexOfLastElement] as HTMLDivElement).focus();
                        break;

                    }
                    break;
                default:
                    break;

            }

        }



        return (
            <div className='dropdownBody' onKeyDown={handleOptionKeyDown}>
                {
                    showedOptions.map((o, i) => {
                        let newClassName = 'optionItem';
                        if (o.disabled) {
                            newClassName += ' disabled';
                        }
                        return (
                            <div className={`${newClassName} ${(o.id === selectedOption) ? 'selectedOption' : ''}`}
                                key={o.id}
                                onClick={() => handleOptionClick(o)}
                                onKeyDown={handleOptionKeyDown}
                            >
                                {o.label}
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    return (
        <div className='dropdownWrapper'
            ref={dropdownRef}
        >
            <DropDownInput />
            {showed && <DropdownBody />}
        </div>
    );
};
