import React from "react";
import './CategoryItem.scss';
import { SideBarType } from "../..";
import { addElem } from "../../../icons/icons";
import { DeliteIcon } from "../../../icons/icons";
import { EditIcon } from "../../../icons/icons";

type Props = {
    type: SideBarType
    icon: string
    title: string
    elements: string[]
    addElements: () => void
    editElements?: () => void
    deliteElements?: () => void
    deliteCategory?: () => void
    editCategory?: () => void

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
    elements,
    icon,
    title,
    type,
    addElements,
    editElements,
    deliteElements,
    deliteCategory,
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
                        <p className="categoryTittle">{title}</p>
                        <div className="buttons">
                            <button className="addElementsBtn" onClick={addElements}>
                                <img className="addElementsImg" src={addElem.default} alt="Добавить элемент" />
                            </button>
                            <button className="editCatBtn" onClick={editCategory}>
                                <img className="editCatImg" src={EditIcon.default} alt="Добавить элемент" />
                            </button>
                            <button className="deliteCatBtn" onClick={deliteCategory}>
                                <img className="deliteCatImg" src={DeliteIcon.default} alt="Добавить элемент" />
                            </button>
                        </div>
                    </div>

                    <div className="elements">
                        {elements.map((element, index) => (
                            <div className='item' key={index}>
                                {element}
                                <button className="editElemBtn" onClick={editElements}>
                                    <img className="editElemImg" src={EditIcon.default} />
                                </button>
                                <button className="deliteElemBtn" onClick={deliteElements}>
                                    <img className="deliteElemImg" src={DeliteIcon.default} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>}
        </div>
    )
}
