import React, { useState } from "react";
import { Category } from "../Category/Category";
import { MonipulatorPanel } from '../MonipulatorPanel/MonipulatorPanel';
import { ControlPanel } from "../ControlPanel/ControlPanel";
import { SettingsPanel } from "../SettingsPanel/SettingsPanel";
import { EditElementsModal } from "../EditElementsModal/EditElementsModal";

import {
    ICategory,
    SideBarType
} from "../../types/categories";

import { useRootModal } from "../../../Modal";
import './SideBar.scss';
import { EditModal } from "../EditCategoryModal/EditCategoryModal";
import { SortDirection } from "../../types/categories";

type Props = {
    deleteCategory: (id: string) => void
    categories: ICategory[]
    type: SideBarType
    addCategory: (category: ICategory) => void
    addElement: (categoryTitle: string, newElement: string) => void
    toggleSortDirection: (category: ICategory, direction: SortDirection) => void
}

export const SideBar = ({
    deleteCategory,
    categories,
    addCategory,
    type,
    toggleSortDirection,
    addElement,
}: Props) => {
    const { modalElement } = useRootModal({})

    const [showEditModal, setShowEditModal] = useState<boolean>(false);
    const [showEditElementModal, setShowEditElementModal] = useState<boolean>(false);

    let newClassname = 'sideBarWrapper';
    const [currentType, setCurrentType] = useState<SideBarType>(type);
    if (currentType == SideBarType.Open) {
        newClassname += ' Opened';
    } else {
        newClassname += ' Closed';
    }

    const updateCurrentType = () => {
        setShowEditModal(false);
        setShowEditElementModal(false);
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
                onClick={updateCurrentType}
                type={currentType}
            />
            <Category
                type={currentType}
                categoryArray={categories}
                addElements={() => setShowEditElementModal(true)}
                editCategory={() => { }}
                editElements={() => { }}
                deleteCategory={(id) => {
                    deleteCategory(id)
                }}
            />
            <ControlPanel
                onClick={() => {
                    setShowEditModal(true);
                }}
                type={currentType}
            />
            <SettingsPanel
                onClick={toggleSortDirection}
                type={currentType}
            />
            {showEditModal &&
                <EditModal
                    modalElement={modalElement}
                    onClose={(categoryName, droppedImage) => {
                        if (categoryName && droppedImage) {
                            addCategory({ title: categoryName, icon: droppedImage, elements: [], id: '' });
                        }
                        setShowEditModal(false);
                    }}
                />
            }

            {showEditElementModal && (
                <EditElementsModal
                    modalElement={modalElement}
                    categories={categories}
                    onClose={(elementName, selectedCategory) => {
                        if (elementName && selectedCategory) {
                            addElement(selectedCategory, elementName)
                        }
                        setShowEditElementModal(false)
                    }} />
            )}
        </div>

    )
}