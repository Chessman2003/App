import React from "react";
import './Category.scss';

type CategoryProps = {
    title: string;
    icon: string;
    elementsArray?: string[];
}

export const Category = ({ title, icon, elementsArray }: CategoryProps) => {
    return (
        <div className="categoryWrapper">
            <div className="header">
                <img className='categoriesImage' src={icon} alt="categoryIcon" />
                <p className="categoryTittle">{title}</p>
            </div>
            <div className="elementsArray">
                {elementsArray}
            </div>
        </div>
    )
}