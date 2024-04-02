import React from "react";
import { SortCategories } from "../../../icons/icons";
import { AddCategories } from "../../../icons/icons";

import { MonipulatorPanel } from '../MonipulatorPanel/MonipulatorPanel';
import './SideBarClose.scss';

type SideBarCloseProps = {
    categoriesImage: Array<{ title: string, icon: string }>;
    toggleSidebar: () => void;
    addCategories: () => void;
    //sortCategories: () => void;

}

export const SideBarClose = ({ categoriesImage, toggleSidebar, addCategories }: SideBarCloseProps) => {
    return (
        <div className="sideBarWrapperClose">
            <MonipulatorPanel onClick={toggleSidebar} />
            <div className="categoriesPanel">
                <div className="categoriesArray">
                    {categoriesImage.map((category, index) => (
                        <img className="categoriesImage" key={index} src={category.icon} />
                    ))}
                </div>
            </div>
            <div className="controlPanel">
                <button className="addCategoriesButton" onClick={addCategories}>
                    <img className="AddCategoriesIcon" src={AddCategories.default} />
                </button>
            </div>
            <div className="settingsPanel">
                <button className="sortCategoriesButton" >
                    <img className="sortCategoriesIcon" src={SortCategories.default} />
                </button>
            </div>
        </div>
    )
}