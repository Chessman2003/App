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
import { SortDirection, IElement } from "../../types/categories";
import './EditElementsModal.scss';

type Props = {
    modalElement: HTMLElement | null,
    onClose: (elementName?: IElement, selectedCategory?: string) => void,
    categories: ICategory[],
}

const wordNames = {
    modalTittle: 'Добавление элемента категории',
    elementName: 'Название',
    category: 'Категория'
}

export const EditElementsModal = ({
    modalElement,
    onClose,
    categories
}: Props) => {
    const [elementName, setElementName] = useState<IElement>({
        name: "",
        id: ''
    });
    const [selectedCategory, setSelectedCategory] = useState('');
    const [accessSave, setAccessSave] = useState<boolean>(false);

    useEffect(() => {
        let newAccessSave = true;
        if ('' + elementName.name.trim() == '') {
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
                <p className='elementsHeaderText'>{wordNames.modalTittle}</p>
            </ModalHeader>
            <ModalContent>
                <div className="addElementsContent">
                    <div className="addElimentName">
                        <p className="addElimentTittle">{wordNames.elementName}</p>
                        <input
                            className="editElementsInput"
                            type="text"
                            value={elementName.name}
                            onChange={(e) => setElementName({ name: e.target.value, id: elementName.id })}
                        />
                    </div>
                    <div className="chooseCategory">
                        <p className="chooseCategoryTittle">{wordNames.category}</p>
                        <div className="select">
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="chooseCategorySelect"
                            >
                                <option value={''} disabled hidden>{`Выберете категорию`}</option>
                                {categories.map((c, i) => (
                                    <option key={i} className="categoryOption">{c.title}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </ModalContent>
            <ModalFooter>
                <button className="saveElemBtn" onClick={handleAddElement} disabled={!accessSave}>{`Добавить элемент`}</button>
            </ModalFooter>
        </Modal>
    )

}