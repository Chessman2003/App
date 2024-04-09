import React from "react";

import './SelectImage.scss';

type Props = {
    droppedImage: string,
    saveDroppedImage: (droppedImage: string) => void
}

export const SelectImage = ({
    droppedImage,
    saveDroppedImage
}: Props) => {

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (e.dataTransfer.files.length > 0 && e.dataTransfer.files[0].type.startsWith('image/')) {
            const file = e.dataTransfer.files[0];
            const reader = new FileReader();
            reader.onload = (event: ProgressEvent<FileReader>) => {
                if (event.target && typeof event.target.result === 'string') {
                    saveDroppedImage(event.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        } else {
            alert('Перетяните изображение!')
        }
    };

    return (
        <div
            id="previewContainer"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
        >
            {droppedImage && <img className='droppedImage' src={droppedImage} />}
        </div>
    );
}