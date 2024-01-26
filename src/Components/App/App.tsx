import React, { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import {Colors} from '../../types/colors';
import './App.scss';
import {ButtonType} from '../../types/buttonType';

import {Icon1} from '../icons/icons'

export const App = () => {

    const [colorBackground, setColorBackground] = useState<Colors>(Colors.AlizarinCrimson);
    const [colorText, setColorText] = useState<Colors>(Colors.Blue);
    const [disabled, setDisabled] = useState<boolean>(true);
    const [text, setText] = useState<string>("Клик!");
    const [icon, setIcon] = useState<string>(Icon1.default);

    const handleClick = () => {
        if (colorBackground == Colors.AlizarinCrimson) {
            setColorBackground(Colors.Blue)
        } else if (colorBackground == Colors.Blue) {
            setColorBackground(Colors.Green)
        } else if (colorBackground == Colors.Green) {
            setColorBackground(Colors.Red)
        } else {
            setColorBackground(Colors.AlizarinCrimson)
        } 
    }
    return (
        <div>
            <Button 
                onClick={handleClick} 
                colorBackground={colorBackground} 
                disabled={disabled} 
                text={text} 
                colorText={colorText} 
                type={ButtonType.Text}
            />

            <Button     
                onClick={handleClick} 
                colorBackground={colorBackground} 
                disabled={false} 
                icon={icon}
                type={ButtonType.Icon}
            />
        </div>
    );
}