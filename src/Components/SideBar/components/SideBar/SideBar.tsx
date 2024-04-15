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
import { EditNewElementsModal } from "../EditNewElementsModal/EditNewElementsModal";

type Props = {
    deleteCategory: (id: string) => void
    deleteElement: (categoryId: string, elementId: string) => void
    categories: ICategory[]
    type: SideBarType
    addCategory: (category: ICategory) => void
    addElement: (categoryTitle: string, newElement: IElement) => void
    toggleSortDirection: (category: ICategory, direction: SortDirection) => void
    editCategory: (category: ICategory) => void
    editElement: (element: IElement) => void
}

export const SideBar = ({
    deleteElement,
    deleteCategory,
    categories,
    addCategory,
    type,
    toggleSortDirection,
    addElement,
    editCategory,
    editElement
}: Props) => {
    const { modalElement } = useRootModal({})

    const [showEditModal, setShowEditModal] = useState<boolean>(false);

    const [showEditElementModal, setShowEditElementModal] = useState<boolean>(false);
    const [showEditNewCategoryModal, setShowEditNewCategoryModal] = useState<boolean>(false);

    const [showEditNewElementModal, setShowEditNewElementModal] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(null);
    const [selectedElement, setSelectedElement] = useState<IElement | null>(null);


    let newClassname = 'sideBarWrapper';
    const [currentType, setCurrentType] = useState<SideBarType>(type);
    if (currentType == SideBarType.Open) {
        newClassname += ' Opened';
    } else {
        newClassname += ' Closed';
    }

    const handleEditCategory = (idCategory: string) => {
        const category = categories.find(c => c.id == idCategory);
        if (category) {
            setSelectedCategory(category);
            setShowEditNewCategoryModal(true);
        }
    };

    const handleEditElement = (categoryId: string, elementId: string) => {
        const category = categories.find(c => c.id == categoryId);
        if (category) {
            const element = category?.elements.find(e => e.id == elementId);
            if (element) {
                setShowEditNewElementModal(true);
                setSelectedElement(element);
            }
        }

    };

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
                editCategory={handleEditCategory}
                editElement={handleEditElement}
                deleteCategory={deleteCategory}
                deleteElement={deleteElement}
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

            {showEditNewCategoryModal && (
                <EditNewCategoryModal
                    category={selectedCategory}
                    modalElement={modalElement}
                    onClose={(newCategoryName, newDroppedImage) => {
                        if (newCategoryName && newDroppedImage) {
                            const editedCategory = {
                                id: selectedCategory?.id || uuidv4(),
                                title: newCategoryName,
                                icon: newDroppedImage,
                                elements: selectedCategory?.elements || [],
                            };
                            editCategory(editedCategory);
                        }
                        setShowEditNewCategoryModal(false)
                    }}
                />
            )}

            {showEditNewElementModal && (
                <EditNewElementsModal
                    modalElement={modalElement}
                    element={selectedElement}
                    onClose={(elementName) => {
                        if (elementName) {
                            const editedElement = {
                                name: elementName,
                                id: selectedElement?.id || uuidv4()
                            }
                            editElement(editedElement)
                        }
                        setShowEditNewElementModal(false)
                    }}
                />
            )}
        </div>

    )
}