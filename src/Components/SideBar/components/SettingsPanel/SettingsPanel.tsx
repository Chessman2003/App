import React from "react";
import { SortCategories } from "../../../icons/icons";
import { SettingsPanelType } from "../types/SettingsPanelType";
import './SettingsPanel.scss'

type Props = {
    onClick?: () => void;
    type: SettingsPanelType
}

export const SettingsPanel = ({
    onClick,
    type
}: Props) => {
    if (type == SettingsPanelType.Close) {
        return (
            <div className="settingsPanelClose" onClick={onClick}>
                <button className="sortCategoriesButton" >
                    <img className="sortCategoriesIcon" src={SortCategories.default} />
                </button>
            </div>
        )
    } else if (type == SettingsPanelType.Open) {
        return (
            <div className="settingsPanelOpen" onClick={onClick}>
                <button className="sortCategoriesButton" >
                    <img className="sortCategoriesIcon" src={SortCategories.default} />
                </button>
            </div>
        )
    }
}
