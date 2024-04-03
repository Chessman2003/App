import React from "react";
import { Category } from "../Category/Category";
import { MonipulatorPanel } from '../MonipulatorPanel/MonipulatorPanel';
import { ControlPanel } from "../ControlPanel/ControlPane";
import { SettingsPanel } from "../SettingsPanel/SettingsPanel";
import { SideBarType } from "../types/sideBarType";
import { CategoriesType } from "../types/categoriesType";
import { MonipulatorPanelType } from "../types/MonipulatorPanelType";
import { ControlPanelType } from "../types/ControlPanelType";
import { SettingsPanelType } from "../types/SettingsPanelType";
import './SideBar.scss';


type SideBarCloseProps = {
    categoriesArray: Array<{ title: string, icon: string }>;
    type: SideBarType;
    toggleSidebar: () => void;
    addCategories: () => void;
    sortCategories?: () => void;
}

export const SideBar = ({
    categoriesArray,
    toggleSidebar,
    addCategories,
    type,
    sortCategories
}: SideBarCloseProps) => {
    if (type == SideBarType.Close) {
        return (
            <div className="sideBarWrapperClose">
                <MonipulatorPanel onClick={toggleSidebar} type={MonipulatorPanelType.Close} />
                <Category type={CategoriesType.Close} categoryArray={categoriesArray} />
                <ControlPanel onClick={addCategories} type={ControlPanelType.Close} />
                <SettingsPanel onClick={sortCategories} type={SettingsPanelType.Close} />
            </div>
        )
    }
    else if (type == SideBarType.Open) {
        return (
            <div className="sideBarWrapperOpen">
                <MonipulatorPanel onClick={toggleSidebar} type={MonipulatorPanelType.Open} />
                <Category categoryArray={categoriesArray} type={CategoriesType.Open} />
                <ControlPanel onClick={addCategories} type={ControlPanelType.Open} />
                <SettingsPanel onClick={sortCategories} type={SettingsPanelType.Open} />
            </div>
        )
    }
}