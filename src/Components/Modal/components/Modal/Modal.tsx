import React, { ReactElement, ReactPortal } from "react";
import { createPortal } from "react-dom";
import './Modal.scss';

type ModalProps = {
    modalElement: HTMLElement | null
    children: React.ReactNode
    onClose: () => void
}

export const Modal = ({
    modalElement,
    children, onClose
}: ModalProps) => {
    if (!modalElement) {
        console.error('root modal id not found');
        return;
    }



    return createPortal(
        (
            <div className="modalOverlay">
                <div className="modal">
                    <button className="modalClose" onClick={onClose}>x</button>
                    {children}
                </div>
            </div>
        ), modalElement);


};




