import React from "react";
import './CategoryItem.scss';
import { SideBarType } from "../types/sideBarType";

type Props = {
    type: SideBarType
    icon: string
    title: string
    elements?: string[]
}

const classNames = (cls: string, props = {}, additionals: string[] = []) => {
    let propsNames = '';
    Object.entries(props).forEach(element => {
        if (element[1] == true) {
            propsNames += `${element[0]}`
        }
    });

    return `${cls} ${propsNames} ${additionals.join(' ')}`;
}

export const CategoryItem = ({
    elements,
    icon,
    title,
    type
}: Props) => {
    const isClosed = type == SideBarType.Close;
    return (
        <div className={classNames('categoryItem', {
            closed: isClosed,
            opened: !isClosed
        })}>
            <div className="header">
                <img className='categoriesImage' src={icon} alt={title} />
                {!isClosed &&
                    <>
                        <p className="categoryTittle">{title}</p>
                        <div className="elements">
                            {elements}
                        </div>
                    </>}
            </div>
        </div>
    )
}
