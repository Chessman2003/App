import React from 'react';

type ContentProps = {
    children: React.ReactNode;
};

export const Footer: React.FC<ContentProps> = ({ children }) => {
    return (
        <div className="modalFooter">
            {children}
        </div>
    );
};

