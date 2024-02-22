import React from "react";
import { IconClear, IconArrowUp, IconArrowDown } from "../../../icons/icons";
import './DropdownInput.scss';

type Props = {
    text: string,
    onChangeText: (text: string) => void
    openedDropdown: boolean
    onToggleDropDown: () => void
}

export const DropDownInput = ({
    text,
    onChangeText,
    openedDropdown,
    onToggleDropDown
}: Props) => {
    const handleClearClick = () => {
        onChangeText('');
    };

    return (
        <div className="dropdownInput">
            <input
                type="text"
                value={text}
                onChange={(e) => {
                    onChangeText(e.target.value);
                }}
            />
            {text && (
                <>
                    <button className='clearButton' onClick={handleClearClick}>
                        <img src={IconClear.default} />
                    </button>
                    <div className="borderLine" />
                </>
            )}
            <button className={`dropdownButton`} onClick={onToggleDropDown}>
                <img
                    className='iconArrow'
                    src={openedDropdown ? IconArrowUp.default : IconArrowDown.default}
                    alt='Dropdown'
                />
            </button>
        </div>
    );
}