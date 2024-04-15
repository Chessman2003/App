import React, { useState } from "react";
import { Category } from "../Category/Category";
import { MonipulatorPanel } from '../MonipulatorPanel/MonipulatorPanel';
import { ControlPanel } from "../ControlPanel/ControlPanel";
import { SettingsPanel } from "../SettingsPanel/SettingsPanel";
import { EditElementsModal } from "../EditElementsModal/EditElementsModal";
import { v4 as uuidv4 } from 'uuid';


import {
    ICategory,
    IElement,
    SideBarType
} from "../../types/categories";

import { useRootModal } from "../../../Modal";
import './SideBar.scss';
import { EditModal } from "../EditCategoryModal/EditCategoryModal";
import { SortDirection } from "../../types/categories";
import { EditNewCategoryModal } from "../EditNewCategoryModal/EditNewCategoryModal";

type Props = {
    deleteCategory: (id: string) => void
    deleteElement: (categoryId: string, elementId: string) => void
    categories: ICategory[]
    type: SideBarType
    addCategory: (category: ICategory) => void
    addElement: (categoryTitle: string, newElement: IElement) => void
    toggleSortDirection: (category: ICategory, direction: SortDirection) => void
    editCategory: (category: ICategory) => void
}

export const SideBar = ({
    deleteElement,
    deleteCategory,
    categories,
    addCategory,
    type,
    toggleSortDirection,
    addElement,
    editCategory
}: Props) => {
    const { modalElement } = useRootModal({})

    const [showEditModal, setShowEditModal] = useState<boolean>(false);
    const [showEditElementModal, setShowEditElementModal] = useState<boolean>(false);
    const [showEditNewCategoryModal, setShowEditNewCategoryModal] = useState<boolean>(false);
    //const [showEditElementModal, setShowEditElementModal] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(null);

    let newClassname = 'sideBarWrapper';
    const [currentType, setCurrentType] = useState<SideBarType>(type);
    if (currentType == SideBarType.Open) {
        newClassname += ' Opened';
    } else {
        newClassname += ' Closed';
    }

    const handleEditCategory = (category: ICategory) => {
        setSelectedCategory(category);
        setShowEditNewCategoryModal(true);
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
                editCategory={() => handleEditCategory}
                editElements={() => { }}
                deleteCategory={(id) => {
                    deleteCategory(id)
                }}
                deleteElement={(categoryId, elementId) => {
                    deleteElement(categoryId, elementId)
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
                            addCategory({
                                title: categoryName,
                                icon: droppedImage,
                                elements: [],
                                id: uuidv4()
                            });
                        }
                        setShowEditModal(false);
                    }}
                />
            }

            {showEditElementModal &&
                <EditElementsModal
                    modalElement={modalElement}
                    categories={categories}
                    onClose={(elementName, selectedCategory) => {
                        if (elementName && selectedCategory) {
                            addElement(selectedCategory, {
                                name: elementName.name,
                                id: uuidv4()
                            })
                        }
                        setShowEditElementModal(false)
                    }} />
            }

            {showEditNewCategoryModal && modalElement && (
                <EditNewCategoryModal
                    modalElement={modalElement}
                    onClose={(newCategoryName, newDroppedImage) => {
                        if (newCategoryName && newDroppedImage) {
                            const editedCategory = {
                                id: modalElement.id,
                                title: newCategoryName,
                                icon: newDroppedImage,
                                elements: [],
                            };
                            editCategory(editedCategory);
                        }
                        setShowEditNewCategoryModal(false)
                    }}
                />
            )}
        </div>

    )
}