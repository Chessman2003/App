import React, { useEffect, useState } from "react";

import {
    SideBar,
    useCategories,
    SideBarType,
    SortDirection
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
    const {
        initCategories,
        categories,
        addCategory
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
                toggleSortDirection={toggleSortDirection}
            />
        </div>
    )
}


