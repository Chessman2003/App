import React, { useState, useEffect } from "react";
import './CategoryItem.scss';
import { SideBarType, SortDirection } from "../..";
import {
    addElem,
    DeliteIcon,
    EditIcon,
    IconArrowDown,
    IconArrowUp,
} from "../../../icons/icons";
import { IElement } from "../..";

type Props = {
    type: SideBarType
    id: string
    icon: string
    title: string
    elements: IElement[]
    sortDirection: SortDirection
    addElements: () => void
    editElement: (categoryId: string, elemnetId: string) => void
    deleteElement: (categoryId: string, elementId: string) => void
    deleteCategory: (id: string) => void
    editCategory: (idCategory: string) => void
}

const classNames = (cls: string, props = {}, additionals: string[] = []) => {
    let propsNames = '';
    Object.entries(props).forEach(element => {
        if (element[1] == true) {
            propsNames += `${element[0]}`
        }
    });

    return `${cls} ${propsNames} ${additionals.join(' ')}`;
}

export const CategoryItem = ({
    id,
    elements,
    icon,
    title,
    type,
    sortDirection,
    addElements,
    editElement,
    deleteElement,
    deleteCategory,
    editCategory
}: Props) => {
    const [isShowElements, setIsShowElements] = useState<boolean>(false);

    const handleShowElements = () => {
        setIsShowElements(prevState => !prevState)
    }

    const isClosed = type == SideBarType.Close;

    const [showElements, setShowElements] = useState<any[]>(elements);
    useEffect(() => {
        if (sortDirection == SortDirection.Back) {
            setShowElements(elements.reverse());
        } else {
            setShowElements(elements);
        }
    }, [sortDirection]);

    return (
        <div className={classNames('categoryItem', {
            closed: isClosed,
            opened: !isClosed
        })}>

            <div className="imageWrapper">
                <img className='categoriesImage' src={icon} alt={title} />
            </div>

            {!isClosed &&
                <div className="categoryOpen">
                    <div className="header">
                        <p className="categoryTittle">{title} ({elements.length})</p>
                        <button className="showElemButton" onClick={handleShowElements}>
                            <img className="showElemImg" src={isShowElements ? IconArrowUp.default : IconArrowDown.default} />
                        </button>
                        <div className="buttons">
                            <button className="addElementsBtn" onClick={addElements}>
                                <img className="addElementsImg" src={addElem.default} alt="Добавить элемент" />
                            </button>
                            <button className="editCatBtn" onClick={() => editCategory(id)}>
                                <img className="editCatImg" src={EditIcon.default} alt="Добавить элемент" />
                            </button>
                            <button className="deliteCatBtn" onClick={() => deleteCategory(id)}>
                                <img className="deliteCatImg" src={DeliteIcon.default} alt="Добавить элемент" />
                            </button>
                        </div>
                    </div>
                    {isShowElements && (
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
                    )}

                </div>}
        </div>
    )
}
