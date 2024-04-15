import React, { useState } from "react";

import { ICategory, SortDirection, IElement } from '../..'

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
                elements: [
                    { id: '1', name: 'Элемент 1' },
                    { id: '2', name: 'Элемент 2' },
                    { id: '3', name: 'Элемент 3' },
                    { id: '4', name: 'Элемент 4' },
                    { id: '5', name: 'Элемент 5' }
                ]
            },
            {
                id: '2',
                title: 'брёвна',
                icon: 'https://cdn-icons-png.freepik.com/512/6937/6937220.png?ga=GA1.1.753315375.1711741126&',
                elements: [
                    { id: '1', name: 'Элемент 1' },
                    { id: '2', name: 'Элемент 2' },
                    { id: '3', name: 'Элемент 3' },
                    { id: '4', name: 'Элемент 4' },
                    { id: '5', name: 'Элемент 5' }
                ]
            },
            {
                id: '3',
                title: 'кран',
                icon: 'https://cdn-icons-png.freepik.com/512/4913/4913512.png?ga=GA1.1.753315375.1711741126&',
                elements: [
                    { id: '1', name: 'Элемент 1' },
                    { id: '2', name: 'Элемент 2' },
                    { id: '3', name: 'Элемент 3' },
                    { id: '4', name: 'Элемент 4' },
                    { id: '5', name: 'Элемент 5' }
                ]
            },
            {
                id: '4',
                title: 'тачка',
                icon: 'https://cdn-icons-png.freepik.com/512/4851/4851585.png?ga=GA1.1.753315375.1711741126&',
                elements: [
                    { id: '1', name: 'Элемент 1' },
                    { id: '2', name: 'Элемент 2' },
                    { id: '3', name: 'Элемент 3' },
                    { id: '4', name: 'Элемент 4' },
                    { id: '5', name: 'Элемент 5' }
                ]
            }
        ]);
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

    const editCategory = (editedCategory: ICategory) => {
        setCategories(prevState => {
            const updatedCategories = prevState.map(category => {
                if (category.id === editedCategory.id) {
                    return {
                        ...category,
                        id: category.id,
                        title: editedCategory.title,
                        icon: editedCategory.icon
                    };
                } else {
                    return category;
                }
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
        deleteCategory,
        deleteElement,
        editCategory
    };
}