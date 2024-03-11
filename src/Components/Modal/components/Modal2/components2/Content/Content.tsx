import React from 'react';
import './Content.scss';

type ContentProps = {
    children: React.ReactNode;
};

export const Content = ({ children }: ContentProps) => {
    return <div className="modalContent">{children}</div>;
};
