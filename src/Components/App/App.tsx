import React from "react";
import { InputCheckboxComponent } from "../InputCheckboxComponent/InputCheckboxComponent";
import './App.scss'

export const App = () => {
    return (
        <div className="inputCheckboxWrapper">
            <div className="cantainer">
                <div className="row">
                    <InputCheckboxComponent text="Checkbox"/>
                    <InputCheckboxComponent text="Checkbox"/>
                    <InputCheckboxComponent text="Checkbox"/>
                </div>
                <div className="row">
                    <InputCheckboxComponent text="Checkbox"/>
                    <InputCheckboxComponent text="Checkbox"/>  
                </div>
                <div className="row">
                    <InputCheckboxComponent text="Checkbox"/>
                    <InputCheckboxComponent text="Checkbox"/>
                </div>
            </div>
        </div>
    )
}