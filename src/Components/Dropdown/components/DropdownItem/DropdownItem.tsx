import React from "react"
import { DropdownOption } from "../../types/dropdownTypes";
import './DropdownItem.scss';

type Props = {
    selected: boolean,
    option: DropdownOption,
    onChangeOption: (option: DropdownOption) => void
}

export const DropdownItem = ({
    selected,
    option,
    onChangeOption
}:Props) => {
    let newClassname = 'dropdownItem';
    if (selected) {
        newClassname += ' selected';
    }
    if (option.disabled) {
        newClassname += ' disabled';
    }
    return (
        <div className={newClassname} onClick={()=>{
            if (!option.disabled) {
                onChangeOption(option);
            }
        }}>
            {option.label}
        </div>
    );
}