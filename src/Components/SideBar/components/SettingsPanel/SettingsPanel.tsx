import React from "react";
import { SortCategories } from "../../../icons/icons";

type Props = {
    onClick?: () => void
}

export const SettingsPanel = ({ onClick }: Props) => {
    return (
        <div className="settingsPanel" onClick={onClick}>
            <button className="sortCategoriesButton" >
                <img className="sortCategoriesIcon" src={SortCategories.default} />
            </button>
        </div>
    )
}
