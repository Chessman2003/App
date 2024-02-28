import React, { useLayoutEffect, useRef } from "react"
import { DropdownOption } from "../../types/dropdownTypes";
import './DropdownItem.scss';

type Props = {
    selected: boolean,
    option: DropdownOption,
    onChangeOption: (option: DropdownOption) => void
    onChangePosition: (option: DropdownOption, position: number) => void
}

export const DropdownItem = ({
    selected,
    option,
    onChangeOption,
    onChangePosition
}:Props) => {
    const itemRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(()=>{
        if (itemRef.current) {
            onChangePosition(option, itemRef.current.offsetTop);
        }
    }, []);
    let newClassname = 'dropdownItem';
    if (selected) {
        newClassname += ' selected';
    }
    if (option.disabled) {
        newClassname += ' disabled';
    }
    return (
        <div className={newClassname} ref={itemRef} onClick={()=>{
            if (!option.disabled) {
                onChangeOption(option);
            }
        }}>
            {option.label}
        </div>
    );
}