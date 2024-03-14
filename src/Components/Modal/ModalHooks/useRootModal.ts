import React, { useEffect, useRef } from "react";

type Options = {
    rootModalId?: string
}

export const useRootModal = ({
    rootModalId = 'modalRoot'
}:Options) => {
    const modalRef = useRef<HTMLElement | null>(null);

    useEffect(()=>{
        if (modalRef) {
            modalRef.current = document.getElementById(rootModalId);
        }
    }, [rootModalId]);

    return {
        modalElement: modalRef.current
    };
}