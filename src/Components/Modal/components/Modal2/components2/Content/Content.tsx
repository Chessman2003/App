import React from 'react';
import './Content.scss';

type Props = {
    children: React.ReactNode;
};

export const Content = ({ children }: Props) => {
    return <div className="modalContent">{children}</div>;
};
