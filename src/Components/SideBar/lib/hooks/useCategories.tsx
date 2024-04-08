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
                title: 'кирпичи',
                icon: 'https://cdn-icons-png.freepik.com/512/14524/14524465.png?ga=GA1.1.753315375.1711741126&',
                elements: ['Элемент 1', 'Элимент 2', 'Элимент 3', 'Элимент 4', 'Элимент 5']
            },
            {
                title: 'кирпичи',
                icon: 'https://cdn-icons-png.freepik.com/512/6937/6937220.png?ga=GA1.1.753315375.1711741126&',
                elements: ['Элимент 1', 'Элимент 2', 'Элимент 3', 'Элимент 4', 'Элимент 5']
            },
            {
                title: 'кирпичи',
                icon: 'https://cdn-icons-png.freepik.com/512/4913/4913512.png?ga=GA1.1.753315375.1711741126&',
                elements: ['Элимент 1', 'Элимент 2', 'Элимент 3', 'Элимент 4', 'Элимент 5']
            },
            {
                title: 'кирпичи',
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

    return {
        categories,
        addCategories,
        addCategory,
        initCategories
    };
}