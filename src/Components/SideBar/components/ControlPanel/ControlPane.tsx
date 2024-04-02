import React from "react";
import { AddCategories } from "../../../icons/icons";

type Props = {
    onClick: () => void
}

export const ControlPanel = ({ onClick }: Props) => {
    return (
        <div className="controlPanel">
            <button className="addCategoriesButton" onClick={onClick}>
                <img className="AddCategoriesIcon" src={AddCategories.default} />
            </button>
        </div>
    )
}