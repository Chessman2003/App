import React, { useState } from "react";
import { SideBar } from "../SideBar";
import { Modal } from "../Modal";
import { ModalHeader } from "../Modal";
import { ModalContent } from "../Modal";
import { ModalFooter } from "../Modal";
import { useRootModal } from "../Modal";
import { SideBarType } from "../SideBar/components/types/sideBarType";
import './App.scss';


export const App = () => {
    const [showModal1, setShowModal1] = useState<boolean>(false);
    const [showModal2, setShowModal2] = useState<boolean>(false);

    const [categories, setCategories] = useState<{ title: string, icon: string, elements: string[] }[]>([
        {
            title: 'кирпичи',
            icon: 'https://cdn-icons-png.freepik.com/512/14524/14524465.png?ga=GA1.1.753315375.1711741126&',
            elements: ['Элимент 1', 'Элимент 2', 'Элимент 3', 'Элимент 4', 'Элимент 5']
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

        },])

    const [newCategoryName, setNewCategoryName] = useState<string>('');
    const [droppedImage, setDroppedImage] = useState<string>('');
    const [newElement, setNewElement] = useState<string>('');




    const handleSave = () => {
        if (newCategoryName && droppedImage) {
            const newCategory = { title: newCategoryName, icon: droppedImage, elements: [] };
            setCategories([...categories, newCategory])
            setNewCategoryName('');
            setDroppedImage('');
            setShowModal1(false);
        } else if (newCategoryName) {
            alert(`Вставте иконку новой категории!`);
        } else if (droppedImage) {
            alert(`Введите название новой категории!`);
        } else {
            alert(`Введите название и вставьте иконку для новой категории!`);
        }
    }


    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (e.dataTransfer.files.length > 0 && e.dataTransfer.files[0].type.startsWith('image/')) {
            const file = e.dataTransfer.files[0];
            const reader = new FileReader();
            reader.onload = (event: ProgressEvent<FileReader>) => {
                if (event.target && typeof event.target.result === 'string') {
                    const img = document.createElement("img");
                    img.src = event.target.result as string;
                    img.classList.add('droppedImage');

                    const previewContainer = document.getElementById("previewContainer");
                    if (previewContainer) {
                        previewContainer.innerHTML = "";
                        previewContainer.appendChild(img);
                        setDroppedImage(event.target.result as string);
                    }
                }
            };
            reader.readAsDataURL(file);
        } else {
            alert('Перетяните изображение!')
        }
    };

    const { modalElement } = useRootModal({})

    const openModal1 = () => {
        setShowModal1(true);
    };

    const closeModal1 = () => {
        setShowModal1(false);
        setNewCategoryName('');
        setDroppedImage('');
    };

    const openModal2 = () => {
        setShowModal2(true);
    }

    const closeModal2 = () => {
        setShowModal2(false)
    }

    return (
        <div className="app">

            <SideBar
                type={SideBarType.Close}
                categoriesArray={categories}
                addCategories={openModal1}
                addElements={openModal2}
            />

            {showModal1 && (
                <Modal onClose={closeModal1} modalElement={modalElement}>
                    <ModalHeader>
                        <p className="categoryHeaderText">{`Добавление категории`}</p>
                    </ModalHeader>
                    <ModalContent>
                        <div className="addCategoryContent">
                            <div className="addCategoryName">
                                <p className="categoryNameTitle">{`Название категории`}</p>
                                <input
                                    type="text"
                                    className="categoryTextInput"
                                    value={newCategoryName}
                                    onChange={(e) => setNewCategoryName(e.target.value)}
                                />
                            </div>
                            <div className="addCategoryImage">
                                <p className="categoryNameTitle">{`Иконка`}</p>
                                <div
                                    id="previewContainer"
                                    onDrop={handleDrop}
                                    onDragOver={(e) => e.preventDefault()}
                                ></div>
                            </div>
                        </div>
                    </ModalContent>
                    <ModalFooter>
                        <button className="saveCategoryBtn" onClick={handleSave}>{`сохранить`}</button>
                    </ModalFooter>
                </Modal>
            )}

            {showModal2 && (
                <Modal onClose={closeModal2} modalElement={modalElement}>
                    <ModalHeader>
                        <p className="categoryHeaderText">{`Добавление элеменов категории`}</p>
                    </ModalHeader>
                    <ModalContent>
                        <div className="addElementContent">
                            <div className="addCategoryName">
                                <p className="categoryNameTitle">{`Название элимента`}</p>
                                <input
                                    type="text"
                                    className="categoryTextInput"
                                    value={newElement}
                                    onChange={(e) => setNewElement(e.target.value)}
                                />
                            </div>
                        </div>
                    </ModalContent>
                </Modal>
            )}
        </div>
    )
}


