import React from "react";
import { IconOpen } from "../../../icons/icons";
import { SortCategories } from "../../../icons/icons";
import { AddCategories } from "../../../icons/icons";
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
            <button className="toggleSidebar" onClick={toggleSidebar}><img className="iconOpen" src={IconOpen.default} /></button>
            <div className="borderLine"></div>
            <div className="categoriesArray">
                {categoriesImage.map((category, index) => (
                    <img className="categoriesImage" key={index} src={category.icon} />
                ))}
            </div>
            <div className="borderLine"></div>
            <button className="addCategoriesButton" onClick={addCategories}>
                <img className="AddCategoriesIcon" src={AddCategories.default} />
            </button>
            <div className="borderLine"></div>
            <button className="sortCategoriesButton" >
                <img className="sortCategoriesIcon" src={SortCategories.default} />
            </button>
        </div>

    )
}