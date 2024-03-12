import React, { useState, useEffect, useRef } from "react";
import { Modal2 } from "../Modal/components/Modal2/Modal2";
import { Header } from "../Modal/components/Modal2/components2/Modal2Header/Modal2Header";
import { Content } from "../Modal/components/Modal2/components2/Modal2Content/Modal2Content";
import { Footer } from "../Modal/components/Modal2/components2/Modal2Footer/Modal2Footer";
import { DropdownPanel } from "../DropdownPanel/DropdownPanel";
import { ButtonPanel } from "../ButtonPanel/ButtonPanel";
import { CheckboxPanel } from "../CheckboxPanel/CheckboxPanel";
import './App.scss'
import { useRootModal } from "../Modal/lib/hooks/useRootModal";

export const App = () => {

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
        <div className='App'>
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
                    <Modal2 onClick={handleModalClose1} modalElement={modalElement} className={isModalActive1 ? 'mod' : ''}>
                        <Header>
                            <h2>Dropdown</h2>
                        </Header>
                        <Content>
                            <DropdownPanel />
                        </Content>
                        <Footer>
                            <ButtonPanel />
                        </Footer>
                    </Modal2>
                </div>
            )}

            {isModalActive2 && (
                <div className="modalWrapper">
                    <Modal2 onClick={handleModalClose2} modalElement={modalElement} className={isModalActive2 ? 'mod' : ''}>

                        <Content>
                            <CheckboxPanel />
                        </Content>
                        <Footer>
                            <ButtonPanel />
                        </Footer>
                    </Modal2>
                </div>
            )}

            {isModalActive3 && (
                <div className="modalWrapper">
                    <Modal2 onClick={handleModalClose3} modalElement={modalElement} className={isModalActive3 ? 'mod' : ''}>
                        <Header>
                            <h2>Little Big</h2>
                        </Header>
                        <Content>
                            {components[currentIndex]}
                        </Content>
                        <Footer>
                            <button className="changeButton" onClick={toggleComponents}>Litle Big</button>
                        </Footer>
                    </Modal2>
                </div>
            )}
        </div>


    );
}


