import React from "react";
import { CategoriesType } from "../types/categoriesType";
import { CategoryItem } from '../CategoryItem/CategoryItem';
import './Category.scss';

type CategoryProps = {
    categoryArray: Array<{ title: string, icon: string }>
    elementsArray?: string[];
    type: CategoriesType
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
    elementsArray,
    type
}: CategoryProps) => {
    return (
        <div className='categoryWrapper'>
            <div className='categoryScroll'>
                {categoryArray.map((c, i) => {
                    return (
                        <CategoryItem
                            key={i}
                            elements={elementsArray}
                            type={type}
                            title={c.title}
                            icon={c.icon}
                        />
                    );
                })}
            </div>
        </div>
    );
}