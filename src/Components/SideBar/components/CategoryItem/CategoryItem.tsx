import React from "react";
import { CategoriesType } from "../types/categoriesType";
import './CategoryItem.scss';

type Props = {
    type: CategoriesType
    icon: string
    title: string
    elements?: string[]
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
    type
}: Props) => {
    return (
        <div className="categoryItem">
            <div className="header">
                <img className='categoriesImage' src={icon} alt={title} />
                <p className="categoryTitle">{title}</p>
            </div>
            <div className="elements">
                {elements}
            </div>
        </div>
    )
}
