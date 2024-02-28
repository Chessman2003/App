import React, { useEffect, useRef, useState } from "react";
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
    const bodyRef = useRef<HTMLDivElement>(null);
    const positions = useRef(new Map<string, number>());
    const [offset, setOffset] = useState<number>();
    if (options.length == 0) {
        return (
            <div className='noMatchesText'>{`Совпадений не найдено`}</div>
        );
    };

    useEffect(()=>{
        if (selectedOption) {
            const position = positions.current.get(selectedOption.id);
            setOffset(position);
        }
    }, [selectedOption]);

    useEffect(()=>{
        bodyRef.current?.scrollTo({top: offset});
    }, [offset]);

    const handleChangePosition = (option: DropdownOption, position: number) => {
        if (positions.current) {
            positions.current.set(option.id, position);
        }
    }

    return (
        <div className='dropdownBody' ref={bodyRef}>
            {
                options.map((o, i) => <DropdownItem onChangePosition={handleChangePosition}
                    key={o.id}
                    selected={(selectedOption && (o.id == selectedOption.id)) || false}
                    option={o}
                    onChangeOption={onChangeOption}
                />)
            }
        </div>
    );
}