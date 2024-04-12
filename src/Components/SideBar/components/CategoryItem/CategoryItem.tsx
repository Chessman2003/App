import React from "react";
import './CategoryItem.scss';
import { ICategory, SideBarType } from "../..";
import { addElem } from "../../../icons/icons";
import { DeliteIcon } from "../../../icons/icons";
import { EditIcon } from "../../../icons/icons";
import { IElement } from "../..";

type Props = {
    type: SideBarType
    id: string
    icon: string
    title: string
    elements: IElement[]
    addElements: () => void
    editElements?: () => void
    deleteElement: (categoryId: string, elementId: string) => void
    deleteCategory: (id: string) => void
    editCategory: () => void
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
    addElements,
    editElements,
    deleteElement,
    deleteCategory,
    editCategory
}: Props) => {

    const isClosed = type == SideBarType.Close;

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
                        <div className="buttons">
                            <button className="addElementsBtn" onClick={addElements}>
                                <img className="addElementsImg" src={addElem.default} alt="Добавить элемент" />
                            </button>
                            <button className="editCatBtn" onClick={editCategory}>
                                <img className="editCatImg" src={EditIcon.default} alt="Добавить элемент" />
                            </button>
                            <button className="deliteCatBtn" onClick={() => deleteCategory(id)}>
                                <img className="deliteCatImg" src={DeliteIcon.default} alt="Добавить элемент" />
                            </button>
                        </div>
                    </div>

                    <div className="elements">
                        {elements.map((element) => (
                            <div className='item' key={element.id}>
                                {element.name}
                                <button className="editElemBtn" onClick={editElements}>
                                    <img className="editElemImg" src={EditIcon.default} />
                                </button>
                                <button className="deliteElemBtn" onClick={() => deleteElement(id, element.id)}>
                                    <img className="deliteElemImg" src={DeliteIcon.default} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>}
        </div>
    )
}
