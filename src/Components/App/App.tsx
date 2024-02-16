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
                    { label: 'Опция 5', value: 'option2', disabled: true },
                    { label: 'Опция 3 при наличии', value: 'option3' },
                    { label: 'Опция 2', value: 'option4' },
                    { label: 'Опция 5', value: 'option5' },
                    { label: 'Опция 6', value: 'option6' },
                    { label: 'Опция 7', value: 'option7', disabled: true },
                    { label: 'Опция 123', value: 'option8' },
                    { label: 'Опция 9', value: 'option9' },
                    { label: 'Опция 10 ', value: 'option10', disabled: true },
                    { label: 'Опция 11', value: 'option11' },
                    { label: 'Опция 12', value: 'option12' },
                ]
            } />
        </div>
    );
}