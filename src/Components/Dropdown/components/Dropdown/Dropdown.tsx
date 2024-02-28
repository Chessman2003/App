import React, { useState, useEffect, useRef } from 'react';
import './Dropdown.scss'
import { DropdownOption } from '../../types/dropdownTypes';
import { DropDownInput } from '../DropdownInput/DropdownInput';
import { DropdownBody } from '../DropdownBody/DropdownBody';

type Props = {
    options: DropdownOption[]
    textValue?: string
    selectedIndex?: number
    onChangeValue: (value?: DropdownOption) => void
}

export const Dropdown = ({
    options,
    selectedIndex = -1,
    onChangeValue
}: Props) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleChangeText = (text: string) => {
        setOpened(true);
        setInputValue(text);
    }
    const [opened, setOpened] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<DropdownOption | undefined>(undefined);
    const [filteredOptions, setFilteredOptions] = useState<DropdownOption[]>(options);

    const dropdownRef = useRef<HTMLDivElement | null>(null);
    
    const closeDropdownOnClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setOpened(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', closeDropdownOnClickOutside);

        return () => {
            document.removeEventListener('click', closeDropdownOnClickOutside);
        };
    }, [setOpened, dropdownRef]);

    useEffect(() => {
        onChangeValue(selectedOption)
    }, [selectedOption]);

    useEffect(() => {
        if ((selectedIndex >= 0) && (selectedIndex < options.length)) {
            const _selectedOption = options[selectedIndex];
            setInputValue(_selectedOption.label);
            setSelectedOption(_selectedOption);
            setOpened(false);
        } else {
            setSelectedOption(undefined);
            setInputValue('');
        }
    }, [selectedIndex]);

    useEffect(() => {
        setFilteredOptions(options.filter(o => o.label.toLowerCase().includes(inputValue.toLowerCase())));
    }, [inputValue]);



    return (
        <div className='dropdownWrapper' ref={dropdownRef}>
            <DropDownInput
                text={inputValue}
                onChangeText={handleChangeText}
                openedDropdown={opened}
                onToggleDropDown={() => {
                    setOpened(prevState => !prevState);
                    if (!opened) {
                        setFilteredOptions(options);
                    }
                }}
            />
            <div className="dropdownBodyWrapper">
                {opened && <DropdownBody
                    options={filteredOptions}
                    selectedOption={selectedOption}
                    onChangeOption={(option) => {
                        setSelectedOption(option);
                        setOpened(false);
                    }}

                />}
            </div>
        </div>
    );
};
