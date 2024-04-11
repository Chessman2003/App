import React, { useState } from "react";

import { ICategory, SortDirection } from '../..'

type Options = {
    sortDirection: SortDirection
}

export const useCategories = ({ sortDirection }: Options) => {
    const [categories, setCategories] = useState<ICategory[]>([]);



    const initCategories = () => {
        setCategories([
            {
                id: '1',
                title: 'кирпичи',
                icon: 'https://cdn-icons-png.freepik.com/512/14524/14524465.png?ga=GA1.1.753315375.1711741126&',
                elements: ['Элемент 1', 'Элимент 2', 'Элимент 3', 'Элимент 4', 'Элимент 5']
            },
            {
                id: '2',
                title: 'брёвна',
                icon: 'https://cdn-icons-png.freepik.com/512/6937/6937220.png?ga=GA1.1.753315375.1711741126&',
                elements: ['Элимент 1', 'Элимент 2', 'Элимент 3', 'Элимент 4', 'Элимент 5']
            },
            {
                id: '3',
                title: 'кран',
                icon: 'https://cdn-icons-png.freepik.com/512/4913/4913512.png?ga=GA1.1.753315375.1711741126&',
                elements: ['Элимент 1', 'Элимент 2', 'Элимент 3', 'Элимент 4', 'Элимент 5']
            },
            {
                id: '4',
                title: 'тачка',
                icon: 'https://cdn-icons-png.freepik.com/512/4851/4851585.png?ga=GA1.1.753315375.1711741126&',
                elements: ['Элимент 1', 'Элимент 2', 'Элимент 3', 'Элимент 4', 'Элимент 5']

            },]);
    }

    const addCategories = (newCategories: ICategory[]) => {
        setCategories(newCategories);
    }

    const addCategory = (category: ICategory) => {
        setCategories(prevState => {
            const newCategories = [...prevState, category];
            return newCategories;
        });
    }

    const addElement = (categoryTitle: string, newElement: string) => {
        setCategories(prevState => {
            const updatedCategories = prevState.map(category => {
                if (category.title === categoryTitle) {
                    return {
                        ...category,
                        elements: [...category.elements, newElement]
                    };
                }
                return category;
            });
            return updatedCategories;
        });
    }


    const deleteCategory = (id: string) => {
        setCategories(prevState => {
            return [...prevState].filter(c => c.id != id);
        });
    }

    const deleteElement = (categoryTitle: string, elementIndex: number) => {
        setCategories(prevState => {
            const updatedCategories = prevState.map(category => {
                if (category.title === categoryTitle) {
                    const updatedElements = category.elements.filter((_, idx) => idx !== elementIndex);
                    return {
                        ...category,
                        elements: updatedElements
                    };
                }
                return category;
            });
            return updatedCategories;
        });
    }

    const sortElements = (category: ICategory, direction: SortDirection) => {
        const sortedElements = [...category.elements];
        if (direction === SortDirection.Forward) {
            sortedElements.sort();
        } else if (direction === SortDirection.Back) {
            sortedElements.sort().reverse();
        }
        return { ...category, elements: sortedElements };
    }
    return {
        categories,
        addCategories,
        addCategory,
        initCategories,
        addElement,
        handleDeleteCategory,
        deleteElement
    };
}