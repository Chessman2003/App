import React, { useState } from 'react';
import './ModalContent.scss';



type ModalContentProps = {
    children: React.ReactNode
}

export const ModalContent = ({ children }: ModalContentProps) => {
    return <div className="ModalContent">{children}</div>
}