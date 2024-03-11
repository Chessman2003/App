import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import './Modal2.scss';

type Modal2Props = {
    modalElement: HTMLElement | null
    children: React.ReactNode
    onClick: () => void
}

export const Modal = ({
    modalElement,
    children, onClick
}: Modal2Props) => {
    if (!modalElement) {
        console.error('root modal id not found');
        return;
    }
    return createPortal(
        (
            <div className="modal">
                <button className="modalClose" onClick={onClick}>x</button>
                {children}
            </div>
        ), modalElement);
};




