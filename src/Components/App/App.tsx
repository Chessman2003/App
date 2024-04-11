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

    const toggleSortDirection = () => {
        setSortDirection(prevState => {
            if (prevState == SortDirection.Forward) {
                return SortDirection.Back;
            } else {
                return SortDirection.Forward
            }
        })
    }

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
        initCategories,
        categories,
        addCategory,
        addElement,
        deleteCategory
    } = useCategories({ sortDirection });

    useEffect(() => {
        initCategories();
    }, []);

    return (
        <div className="app">
            <SideBar
                type={SideBarType.Close}
                categories={categories}
                addCategory={addCategory}
                toggleSortDirection={() => sortElements(categories, sortDirection)}
                addElement={addElement}
                deleteCategory={deleteCategory}
            />
        </div>
    )
}


