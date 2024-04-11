import React from "react";
import { SortCategories } from "../../../icons/icons";
import { SideBarType } from "../..";
import { ICategory } from "../..";
import { SortDirection } from "../..";
import './SettingsPanel.scss'

type Props = {
    onClick: (category: ICategory, direction: SortDirection) => void;
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

export const SettingsPanel = ({
    onClick,
    type
}: Props) => {
    const isClosed = type == SideBarType.Close
    return (
        <div className={classNames('settingsPanel', {
            closed: isClosed,
            opened: !isClosed
        })}>
            <button onClick={() => onClick}>
                <img className="sortCategoriesIcon" src={SortCategories.default} />
                {!isClosed &&
                    <p className="sortCategoriesText">{`Прямая сортировка элементов в категориях`}</p>}
            </button>
        </div>
    )

}
