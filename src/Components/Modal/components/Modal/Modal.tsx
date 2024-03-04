import React, { useEffect, useState, useCallback, useRef } from "react";
import { Portal, createContainer } from "../Portal/Portal";
import { MouseEventHandler } from 'react';
import './Modal.scss';

export type ButtonProps = {
    text: string,
    className: string,
    onClick: () => void
}

type Props = {
    title: string,
    onClose?: () => void,
    footerButtons?: ButtonProps[],
    children: React.ReactNode
};

const modalContainerId = 'modalContainerId';

export const Modal = ({ onClose, title, footerButtons, children }: Props) => {
    const [mounted, setMounted] = useState(false);
    
    const rootRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        //createContainer({ id: modalContainerId });
        setMounted(true);

        return () => {
            setMounted(false);
        }
    }, []);
    
    const handleClose: MouseEventHandler<HTMLButtonElement> =
        useCallback(() => {
            onClose?.();
        }, [onClose]);

    const handleWrapperClick = (event: MouseEvent) => {
        if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
            onClose?.();
        }
    };

    useEffect(() => {
        window.addEventListener("click", handleWrapperClick);
        return () => {
            window.removeEventListener("click", handleWrapperClick);
        };
    }, [onClose]);


    return (
        mounted
            ? (
                <Portal id={modalContainerId}>
                    <div className='modalWrapper' ref={rootRef}>
                        <div className="header">
                            <p className="title">{title}</p>
                            <button
                                className='closeButton'
                                onClick={handleClose}
                            >
                                x
                            </button>
                        </div>
                        <div className="content">
                            {children}
                        </div>
                        <div className="footer">
                            {footerButtons && footerButtons.map((button, index) => (
                                <button className={button.className} key={index} onClick={button.onClick}>{button.text}</button>
                            ))}
                        </div>

                    </div>
                </Portal>
            )
            : null
    );
};
