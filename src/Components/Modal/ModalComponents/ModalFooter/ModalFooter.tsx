import React from 'react';
import './ModalFooter.scss';

type Props = {
    children: React.ReactNode;
};

export const ModalFooter = ({ children }: Props) => {
    return <div className="modalFooter">{children}</div>;
};
