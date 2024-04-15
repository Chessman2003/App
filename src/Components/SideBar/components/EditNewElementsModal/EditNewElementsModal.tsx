import React, { useState, useEffect } from "react";
import {
    Modal,
    ModalHeader,
    ModalContent,
    ModalFooter,
} from "../../../Modal";
import { IElement } from "../../types/categories";
import './EditNewElementsModal.scss';

type Props = {
    modalElement: HTMLElement | null,
    onClose: (elementName?: string) => void,
    element: IElement | null
}

const wordNames = {
    modalTittle: 'Изменение элемента категории',
    elementName: 'Название',
}

export const EditNewElementsModal = ({
    modalElement,
    onClose,
    element
}: Props) => {
    const [elementName, setElementName] = useState<string>(element?.name || '');
    const [accessSave, setAccessSave] = useState<boolean>(false);

    useEffect(() => {
        let newAccessSave = true;
        if ('' + elementName.trim() == '') {
            newAccessSave = false;
        }
        setAccessSave(newAccessSave);
    }, [elementName]);


    const handleAddElement = () => {
        onClose(elementName)
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
                            value={elementName}
                            onChange={(e) => setElementName(e.target.value)}
                        />
                    </div>
                </div>
            </ModalContent>
            <ModalFooter>
                <button className="saveElemBtn" onClick={handleAddElement} disabled={!accessSave}>{`Изменить элемент`}</button>
            </ModalFooter>
        </Modal>
    )

}