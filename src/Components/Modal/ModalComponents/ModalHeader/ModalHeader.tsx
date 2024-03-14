import React from "react";
import './ModalHeader.scss';


type Props = {
    children: React.ReactNode,
}

export const ModalHeader = ({ children }: Props) => {
    return <div className="modalHeader">{children}</div>;
};