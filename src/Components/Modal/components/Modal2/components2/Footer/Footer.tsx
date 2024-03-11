import React from 'react';
import './Footer.scss';

type ContentProps = {
    children: React.ReactNode;
};

export const Footer = ({ children }: ContentProps) => {
    return <div className="modalFooter">{children}</div>;
};
