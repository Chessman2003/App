import React from 'react';

type ContentProps = {
    children: React.ReactNode;
};

export const Content = ({ children }: ContentProps) => {
    return (
        <div className="modal-content">
            {children}
        </div>
    );
};


