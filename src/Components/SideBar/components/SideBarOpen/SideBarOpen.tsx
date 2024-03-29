import React from "react";
import { IconClose } from "../../../icons/icons";
import { SortCategories } from "../../../icons/icons";
import { AddCategories } from "../../../icons/icons";
import './SideBarClose.scss';

type SideBarOpenProps = {
    children: () => React.ReactElement;
    toggleSideBarOpen: () => void;
    //addCategories: () => void;
    //sortCategories: () => void;
}

export const SideBarOpen = ({children, toggleSideBarOpen}: SideBarOpenProps) => {
return (
    <div className="sideBarWrapperOpen">
        <button className="toggleSidebar" onClick={toggleSideBarOpen}>
            <img className="iconOpen" src={IconClose.default} />
        </button>
        <p className="toggleSidebarText">Свернуть</p>
        <div className="categories">
            {children()}
        </div>
        <button className="addCategoriesButton" >
            <img className="AddCategoriesIcon" src={AddCategories.default} />
        </button>
        <button className="sortCategoriesButton" >
            <img className="sortCategoriesIcon" src={SortCategories.default} />
        </button>

    </div>
    
)
}