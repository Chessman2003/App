import React, {
    useEffect,
    useState
} from "react";

import { Category } from "../Category/Category";
import { MonipulatorPanel } from '../MonipulatorPanel/MonipulatorPanel';
import { ControlPanel } from "../ControlPanel/ControlPanel";
import { SettingsPanel } from "../SettingsPanel/SettingsPanel";

import {
    ICategory,
    SideBarType
} from "../../types/categories";


import {
    Modal,
    ModalHeader,
    ModalContent,
    ModalFooter,
    useRootModal
} from "../../../Modal";

import './SideBar.scss';
import { EditModal } from "../EditModal/EditModal";

type Props = {
    categories: ICategory[]
    type: SideBarType
    addCategory: (category: ICategory) => void
    toggleSortDirection: () => void
}

export const SideBar = ({
    categories,
    addCategory,
    type,
    toggleSortDirection
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
                addElements={() => { }}
                editCategory={() => { }}
                editElements={() => { }}
                deliteCategory={() => { }}
                deliteElements={() => { }}
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
                            addCategory({ title: categoryName, icon: droppedImage, elements: [] });
                        }
                        setShowEditModal(false);
                    }}
                />
            }

            {showEditElementModal && (
                <Modal onClose={() => { }} modalElement={modalElement}>
                    <ModalHeader>
                        <p className="categoryHeaderText">{`Добавление элеменов категории`}</p>
                    </ModalHeader>
                    <ModalContent>
                        <div className="addElementContent">
                            <div className="addCategoryName">
                                <p className="categoryNameTitle">{`Название элимента`}</p>
                                <input
                                    type="text"
                                    className="categoryTextInput"
                                    value={'newElement'}
                                    onChange={(e) => {/*setNewElement(e.target.value)*/ }}
                                />
                            </div>
                        </div>
                    </ModalContent>
                </Modal>
            )}
        </div>

    )
}