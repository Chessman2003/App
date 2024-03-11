import React from "react";
import './Header.scss';


type HeaderProps = {
    children: React.ReactNode,
}

export const Header = ({ children }: HeaderProps) => {
    return <div className="modalHeader">{children}</div>;
};