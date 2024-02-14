import React, { useState } from "react";
import { Dropdown, } from "../Dropdown/Dropdown"
import './App.scss'



export const App = () => {

    return (
        <div>
            <h1>Dropdown component</h1>
            <Dropdown options={
                [
                    { label: 'Опция 1', value: 'option1' },
                    { label: 'Опция 2', value: 'option2', disabled: true },
                    { label: 'Опция 3 при наличии', value: 'option3' },
                    { label: 'Опция 4', value: 'option1' },
                    { label: 'Опция 5', value: 'option1' },
                    { label: 'Опция 6', value: 'option1' },
                    { label: 'Опция 7', value: 'option1', disabled: true },
                    { label: 'Опция 8', value: 'option1' },
                    { label: 'Опция 9', value: 'option1' },
                    { label: 'Опция 10 ', value: 'option1', disabled: true },
                    { label: 'Опция 11', value: 'option1' },
                    { label: 'Опция 12', value: 'option1' },
                ]
            } />
        </div>
    );
}