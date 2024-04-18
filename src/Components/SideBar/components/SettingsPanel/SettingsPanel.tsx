import React from "react";
import { SortCategories } from "../../../icons/icons";
import { SideBarType, SortDirection } from "../..";
import './SettingsPanel.scss'

type Props = {
    sortDirection: SortDirection
    changeSortDirection: (sortDirection: SortDirection) => void;
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
    changeSortDirection,
    sortDirection,
    type
}: Props) => {
    const isClosed = type == SideBarType.Close

    const handleClick = () => {
        if (sortDirection == SortDirection.Back) {
            changeSortDirection(SortDirection.Forward);
        } else {
            changeSortDirection(SortDirection.Back);
        }
    }

    return (
        <div className={classNames('settingsPanel', {
            closed: isClosed,
            opened: !isClosed
        })}>
            <button onClick={handleClick}>
                <img className="sortCategoriesIcon" src={SortCategories.default} />
                {!isClosed &&
                    <p className="sortCategoriesText">{sortDirection == SortDirection.Forward ? `Прямая сортировка элементов в категориях` : `Обратная сортировка элементов в категориях`}</p>}
            </button>
        </div>
    )

}
