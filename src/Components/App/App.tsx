import React, { useState } from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import './App.scss'

export const App = () => {
    const [checkbox1, setCheckbox1] = useState<boolean>((Math.random()*100)%100 > 50 ? true : false);
    const [checkbox2, setCheckbox2] = useState<boolean>((Math.random()*100)%100 > 50 ? true : false);
    const [checkbox3, setCheckbox3] = useState<boolean>((Math.random()*100)%100 > 50 ? true : false);
    const [checkbox4, setCheckbox4] = useState<boolean>((Math.random()*100)%100 > 50 ? true : false);
    const [checkbox5, setCheckbox5] = useState<boolean>((Math.random()*100)%100 > 50 ? true : false);
    const [checkbox6, setCheckbox6] = useState<boolean>((Math.random()*100)%100 > 50 ? true : false);
    const [checkbox7, setCheckbox7] = useState<boolean>((Math.random()*100)%100 > 50 ? true : false);
    return (
        <div className="inputCheckboxWrapper">
            <div className="cantainer">
                <div className="row">
                    <Checkbox text="Checkbox 1" value={checkbox1} onChange={(value)=>{setCheckbox1(value)}}/>
                    <Checkbox text="Checkbox 2" value={checkbox2} onChange={(value)=>{setCheckbox2(value)}}/>
                    <Checkbox text="Checkbox 3" value={checkbox3} onChange={(value)=>{setCheckbox3(value)}}/>
                </div>
                <div className="row">
                    <Checkbox text="Checkbox 4"  value={checkbox4} onChange={(value)=>{setCheckbox4(value)}}/>
                    <Checkbox text="Checkbox 5"  value={checkbox5} onChange={(value)=>{setCheckbox5(value)}}/>  
                </div>
                <div className="row">
                    <Checkbox text="Checkbox 6" value={checkbox6} onChange={(value)=>{setCheckbox6(value)}}/>
                    <Checkbox text="Checkbox 7" value={checkbox7} onChange={(value)=>{setCheckbox7(value)}}/>
                </div>
            </div>
        </div>
    )
}