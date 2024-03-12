import React, { useState } from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import './CheckboxPanel.scss'

export const CheckboxPanel = () => {
    const [checkbox1, setCheckbox1] = useState<boolean>((Math.random() * 100) % 100 > 50 ? true : false);
    const [checkbox2, setCheckbox2] = useState<boolean>((Math.random() * 100) % 100 > 50 ? true : false);
    const [checkbox3, setCheckbox3] = useState<boolean>((Math.random() * 100) % 100 > 50 ? true : false);
    const [checkbox4, setCheckbox4] = useState<boolean>((Math.random() * 100) % 100 > 50 ? true : false);
    const [checkbox5, setCheckbox5] = useState<boolean>((Math.random() * 100) % 100 > 50 ? true : false);
    const [checkbox6, setCheckbox6] = useState<boolean>((Math.random() * 100) % 100 > 50 ? true : false);
    const [checkbox7, setCheckbox7] = useState<boolean>((Math.random() * 100) % 100 > 50 ? true : false);
    const [checkbox8, setCheckbox8] = useState<boolean>((Math.random() * 100) % 100 > 50 ? true : false);
    const [checkbox9, setCheckbox9] = useState<boolean>((Math.random() * 100) % 100 > 50 ? true : false);
    return (
        <div className="inputCheckboxWrapper">


            <Checkbox text="Checkbox 1" value={checkbox1} onChange={(value) => { setCheckbox1(value) }} />
            <Checkbox text="Checkbox 2" value={checkbox2} onChange={(value) => { setCheckbox2(value) }} />
            <Checkbox text="Checkbox 3" value={checkbox3} onChange={(value) => { setCheckbox3(value) }} />


            <Checkbox text="Checkbox 4" value={checkbox4} onChange={(value) => { setCheckbox4(value) }} />
            <Checkbox text="Checkbox 5" value={checkbox5} onChange={(value) => { setCheckbox5(value) }} />
            <Checkbox text="Checkbox 6" value={checkbox6} onChange={(value) => { setCheckbox6(value) }} />

            <Checkbox text="Checkbox 7" value={checkbox7} onChange={(value) => { setCheckbox7(value) }} />
            <Checkbox text="Checkbox 8" value={checkbox8} onChange={(value) => { setCheckbox8(value) }} />
            <Checkbox text="Checkbox 9" value={checkbox9} onChange={(value) => { setCheckbox9(value) }} />


        </div>
    )
}