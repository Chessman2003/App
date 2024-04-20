import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

import { ICategory, SortDirection, IElement } from '../..'

type Options = {
    sortDirection: SortDirection
}

const storageData = [
    {
        id: uuidv4(),
        title: 'кирпичи',
        icon: 'https://cdn-icons-png.freepik.com/512/14524/14524465.png?ga=GA1.1.753315375.1711741126&',
        elements: [
            { id: uuidv4(), name: 'Элемент 1' },
            { id: uuidv4(), name: 'Элемент 2' },
            { id: uuidv4(), name: 'Элемент 3' },
            { id: uuidv4(), name: 'Элемент 4' },
            { id: uuidv4(), name: 'Элемент 5' }
        ]
    },
    {
        id: uuidv4(),
        title: 'брёвна',
        icon: 'https://cdn-icons-png.freepik.com/512/6937/6937220.png?ga=GA1.1.753315375.1711741126&',
        elements: [
            { id: uuidv4(), name: 'Элемент 1' },
            { id: uuidv4(), name: 'Элемент 2' },
            { id: uuidv4(), name: 'Элемент 3' },
            { id: uuidv4(), name: 'Элемент 4' },
            { id: uuidv4(), name: 'Элемент 5' }
        ]
    },
    {
        id: uuidv4(),
        title: 'кран',
        icon: 'https://cdn-icons-png.freepik.com/512/4913/4913512.png?ga=GA1.1.753315375.1711741126&',
        elements: [
            { id: uuidv4(), name: 'Элемент 1' },
            { id: uuidv4(), name: 'Элемент 2' },
            { id: uuidv4(), name: 'Элемент 3' },
            { id: uuidv4(), name: 'Элемент 4' },
            { id: uuidv4(), name: 'Элемент 5' }
        ]
    },
    {
        id: uuidv4(),
        title: 'тачка',
        icon: 'https://cdn-icons-png.freepik.com/512/4851/4851585.png?ga=GA1.1.753315375.1711741126&',
        elements: [
            { id: uuidv4(), name: 'Элемент 1' },
            { id: uuidv4(), name: 'Элемент 2' },
            { id: uuidv4(), name: 'Элемент 3' },
            { id: uuidv4(), name: 'Элемент 4' },
            { id: uuidv4(), name: 'Элемент 5' }
        ]
    }
]

export const useCategories = ({ sortDirection }: Options) => {
    const [categories, setCategories] = useState<ICategory[]>(storageData);
    const [currentSortDirection, setCurrentSortDirection] = useState<SortDirection>(sortDirection);





    const changeSortDirection = (sortDirection: SortDirection) => {
        setCurrentSortDirection(sortDirection);
    };

    const addCategories = (newCategories: ICategory[]) => {
        setCategories(newCategories);
    }

    const addCategory = (category: ICategory) => {
        setCategories(prevState => {
            const newCategories = [...prevState, category];
            return newCategories;
        });
    }

    const editCategory = (editedCategory: ICategory) => {
        setCategories(prevState => {
            const updatedCategories = prevState.map(category => {
                if (category.id !== editedCategory.id) {
                    return category;
                }

                const newCategory = { ...category };
                newCategory.id = editedCategory.id;
                newCategory.title = editedCategory.title;
                newCategory.icon = editedCategory.icon;
                return newCategory;
            });

            return updatedCategories;
        });
    };

    const editElement = (editedElement: IElement) => {
        setCategories(prevState => {
            const updatedCategories = prevState.map(category => {
                const updatedElements = category.elements.map(element => {
                    if (element.id === editedElement.id) {
                        const newElement = { ...element };
                        newElement.id = editedElement.id;
                        newElement.name = editedElement.name
                        return newElement
                    }
                    return element;
                });

                return { ...category, elements: updatedElements };
            });

            return updatedCategories;
        });
    };

    const addElement = (categoryTitle: string, newElement: IElement) => {
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

    const deleteElement = (categoryId: string, elementId: string) => {
        setCategories(prevState => {
            const updatedCategories = prevState.map(category => {
                if (category.id === categoryId) {
                    return {
                        ...category,
                        elements: category.elements.filter(element => element.id !== elementId)
                    };
                }
                return category;
            });
            return updatedCategories;
        });
    }

    return {
        categories,
        addCategories,
        addCategory,
        addElement,
        deleteCategory,
        deleteElement,
        editCategory,
        editElement,
        changeSortDirection,
        sortDirection: currentSortDirection
    };
}