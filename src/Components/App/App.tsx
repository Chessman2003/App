import React from "react";
import { Button } from "../Button/Button";
import icon from '../icons/icon1.png'
import './App.scss';




export const App = () => {
    return (
        <div>
            <Button onClick={() => console.log('Button is ckicked')} color="red" disabled={1} text="Клик!" textColor="yellow" />
        </div>
    );
}