import React, { useEffect, useState } from "react";
import { Category } from "../Category/Category";
import { MonipulatorPanel } from '../MonipulatorPanel/MonipulatorPanel';
import { ControlPanel } from "../ControlPanel/ControlPanel";
import { SettingsPanel } from "../SettingsPanel/SettingsPanel";
import { SideBarType } from "../types/sideBarType";
import './SideBar.scss';


type SideBarCloseProps = {
    categoriesArray: Array<{ title: string, icon: string, elements: string[] }>;
    type: SideBarType;
    addCategories: () => void;
    sortCategories?: () => void;
    addElements: () => void
    editElements?: () => void
    deliteElements?: () => void
    deliteCategory?: () => void
    editCategory?: () => void
}

export const SideBar = ({
    categoriesArray,
    addCategories,
    type,
    sortCategories,
    addElements,
    editElements,
    deliteElements,
    deliteCategory,
    editCategory
}: SideBarCloseProps) => {

    let newClassname = 'sideBarWrapper';

    const [currentType, setCurrentType] = useState<SideBarType>(type);

    if (currentType == SideBarType.Open) {
        newClassname += ' Opened';
    } else {
        newClassname += ' Closed';
    }

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
            <MonipulatorPanel
                onClick={handleToggleSidebar}
                type={currentType}
            />
            <Category
                type={currentType}
                categoryArray={categoriesArray}
                addElements={addElements}
                editCategory={editCategory}
                editElements={editElements}
                deliteCategory={deliteCategory}
                deliteElements={deliteElements}
            />
            <ControlPanel
                onClick={addCategories}
                type={currentType}
            />
            <SettingsPanel
                onClick={sortCategories}
                type={currentType}
            />
        </div>
    )
}