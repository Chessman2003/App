import React from 'react';
import './ModalContent.scss';

type Props = {
    children: React.ReactNode;
};

export const ModalContent = ({ children }: Props) => {
    return <div className="modalContent">{children}</div>;
};
