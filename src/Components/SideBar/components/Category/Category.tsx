import React from "react";
import { CategoryItem } from '../CategoryItem/CategoryItem';
import { SideBarType } from "../types/sideBarType";
import './Category.scss';

type CategoryProps = {
    categoryArray: Array<{ title: string, icon: string }>
    elementsArray?: string[];
    type: SideBarType
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