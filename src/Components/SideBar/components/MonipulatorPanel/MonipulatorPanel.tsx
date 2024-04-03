import React from "react";
import { IconOpen } from "../../../icons/icons";
import { MonipulatorPanelType } from "../types/MonipulatorPanelType";
import './MonipulatorPanel.scss'

type Props = {
    onClick: () => void;
    type: MonipulatorPanelType
}

export const MonipulatorPanel = ({
    onClick,
    type
}: Props) => {
    if (type == MonipulatorPanelType.Close) {
        return (
            <div className="modeMonipulatorPanelClose">
                <button onClick={onClick}>
                    <img className="iconOpen" src={IconOpen.default} />
                </button>
            </div>
        );
    } else if (type == MonipulatorPanelType.Open) {
        return (
            <div className="modeMonipulatorPanelOpen">
                <button onClick={onClick}>
                    <img className="iconOpen" src={IconOpen.default} />
                    <p className="modeMonipulatorPanelTittle">{`Закрыть`}</p>
                </button>
            </div>
        );
    }
}