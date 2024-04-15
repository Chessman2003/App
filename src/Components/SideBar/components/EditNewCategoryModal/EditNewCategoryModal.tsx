import React, { useEffect, useState } from "react";
import {
    Modal,
    ModalHeader,
    ModalContent,
    ModalFooter,
} from "../../../Modal";
import { SelectImage } from "../SelectImage/SelectImage";
import './EditNewCategoryModal.scss';


type Props = {
    modalElement: HTMLElement | null
    onClose: (newCategoryName?: string, newDroppedImage?: string) => void
}
const wordNames = {
    addCategories: `Добавление категории`,
    nameCategory: `Название категории`,
    setIcon: `Иконка`
}


export const EditNewCategoryModal = ({
    onClose,
    modalElement
}: Props) => {
    const [newCategoryName, setNewCategoryName] = useState<string>('');
    const [newDroppedImage, setNewDroppedImage] = useState<string>('');
    const [accessSave, setAccessSave] = useState<boolean>(false);



    useEffect(() => {
        let newAccessSave = true;
        if ('' + newDroppedImage == '') {
            newAccessSave = false;
        }
        if ('' + newCategoryName == '') {
            newAccessSave = false;
        }
        setAccessSave(newAccessSave);
    }, [newDroppedImage, newCategoryName]);

    const handleSave = () => {
        onClose(newCategoryName, newDroppedImage);
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
                            value={newCategoryName}
                            onChange={(e) => setNewCategoryName(e.target.value)}
                        />
                    </div>
                    <div className="addCategoryImage">
                        <p className="categoryNameTitle">{wordNames.setIcon}</p>
                        <SelectImage
                            droppedImage={newDroppedImage}
                            saveDroppedImage={(newDroppedImage) => { setNewDroppedImage(newDroppedImage) }}
                        />
                    </div>
                </div>
            </ModalContent>
            <ModalFooter>
                <button className="saveCategoryBtn" disabled={!accessSave} onClick={handleSave}>{`Изменить категорию`}</button>
            </ModalFooter>
        </Modal>
    );
}