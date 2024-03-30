import React, { useState } from "react";
import { SideBarClose } from "../SideBar";
import { SideBarOpen } from "../SideBar";
import { Category } from "../SideBar";
import './App.scss'

export const App = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [categories, setCategories] = useState<string[]>([
        'https://cdn-icons-png.freepik.com/512/14524/14524465.png?ga=GA1.1.753315375.1711741126&',
        'https://cdn-icons-png.freepik.com/512/6937/6937220.png?ga=GA1.1.753315375.1711741126&',
        'https://cdn-icons-png.freepik.com/512/4913/4913512.png?ga=GA1.1.753315375.1711741126&',
        'https://cdn-icons-png.freepik.com/512/4851/4851585.png?ga=GA1.1.753315375.1711741126&',])

    const sideBarOpen = () => {
        setIsOpen(true);
    }

    const sideBarClose = () => {
        setIsOpen(false);
    }



    return (
        <div className="app">
            {!isOpen && (
                <SideBarClose categoriesImage={categories} toggleSidebar={sideBarOpen} />
            )
            }

            {isOpen && (
                <SideBarOpen toggleSideBarOpen={sideBarClose}>
                    {[
                        <>
                            < Category title="Стройка" icon={categories[0]} />
                            < Category title="Стройка" icon={categories[1]} />
                            < Category title="Стройка" icon={categories[2]} />
                            < Category title="Стройка" icon={categories[3]} />
                        </>
                    ]
                    }
                </SideBarOpen>
            )}

        </div>
    )
}


