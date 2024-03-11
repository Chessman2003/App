import React, { useState } from "react";
import { Modal } from "../Modal/components/Modal2/Modal2";
import { Header } from "../Modal/components/Modal2/components2/Header/Header";
import { Content } from "../Modal/components/Modal2/components2/Content/Content";
import { Footer } from "../Modal/components/Modal2/components2/Footer/Footer";
import { DropdownPanel } from "../DropdownPanel/DropdownPanel";
import { ButtonPanel } from "../ButtonPanel/ButtonPanel";
import { CheckboxPanel } from "../CheckboxPanel/CheckboxPanel";
import './App.scss'

export const App = () => {
    const [isModalActive1, setIsModalActive1] = useState(false);
    const [isModalActive2, setIsModalActive2] = useState(false);

    const handleModalOpen1 = () => {
        setIsModalActive1(true)
    };

    const handleModalClose1 = () => {
        setIsModalActive1(false)
    };

    const handleModalOpen2 = () => {
        setIsModalActive2(true)
    };

    const handleModalClose2 = () => {
        setIsModalActive2(false)
    };


    return (
        <div className="App">
            <h1>Modal component</h1>
            <div className="buttons">
                <button className="buttonOpenModal" type="button" onClick={handleModalOpen1}>
                    open modal 1
                </button>
                <button className="buttonOpenModal" type="button" onClick={handleModalOpen2}>
                    open modal 2
                </button>
            </div>

            {isModalActive1 && (
                <div className="modalWrapper">
                    <Modal onClick={handleModalClose1}>
                        <Header>
                            <h2>Dropdown</h2>
                        </Header>
                        <Content>
                            <DropdownPanel />
                        </Content>
                        <Footer>
                            <ButtonPanel />
                        </Footer>
                    </Modal>
                </div>
            )}

            {isModalActive2 && (
                <div className="modalWrapper">
                    <Modal onClick={handleModalClose2}>
                        <Header>
                            <h2>Dropdown</h2>
                        </Header>
                        <Content>
                            <CheckboxPanel />
                        </Content>
                    </Modal>
                </div>
            )}

        </div>

    );
}

