import React, { useState } from "react";
import { SideBarClose } from "../SideBar";
import { SideBarOpen } from "../SideBar";
import { Category } from "../SideBar";
import { Modal } from "../Modal";
import { ModalHeader } from "../Modal";
import { ModalContent } from "../Modal";
import { ModalFooter } from "../Modal";
import { useRootModal } from "../Modal";
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
        }
    }



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
    };






    return (
        <div className="app">
            {!isOpen && (
                <SideBarClose categoriesImage={categories} toggleSidebar={sideBarOpen} addCategories={openModal} />
            )
            }

            {isOpen && (
                <SideBarOpen toggleSideBarOpen={sideBarClose} addCategories={openModal}>
                    {categories.map((category, index) => (
                        <Category key={index} title={category.title} icon={category.icon} />
                    ))}
                </SideBarOpen>
            )}

            {showModal && (
                <Modal onClose={closeModal} modalElement={modalElement}>
                    <ModalHeader>
                        <p className="addCategoryHeader">{`Добавление категории`}</p>
                    </ModalHeader>
                    <ModalContent>
                        <input
                            type="text"
                            placeholder="Название категории"
                            value={newCategoryName}
                            onChange={(e) => setNewCategoryName(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="url"
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

                    </ModalContent>
                    <ModalFooter>
                        <button className="saveCategoryBtn" onClick={handleSave}>{`сохранить`}</button>
                    </ModalFooter>
                </Modal>
            )}

        </div>
    )
}


