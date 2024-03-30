import React from "react";
import { IconClose } from "../../../icons/icons";
import { SortCategories } from "../../../icons/icons";
import { AddCategories } from "../../../icons/icons";
import './SideBarOpen.scss';

type SideBarOpenProps = {
    children: React.ReactNode;
    toggleSideBarOpen: () => void;
    //addCategories: () => void;
    //sortCategories: () => void;
}

export const SideBarOpen = ({ children, toggleSideBarOpen }: SideBarOpenProps) => {
    return (
        <div className="sideBarWrapperOpen">
            <div className="headerOpen">
                <button className="toggleSidebar" onClick={toggleSideBarOpen}>
                    <img className="iconOpen" src={IconClose.default} />
                </button>
                <p className="toggleSidebarText">Свернуть</p>
            </div>
            <div className="bordeLineOpen"></div>
            <div className="categories">
                {children}
            </div>
            <div className="bordeLineOpen"></div>
            <button className="addCategoriesButtonOpen" >
                <img className="AddCategoriesIconOpen" src={AddCategories.default} />
                <p className="AddCategoriesText">{`Добавить категорию`}</p>
            </button>
            <div className="bordeLineOpen"></div>
            <button className="sortCategoriesButtonOpen" >
                <img className="sortCategoriesIconOpen" src={SortCategories.default} />
                <p className="sortCategoriesText">{`Прямая сортировка элементов в категориях`}</p>
            </button>

        </div>

    )
}