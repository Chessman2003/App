import React from 'react';
import './Footer.scss';

type Props = {
    children: React.ReactNode;
};

export const Footer = ({ children }: Props) => {
    return <div className="modalFooter">{children}</div>;
};
