/*
import React, { useState, useEffect, useRef } from "react";
import { Modal } from "../Modal";
import { ModalHeader } from "../Modal";
import { ModalContent } from "../Modal";
import { ModalFooter } from "../Modal";
import { DropdownPanel } from "../DropdownPanel/DropdownPanel";
import { ButtonPanel } from "../ButtonPanel/ButtonPanel";
import { CheckboxPanel } from "../CheckboxPanel/CheckboxPanel";
import './ModalPage.scss'
import { useRootModal } from "../Modal/lib/hooks/useRootModal";

export const ModalPage = () => {

    const modalRef = useRef<HTMLElement | null>(null);

    const [isModalActive1, setIsModalActive1] = useState(false);
    const [isModalActive2, setIsModalActive2] = useState(false);
    const [isModalActive3, setIsModalActive3] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const components = [<DropdownPanel />, <CheckboxPanel />]

    const toggleComponents = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length)
    }

    const { modalElement } = useRootModal({});

    const handleModalOpen1 = () => {
        setIsModalActive1(true);
    };

    const handleModalClose1 = () => {
        setIsModalActive1(false);
    };

    const handleModalOpen2 = () => {
        setIsModalActive2(true);

    };

    const handleModalClose2 = () => {
        setIsModalActive2(false);

    };

    const handleModalOpen3 = () => {
        setIsModalActive3(true);

    };

    const handleModalClose3 = () => {
        setIsModalActive3(false);

    };



    return (
        <div className='ModalPage'>
            <div className={(isModalActive1 || isModalActive2 || isModalActive3) ? 'appContent modalOpen' : 'appContent'}>
                <h1>Modal component</h1>
                <div className="buttons">
                    <button className="buttonOpenModal" type="button" onClick={handleModalOpen1}>
                        open modal 1
                    </button>
                    <button className="buttonOpenModal" type="button" onClick={handleModalOpen2}>
                        open modal 2
                    </button>
                    <button className="buttonOpenModal" type="button" onClick={handleModalOpen3}>
                        open modal 3
                    </button>
                </div>
            </div>

            {isModalActive1 && (
                <div className="modalWrapper">
                    <Modal onClose={handleModalClose1} modalElement={modalElement}>
                        <ModalHeader>
                            <h2>Dropdown</h2>
                        </ModalHeader>
                        <ModalContent>
                            {() => {
                                return <DropdownPanel />
                            }}
                        </ModalContent>
                        <ModalFooter>
                            <ButtonPanel />
                        </ModalFooter>
                    </Modal>
                </div>
            )}

            {isModalActive2 && (
                <div className="modalWrapper">
                    <Modal onClose={handleModalClose2} modalElement={modalElement}>

                        <ModalContent>
                            {() => {
                                return <CheckboxPanel />
                            }}
                        </ModalContent>
                        <ModalFooter>
                            <ButtonPanel />
                        </ModalFooter>
                    </Modal>
                </div>
            )}

            {isModalActive3 && (
                <div className="modalWrapper">
                    <Modal onClose={handleModalClose3} modalElement={modalElement}>
                        <ModalHeader>
                            <h2>Little Big</h2>
                        </ModalHeader>
                        <ModalContent>
                            {() => {
                                return components[currentIndex];
                            }}
                        </ModalContent>
                        <ModalFooter>
                            <button className="changeButton" onClick={toggleComponents}>Litle Big</button>
                        </ModalFooter>
                    </Modal>
                </div>
            )}

        </div>


    );
}
*/