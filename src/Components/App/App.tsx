import React, { useState, useEffect } from "react";

import {
    SideBar,
    useCategories,
    SideBarType,
    SortDirection,
    ICategory
} from "../SideBar";

import './App.scss';

export const App = () => {
    const {
        categories,
        addCategory,
        addElement,
        deleteCategory,
        deleteElement,
        editCategory,
        editElement,
        toogleSortDirection
    } = useCategories({ sortDirection: SortDirection.Forward });

    return (
        <div className="app">
            <SideBar
                type={SideBarType.Close}
                categories={categories}
                addCategory={addCategory}
                toggleSortDirection={toogleSortDirection}
                addElement={addElement}
                deleteCategory={deleteCategory}
                deleteElement={deleteElement}
                editCategory={editCategory}
                editElement={editElement}
            />
        </div>
    )
}


