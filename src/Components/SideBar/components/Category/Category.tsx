import React, { useState } from "react";
import { CategoryItem } from '../CategoryItem/CategoryItem';
import { SideBarType } from "../..";
import { ICategory } from "../..";
import { useCategories } from "../..";
import { SortDirection } from "../..";
import './Category.scss';

type CategoryProps = {
    categoryArray: ICategory[]
    type: SideBarType
    addElements: () => void
    editElements?: () => void
    editCategory: () => void
    deleteCategory: (id: string) => void
    deleteElement: (categoryId: string, elementId: string) => void
}

export const Category = ({
    categoryArray,
    type,
    addElements,
    editElements,
    editCategory,
    deleteCategory,
    deleteElement
}: CategoryProps) => {

    return (
        <div className='categoryWrapper'>
            {categoryArray.map((c, i) => {
                return (
                    <CategoryItem
                        id={c.id}
                        key={i}
                        elements={c.elements}
                        type={type}
                        title={c.title}
                        icon={c.icon}
                        editCategory={editCategory}
                        addElements={addElements}
                        editElements={editElements}
                        deleteCategory={() => deleteCategory(c.id)}
                        deleteElement={(categoryId, elementId) => deleteElement(c.id, elementId)}
                    />
                );
            })}
        </div>
    );
}