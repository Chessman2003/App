import React from "react";
import './Modal2Header.scss';


type Props = {
    children: React.ReactNode,
}

export const Header = ({ children }: Props) => {
    return <div className="modalHeader">{children}</div>;
};