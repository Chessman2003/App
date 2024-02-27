import React, { useState } from "react";
import { Dropdown, DropdownOption, } from "../Dropdown"
import './App.scss'

const dropdownOptions = [
    { label: 'Опция 1', id: 'option1' },
    { label: 'Опция 2', id: 'option2', disabled: true },
    { label: 'Опция 3 при наличии', id: 'option3' },
    { label: 'Опция 2', id: 'option4' },
    { label: 'Опция 5', id: 'option5' },
    { label: 'Опция 6', id: 'option6' },
    { label: 'Опция 7', id: 'option7', disabled: true },
    { label: 'Опция 123', id: 'option8' },
    { label: 'Опция 9', id: 'option9' },
    { label: 'Опция 10 ', id: 'option10', disabled: true },
    { label: 'Опция 11', id: 'option11' },
    { label: 'Опция 12', id: 'option12' },
];

export const App = () => {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <div>
            <h1>Dropdown component</h1>
            <Dropdown
                options={dropdownOptions}
                selectedIndex={selectedIndex}
                onChangeValue={(value?: DropdownOption) => {
                    if (value) {
                        dropdownOptions.forEach((o, i) => {
                            if (o.id == value.id) {
                                setSelectedIndex(i)
                                return;
                            }
                        })
                    } else {
                        setSelectedIndex(-1);
                    }
                }}
            />
        </div>
    );
}