import React, { useState, useEffect } from "react";
import './CategoryElements.scss';
import { IElement } from "../..";
import {
    DeliteIcon,
    EditIcon,
} from "../../../icons/icons";
import { SortDirection } from "../..";

type Props = {
    id: string
    elements: IElement[]
    editElement: (categoryId: string, elemnetId: string) => void
    deleteElement: (categoryId: string, elementId: string) => void
    sortDirection: SortDirection
}
export const CategoryElements = ({
    id,
    elements,
    editElement,
    deleteElement,
    sortDirection
}: Props) => {
    const [showElements, setShowElements] = useState<IElement[]>(elements);

    useEffect(() => {
        const sortedElements = [...elements].sort((a, b) => {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        });

        if (sortDirection === SortDirection.Back) {
            setShowElements(sortedElements.reverse());
        } else {
            setShowElements(sortedElements);
        }
    }, [elements, sortDirection]);

    return (
        <div className="elements">
            {showElements.map((element) => (
                <div className='item' key={element.id}>
                    {element.name}
                    <button className="editElemBtn" onClick={() => editElement(id, element.id)}>
                        <img className="editElemImg" src={EditIcon.default} />
                    </button>
                    <button className="deliteElemBtn" onClick={() => deleteElement(id, element.id)}>
                        <img className="deliteElemImg" src={DeliteIcon.default} />
                    </button>
                </div>
            ))}
        </div>
    )
}
