import React from "react";
import { IconOpen } from "../../../icons/icons";

type Props = {
    onClick: () => void
}

export const MonipulatorPanel = ({
    onClick
}: Props) => {
    return (
        <div className="modeMonipulatorPanel">
            <button onClick={onClick}>
                <img className="iconOpen" src={IconOpen.default} />
            </button>
        </div>
    );
}