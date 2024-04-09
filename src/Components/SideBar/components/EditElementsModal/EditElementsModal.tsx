import React, { useState, useEffect } from "react";
import {
    Modal,
    ModalHeader,
    ModalContent,
    ModalFooter,
    useRootModal
} from "../../../Modal";
import { ICategory } from "../../types/categories";
import { useCategories } from "../../lib/hooks/useCategories";
import { SortDirection } from "../../types/categories";
import './EditElementsModal.scss';

type Props = {
    modalElement: HTMLElement | null,
    onClose: (elementName?: string, selectedCategory?: string) => void,
    categories: ICategory[],
}

const wordNames = {
    modalTittle: 'Добавление элемента категории'
}

export const EditElementsModal = ({
    modalElement,
    onClose,
    categories
}: Props) => {
    const [elementName, setElementName] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [accessSave, setAccessSave] = useState<boolean>(false);

    useEffect(() => {
        let newAccessSave = true;
        if ('' + elementName == '') {
            newAccessSave = false;
        }
        if ('' + selectedCategory == '') {
            newAccessSave = false;
        }
        setAccessSave(newAccessSave);
    }, [elementName, selectedCategory]);


    const handleAddElement = () => {
        onClose(elementName, selectedCategory)
    };

    return (
        <Modal onClose={onClose} modalElement={modalElement}>
            <ModalHeader>
                <p className="ElementName">{wordNames.modalTittle}</p>
            </ModalHeader>
            <ModalContent>
                <div>
                    <input
                        type="text"
                        value={elementName}
                        onChange={(e) => setElementName(e.target.value)}
                    />
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >

                        {categories.map((c, i) => (
                            <option key={i}>{c.title}</option>
                        ))}


                    </select>
                </div>
            </ModalContent>
            <ModalFooter>
                <button onClick={handleAddElement} disabled={!accessSave}>{`Добавить элемент`}</button>
            </ModalFooter>
        </Modal>
    )

}