import React, { useEffect, useState } from "react";

import {
    Modal,
    ModalHeader,
    ModalContent,
    ModalFooter,
    useRootModal
} from "../../../Modal";
import { SelectImage } from "../SelectImage/SelectImage";

import './EditModal.scss';

type Props = {
    modalElement: HTMLElement | null
    onClose: (categoryName?: string, droppedImage?: string) => void
}


const wordNames = {
    addCategories: `Добавление категории`,
    nameCategory: `Название категории`,
    setIcon: `Иконка`
}


export const EditModal = ({
    onClose,
    modalElement
}: Props) => {
    const [categoryName, setCategoryName] = useState<string>('');
    const [droppedImage, setDroppedImage] = useState<string>('');

    const [accessSave, setAccessSave] = useState<boolean>(false);

    useEffect(() => {
        let newAccessSave = true;
        if ('' + droppedImage == '') {
            newAccessSave = false;
        }
        if ('' + categoryName == '') {
            newAccessSave = false;
        }
        setAccessSave(newAccessSave);
    }, [droppedImage, categoryName]);

    const handleSave = () => {
        onClose(categoryName, droppedImage);
    }

    return (
        <Modal onClose={onClose} modalElement={modalElement}>
            <ModalHeader>
                <p className="categoryHeaderText">{wordNames.addCategories}</p>
            </ModalHeader>
            <ModalContent>
                <div className="addCategoryContent">
                    <div className="addCategoryName">
                        <p className="categoryNameTitle">{wordNames.nameCategory}</p>
                        <input
                            type="text"
                            className="categoryTextInput"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                        />
                    </div>
                    <div className="addCategoryImage">
                        <p className="categoryNameTitle">{wordNames.setIcon}</p>
                        <SelectImage
                            droppedImage={droppedImage}
                            saveDroppedImage={(droppedImage) => { setDroppedImage(droppedImage) }}
                        />
                    </div>
                </div>
            </ModalContent>
            <ModalFooter>
                <button className="saveCategoryBtn" disabled={!accessSave} onClick={handleSave}>{`сохранить`}</button>
            </ModalFooter>
        </Modal>
    );
}