import React, { useState, useEffect } from "react";
import { CategoryItem } from '../CategoryItem/CategoryItem';
import { SideBarType } from "../..";
import { ICategory } from "../..";
import { SortDirection } from "../..";
import { NoCategory } from "../../../icons/icons";
import './Category.scss';

type CategoryProps = {
    categoryArray: ICategory[]
    type: SideBarType
    sortDirection: SortDirection
    addElements: () => void
    editElement: (categoryId: string, elementID: string) => void
    editCategory: (idCategory: string) => void
    deleteCategory: (id: string) => void
    deleteElement: (categoryId: string, elementId: string) => void
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


export const Category = ({
    categoryArray,
    type,
    sortDirection,
    addElements,
    editElement,
    editCategory,
    deleteCategory,
    deleteElement
}: CategoryProps) => {
    const [noCategories, setNoCategories] = useState<boolean>(false);

    useEffect(() => {
        if (categoryArray.length === 0) {
            setNoCategories(true);
        } else {
            setNoCategories(false)
        }
    }, [categoryArray])

    const isClosed = type == SideBarType.Close;

    return (
        <div className={classNames('categoryWrapper', {
            closed: isClosed,
            opened: !isClosed
        })}>


            {categoryArray.map((c, i) => {
                return (
                    <CategoryItem
                        id={c.id}
                        key={i}
                        elements={c.elements}
                        type={type}
                        title={c.title}
                        icon={c.icon}
                        sortDirection={sortDirection}
                        editCategory={editCategory}
                        addElements={addElements}
                        editElement={editElement}
                        deleteCategory={() => deleteCategory(c.id)}
                        deleteElement={(categoryId, elementId) => deleteElement(c.id, elementId)}
                    />
                );
            })}

            {!isClosed && noCategories && (
                <div className="noCategoryWrapper">
                    <p className="noCategoryText">Нет категорий!</p>
                    <img className="noCategoryImage" src={NoCategory.default} alt="No Categories" />
                </div>
            )}
            {isClosed && noCategories && (
                <div className="noCategoryWrapperClosed">
                    <img className="noCategoryImage" src={NoCategory.default} alt="No Categories" />
                </div>
            )}
        </div>

    );
}