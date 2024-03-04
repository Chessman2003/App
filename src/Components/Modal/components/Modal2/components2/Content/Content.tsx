import React from 'react';

type ContentProps = {
    children: React.ReactNode;
};

export const Content: React.FC<ContentProps> = ({ children }) => {
    return (
        <div className="modal-content">
            {children}
        </div>
    );
};


