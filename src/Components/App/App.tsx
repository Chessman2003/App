import React, { useState } from "react";
import { SideBarClose } from "../SideBar";
import { SideBarOpen } from "../SideBar/components/SideBarOpen/SideBarOpen";
import './App.scss'

export const App = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const sideBarOpen = () => {
        setIsOpen(true);
    }

    const sideBarClose = () => {
        setIsOpen(false);
    }

    const categoriesArray = [
        'https://cdn-icons-png.freepik.com/512/14524/14524465.png?ga=GA1.1.753315375.1711741126&',
        'https://cdn-icons-png.freepik.com/512/6937/6937220.png?ga=GA1.1.753315375.1711741126&',
        'https://cdn-icons-png.freepik.com/512/4913/4913512.png?ga=GA1.1.753315375.1711741126&',
        'https://cdn-icons-png.freepik.com/512/4851/4851585.png?ga=GA1.1.753315375.1711741126&',
    ];


    return (
        <div className="app">
            {!isOpen && (
                <SideBarClose categoriesImage={categoriesArray} toggleSidebar={sideBarOpen} />
                )
            }

            {isOpen && (
                <sideBarOpen toggleSideBarOpen={sideBarClose} 
            )}

        </div>
    )
}


