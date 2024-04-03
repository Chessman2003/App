import React from "react";
import { IconOpen } from "../../../icons/icons";
import { MonipulatorPanelType } from "../types/MonipulatorPanelType";
import { SideBarType } from '../types/sideBarType';
import './MonipulatorPanel.scss';

type Props = {
    onClick: () => void;
    type: SideBarType
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

export const MonipulatorPanel = ({
    onClick,
    type
}: Props) => {
    const isClosed = type != SideBarType.Open;
    return (
        <div className={classNames('modeMonipulatorPanel', {
            closed: isClosed,
            opened: !isClosed
        }, ['special'])}>
            <button onClick={onClick}>
                <img className="monipulatorIcon" src={IconOpen.default} />
                {!isClosed && <p>{`Закрыть`}</p>}
            </button>
        </div>
    );
}