import React, { useState } from "react";
import { SideBar } from "../SideBar";
import { Category } from "../SideBar";
import { Modal } from "../Modal";
import { ModalHeader } from "../Modal";
import { ModalContent } from "../Modal";
import { ModalFooter } from "../Modal";
import { useRootModal } from "../Modal";
import { SideBarType } from "../SideBar/components/types/sideBarType";
import './App.scss'
import { url } from "inspector";


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
        const file = e.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event: ProgressEvent<FileReader>) => {
                if (event.target && typeof event.target.result === 'string') {
                    setDroppedImage(event.target.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };



    const { modalElement } = useRootModal({})



    const sideBarOpen = () => {
        setIsOpen(true);
    };

    const sideBarClose = () => {
        setIsOpen(false);
    };

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
                                <input
                                    type="text"
                                    className="categoryDrugInput"
                                    value={droppedImage}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDroppedImage(e.target.value)}
                                    onDrop={(e: React.DragEvent<HTMLInputElement>) => {
                                        e.preventDefault();
                                        const file = e.dataTransfer.files[0];
                                        const reader = new FileReader();
                                        reader.onload = (event: ProgressEvent<FileReader>) => {
                                            setDroppedImage(event.target?.result as string);
                                        };
                                        reader.readAsDataURL(file);
                                    }}
                                    onDragOver={(e: React.DragEvent<HTMLInputElement>) => e.preventDefault()}
                                />
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


