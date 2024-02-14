import React, { useState } from "react";
import { Dropdown } from "../Dropdown/Dropdown"
import './App.scss'



export const App = () => {

    return (
        <div>
            <h1>Мое приложение</h1>
            <Dropdown options={
                [
                    { label: 'Опция 1', value: 'option1' },
                    { label: 'Опция 2', value: 'option2' },
                    { label: 'Опция 3', value: 'option3' },
                ]
            } />
        </div>
    );
}