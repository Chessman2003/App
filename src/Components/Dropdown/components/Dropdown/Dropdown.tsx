import React, { useState, useEffect, useRef } from 'react';
import { IconArrowDown, IconArrowUp, IconClear } from '../../../icons/icons';
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
    const [opened, setOpened] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<DropdownOption | undefined>(undefined);
    const [filteredOptions, setFilteredOptions] = useState<DropdownOption[]>(options);

    useEffect(()=>{
        onChangeValue(selectedOption)
    }, [selectedOption]);

    useEffect(() => {
        if ((selectedIndex >= 0) && (selectedIndex < options.length)) {
            const _selectedOption = options[selectedIndex];
            setInputValue(_selectedOption.label);
            setSelectedOption(_selectedOption);
        } else {
            setSelectedOption(undefined);
            setInputValue('');
        }
    }, [selectedIndex]);

    useEffect(() => {
        setFilteredOptions(options.filter(o => o.label.includes(inputValue)));
    }, [inputValue]);

    return (
        <div className='dropdownWrapper'>
            <DropDownInput
                text={inputValue}
                onChangeText={setInputValue}
                openedDropdown={opened}
                onToggleDropDown={() => {
                    setOpened(prevState => !prevState);
                }}
            />
            {opened && <DropdownBody
                options={filteredOptions}
                selectedOption={selectedOption}
                onChangeOption={setSelectedOption}
            />}
        </div>
    );
};
