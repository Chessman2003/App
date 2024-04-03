import React, { useEffect, useState } from "react";
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
    addCategories: () => void;
    sortCategories?: () => void;
}

export const SideBar = ({
    categoriesArray,
    addCategories,
    type,
    sortCategories
}: SideBarCloseProps) => {
    let newClassname = 'sideBarWrapper';
    const [currentType, setCurrentType] = useState<SideBarType>(type);
    if (currentType == SideBarType.Open) {
        newClassname += ' Opened';
    } else {
        newClassname += ' Closed';
    }

    const [controlType, setControlType] = useState(ControlPanelType.Close);
    const [settingsType, setSettingsType] = useState(SettingsPanelType.Close);

    useEffect(() => {
        if (currentType == SideBarType.Close) {
            setControlType(ControlPanelType.Close);
            setSettingsType(SettingsPanelType.Close);
        } else {
            setControlType(ControlPanelType.Open);
            setSettingsType(SettingsPanelType.Open);
        }
    }, [currentType]);


    const handleToggleSidebar = () => {
        setCurrentType(prevState => {
            let newState: SideBarType = SideBarType.Close;
            if (prevState == SideBarType.Close) {
                newState = SideBarType.Open;
            }
            return newState;
        });
    }
    return (
        <div className={newClassname}>
            <MonipulatorPanel onClick={handleToggleSidebar} type={currentType} />
            <Category type={CategoriesType.Close} categoryArray={categoriesArray} />
            <ControlPanel onClick={addCategories} type={controlType} />
            <SettingsPanel onClick={sortCategories} type={settingsType} />
        </div>
    )
}