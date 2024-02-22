import React from "react";
import { DropdownOption } from "../../types/dropdownTypes";
import { DropdownItem } from '../DropdownItem/DropdownItem';

type Props = {
    options: DropdownOption[]
    selectedOption?: DropdownOption
    onChangeOption: (option: DropdownOption) => void
}

export const DropdownBody = ({
    options,
    selectedOption,
    onChangeOption
}: Props) => {
    if (options.length == 0) {
        return (
            <div className='noMatchesText'>{`Совпадений не найдено`}</div>
        );
    };
    return (
        <div className='dropdownBody'>
            {
                options.map((o, i) => <DropdownItem
                    key={o.id}
                    selected={(selectedOption && (o.id == selectedOption.id)) || false}
                    option={o}
                    onChangeOption={onChangeOption}
                />)
            }
        </div>
    );
}