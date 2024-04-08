import React from "react";
import { CategoryItem } from '../CategoryItem/CategoryItem';
import { SideBarType } from "../types/sideBarType";
import './Category.scss';

type CategoryProps = {
    categoryArray: Array<{ title: string, icon: string, elements: string[] }>
    type: SideBarType
    addElements: () => void
    editElements?: () => void
    deliteElements?: () => void
    deliteCategory?: () => void
    editCategory?: () => void
}


export const Category = ({
    categoryArray,
    type,
    addElements,
    editElements,
    deliteElements,
    deliteCategory,
    editCategory
}: CategoryProps) => {
    return (
        <div className='categoryWrapper'>
            {categoryArray.map((c, i) => {
                return (
                    <CategoryItem
                        key={i}
                        elements={c.elements}
                        type={type}
                        title={c.title}
                        icon={c.icon}
                        editCategory={editCategory}
                        addElements={addElements}
                        editElements={editElements}
                        deliteCategory={deliteCategory}
                        deliteElements={deliteElements}
                    />
                );
            })}
        </div>
    );
}