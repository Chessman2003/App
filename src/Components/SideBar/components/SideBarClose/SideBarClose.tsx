import React from "react";
import { IconOpen } from "../../../icons/icons";
import { SortCategories } from "../../../icons/icons";
import { AddCategories } from "../../../icons/icons";
import './SideBarClose.scss';

type SideBarCloseProps = {
    categoriesImage: string[];
    toggleSidebar: () => void;
    //addCategories: () => void;
    //sortCategories: () => void;

}

export const SideBarClose = ({ categoriesImage, toggleSidebar }: SideBarCloseProps) => {
    return (
        <div className="sideBarWrapperClose">
            <button className="toggleSidebar" onClick={toggleSidebar}><img className="iconOpen" src={IconOpen.default} /></button>
            <div className="categoriesArray">
                {categoriesImage.map((image, index) => (
                    <img className="categoriesImage" key={index} src={image} />
                ))}
            </div>
            <button className="addCategoriesButton" >
                <img className="AddCategoriesIcon" src={AddCategories.default} />
            </button>
            <div className="borderLine"></div>
            <button className="sortCategoriesButton" >
                <img className="sortCategoriesIcon" src={SortCategories.default} />
            </button>
        </div>

    )
}