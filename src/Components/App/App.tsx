import React, { useEffect, useState } from "react";

import {
    SideBar,
    useCategories,
    SideBarType,
    SortDirection,
    ICategory
} from "../SideBar";

import './App.scss';

export const App = () => {
    const [sortDirection, setSortDirection] = useState<SortDirection>(SortDirection.Forward);

    const sortElements = (categories: ICategory[], direction: SortDirection) => {
        const updatedCategories = categories.map(category => {
            const sortedElements = [...category.elements];

            if (direction === SortDirection.Forward) {
                sortedElements.sort();
            } else if (direction === SortDirection.Back) {
                sortedElements.sort().reverse();
            }

            return { ...category, elements: sortedElements };
        });

        setSortDirection(prevState => {
            return prevState === SortDirection.Forward ? SortDirection.Back : SortDirection.Forward;
        });

        return updatedCategories;
    };

    const {
        categories,
        addCategory,
        addElement,
        deleteCategory,
        deleteElement,
        editCategory,
        editElement
    } = useCategories({ sortDirection });

    return (
        <div className="app">
            <SideBar
                type={SideBarType.Close}
                categories={categories}
                addCategory={addCategory}
                toggleSortDirection={() => sortElements(categories, sortDirection)}
                addElement={addElement}
                deleteCategory={deleteCategory}
                deleteElement={deleteElement}
                editCategory={editCategory}
                editElement={editElement}
            />
        </div>
    )
}


