import React from "react";
import { AddCategories } from "../../../icons/icons";
import { SideBarType } from "../..";
import './ControlPanel.scss'

type Props = {
    onClick: () => void;
    type: SideBarType
}

const classNames = (cls: string, props = {}, additionals: string[] = []) => {
    let propsNames = '';
    Object.entries(props).forEach(element => {
        if (element[1] == true) {
            propsNames += `${element[0]}`
        }
    });

    return `${cls} ${propsNames} ${additionals.join(' ')}`;
}

export const ControlPanel = ({
    onClick,
    type
}: Props) => {
    const isClosed = type == SideBarType.Close;
    return (
        <div className={classNames('controlPanel', {
            closed: isClosed,
            opened: !isClosed
        })}>
            <button onClick={onClick}>
                <img className="AddCategoriesIcon" src={AddCategories.default} />
                {!isClosed &&
                    <p className="controlPaneltittle">{'Добавить категорию'}</p>}
            </button>
        </div>
    )




}
