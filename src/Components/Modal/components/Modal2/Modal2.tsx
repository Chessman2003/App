import React from "react";
import { createPortal } from "react-dom";
import './Modal2.scss';



type Modal2Props = {
    children: React.ReactNode,
    onClick: () => void
}

type ChildrenProps = {
    children: React.ReactNode
}

const modalRoot: HTMLElement | null = document.getElementById("modalRoot");

export const Modal = ({ children, onClick }: Modal2Props) => {
    if (!modalRoot) {
        return null
    }

    const modalElement = (
        <div className="modal">
            <button className="modalClose" onClick={onClick}>x</button>
            {children}
        </div>
    );

    return createPortal(modalElement, modalRoot);
};




