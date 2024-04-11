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
    editCategory?: () => void
}

export const Category = ({
    categoryArray,
    type,
    addElements,
    editElements,
    editCategory,
}: CategoryProps) => {

    const [sortDirection, setSortDirection] = useState<SortDirection>(SortDirection.Forward);

    const {
        handleDeleteCategory,
        deleteElement
    } = useCategories({ sortDirection });


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
                        deleteCategory={() => handleDeleteCategory(i)}
                        deleteElement={() => deleteElement(c.title, i)}
                    />
                );
            })}
        </div>
    );
}