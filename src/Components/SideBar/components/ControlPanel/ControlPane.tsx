import React from "react";
import { AddCategories } from "../../../icons/icons";
import { ControlPanelType } from "../types/ControlPanelType";
import './ControlPanel.scss'

type Props = {
    onClick: () => void;
    type: ControlPanelType
}

export const ControlPanel = ({
    onClick,
    type
}: Props) => {
    if (type == ControlPanelType.Close) {
        return (
            <div className="controlPanelClose">
                <button className="addCategoriesButton" onClick={onClick}>
                    <img className="AddCategoriesIcon" src={AddCategories.default} />
                </button>
            </div>
        )
    } else if (type == ControlPanelType.Open) {
        return (
            <div className="controlPanelOpen">
                <button className="addCategoriesButton" onClick={onClick}>
                    <img className="AddCategoriesIcon" src={AddCategories.default} />
                    <p className="controlPaneltittle">{'Добавить категорию'}</p>
                </button>
            </div>
        )
    }
}