import React from "react";
import { Category } from "../Category/Category";
import { MonipulatorPanel } from '../MonipulatorPanel/MonipulatorPanel';
import { ControlPanel } from "../ControlPanel/ControlPane";
import { SettingsPanel } from "../SettingsPanel/SettingsPanel";
import { SideBarType } from "../types/sideBarType";
import { CategoriesType } from "../types/categoriesType";
import './SideBarClose.scss';
import { SortCategories } from "../../../icons/icons";

type SideBarCloseProps = {
    categoriesArray: Array<{ title: string, icon: string }>;
    type: SideBarType;
    toggleSidebar: () => void;
    addCategories: () => void;
    sortCategories?: () => void;
}

export const SideBarClose = ({
    categoriesArray,
    toggleSidebar,
    addCategories,
    type,
    sortCategories
}: SideBarCloseProps) => {
    if (type == SideBarType.Close) {
        return (
            <div className="sideBarWrapperClose">
                <MonipulatorPanel onClick={toggleSidebar} />
                <Category type={CategoriesType.Close} categoryArray={categoriesArray} />
                <ControlPanel onClick={addCategories} />
                <SettingsPanel onClick={sortCategories} />
            </div>
        )
    }
    else if (type == SideBarType.Open) {
        return (
            <div className="sideBarWrapperOpen">

            </div>
        )
    }
}