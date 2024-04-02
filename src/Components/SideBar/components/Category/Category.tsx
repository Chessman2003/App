import React from "react";
import { CategoriesType } from "../types/categoriesType";
import './Category.scss';

type CategoryProps = {
    categoryArray: Array<{ title: string, icon: string }>
    elementsArray?: string[];
    type: CategoriesType
}

export const Category = ({
    categoryArray,
    elementsArray,
    type
}: CategoryProps) => {
    if (type == CategoriesType.Open) {
        return (
            <div className="categoryWrapper">
                {categoryArray.map((category, index) => (
                    <>
                        <div className="header">
                            <img className='categoriesImage' key={index} src={category.icon} alt={category.title} />
                            <p className="categoryTittle">{category.title}</p>
                        </div>
                        <div className="elementsArray">
                            {elementsArray}
                        </div>
                    </>
                ))}
            </div>
        )
    } else if (type == CategoriesType.Close) {
        return (
            <div className="CategoryWrapperClose">
                {
                    categoryArray.map((category, index) => (
                        <img className="categoriesImage" key={index} src={category.icon} alt={category.title} />
                    ))
                }
            </div>

        )
    }

    console.error('Unknown category!');
    return null

}