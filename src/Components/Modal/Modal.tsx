import React, { ReactElement, ReactPortal } from "react";
import { createPortal } from "react-dom";
import './Modal.scss';

type Modal2Props = {
    modalElement: HTMLElement | null
    children: JSX.Element[]
    onClose: () => void
}

export const Modal = ({
    modalElement,
    children, onClose
}: Modal2Props) => {
    if (!modalElement) {
        console.error('root modal id not found');
        return;
    }



    return createPortal(
        (
            <div className="modal">
                <button className="modalClose" onClick={onClose}>x</button>
                {children}
            </div>
        ), modalElement);


};




