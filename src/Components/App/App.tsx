import React, { useState } from "react";
import { SideBar } from "../SideBar";
import { Modal } from "../Modal";
import { ModalHeader } from "../Modal";
import { ModalContent } from "../Modal";
import { ModalFooter } from "../Modal";
import { useRootModal } from "../Modal";
import { SideBarType } from "../SideBar/components/types/sideBarType";
import './App.scss'


export const App = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [categories, setCategories] = useState<{ title: string, icon: string }[]>([
        { title: 'кирпичи', icon: 'https://cdn-icons-png.freepik.com/512/14524/14524465.png?ga=GA1.1.753315375.1711741126&' },
        { title: 'кирпичи', icon: 'https://cdn-icons-png.freepik.com/512/6937/6937220.png?ga=GA1.1.753315375.1711741126&' },
        { title: 'кирпичи', icon: 'https://cdn-icons-png.freepik.com/512/4913/4913512.png?ga=GA1.1.753315375.1711741126&' },
        { title: 'кирпичи', icon: 'https://cdn-icons-png.freepik.com/512/4851/4851585.png?ga=GA1.1.753315375.1711741126&' },])

    const [newCategoryName, setNewCategoryName] = useState<string>('');
    const [droppedImage, setDroppedImage] = useState<string>('');


    const handleSave = () => {
        if (newCategoryName && droppedImage) {
            const newCategory = { title: newCategoryName, icon: droppedImage };
            setCategories([...categories, newCategory])
            setNewCategoryName('');
            setDroppedImage('');
            setShowModal(false);
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


    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setNewCategoryName('');
        setDroppedImage('');
    };







    return (
        <div className="app">
            {!isOpen && (
                <SideBar type={SideBarType.Close} categoriesArray={categories} addCategories={openModal} />
            )
            }

            {isOpen && (
                <SideBar type={SideBarType.Open} categoriesArray={categories} addCategories={openModal} />
            )}

            {showModal && (
                <Modal onClose={closeModal} modalElement={modalElement}>
                    <ModalHeader>
                        <p className="addCategoryHeader">{`Добавление категории`}</p>
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

        </div>
    )
}


