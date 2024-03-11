import React, { useState } from "react";
import { Modal, ButtonProps } from "../Modal/components/Modal/Modal";
import './ModalPage.scss'

export const ModalPage = () => {
    const [isModalActive1, setIsModalActive1] = useState(false);
    const [isModalActive2, setIsModalActive2] = useState(false);
    const [isModalActive3, setIsModalActive3] = useState(false);


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

    const handleModalOpen3 = () => {
        setIsModalActive3(true)
    };

    const handleModalClose3 = () => {
        setIsModalActive3(false)
    };

    const handleButton1Click = () => {
        alert('Button 1 is clicked')
    }

    const handleButton2Click = () => {
        alert('Button 2 is clicked')
    }

    const footerButtons: ButtonProps[] = [
        {
            text: 'Button 1',
            onClick: handleButton1Click,
            className: 'button1'
        },
        {
            text: 'Button 2',
            onClick: handleButton2Click,
            className: 'button2'
        }
    ]
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
                <button className="buttonOpenModal" type="button" onClick={handleModalOpen3}>
                    open modal 3
                </button>
            </div>

            {isModalActive1 && (
                <Modal title='Modal window' onClose={handleModalClose1} footerButtons={footerButtons}>
                    ЛЬ
                </Modal>
            )}

            {isModalActive2 && (
                <Modal title='Modal window' onClose={handleModalClose2} footerButtons={footerButtons}>
                    wefwe
                </Modal>
            )}

            {isModalActive3 && (
                <Modal title='Modal window' onClose={handleModalClose3} footerButtons={footerButtons}>
                    <p className="text">  fesf уаыуаыуа уыаыуауfesfsf  уыаыуауfesfsfesf уаыуаыуа уыаыуау
                        fwwefewf wefwefw weffewfew weffewf wefewfwe fewfewef wefwefew
                        wefewfew ewfwefew fewfwefe efwweef wfwefwe weffwefw wefweewf
                        wfwefwef wefwfew fewfewwe fwfewe fwefwef ewfwefwe fewfew fewfew
                        ergerg ergerg ergerg egrreg  efsfes esfse  esfesfe sef sefsef sefsefs
                        sfesfes esfes sefse sef
                    </p>
                </Modal>
            )}
        </div>

    );
}

