import React, { useCallback } from "react";
import { MouseEventHandler } from 'react';

type HeaderProps = {
    children: React.ReactNode,
    onClose: () => void
}

export const Header = ({ children, onClose }: HeaderProps) => {
    return (
        <div className="modalHeader">
            <div className="children">
                {children}
            </div>
            <button className="closeButton" onClick={onClose}>x</button>
        </div>
    )
}