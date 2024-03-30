import React from "react";
import './ModalHeader.scss';


type Props = {
    text: string,
}

export const ModalHeader = ({ text }: Props) => {
    return <div className="modalHeader">{text}</div>;
};