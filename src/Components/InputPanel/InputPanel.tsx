import React, { useEffect, useState } from "react";
import { Input } from "../InputTextComponent/InputTextComponent";
import './InputPanel.scss';
import { TypeIcon } from '../InputTextComponent/InputTextComponent';


export const InputPanel = () => {
    const [inputText1, setInputText1] = useState('');
    const [hintText1, setHintText1] = useState('');
    const [iconType1, setIconType1] = useState(TypeIcon.None);

    const [inputText2, setInputText2] = useState('');
    const [hintText2, setHintText2] = useState('');
    const [iconType2, setIconType2] = useState(TypeIcon.None);

    const [inputText3, setInputText3] = useState('');
    const [hintText3, setHintText3] = useState('');
    const [iconType3, setIconType3] = useState(TypeIcon.None);






    useEffect(() => {
        if ((inputText1.length > 3) && (inputText1.length <= 5)) {
            setIconType1(TypeIcon.Success);
            setHintText1('Success');
        } else if ((inputText1.length > 5) && (inputText1.length <= 7)) {
            setIconType1(TypeIcon.Warning);
            setHintText1('Warning');
        } else if ((inputText1.length > 7) && (inputText1.length <= 10)) {
            setIconType1(TypeIcon.Error);
            setHintText1('Error');
        } else {
            setIconType1(TypeIcon.None);
            setHintText1('');
        }
    }, [inputText1]);

    useEffect(() => {
        if ((inputText2.length > 3) && (inputText2.length <= 5)) {
            setIconType2(TypeIcon.Success);
            setHintText2('Success');
        } else if ((inputText2.length > 5) && (inputText2.length <= 7)) {
            setIconType2(TypeIcon.Warning);
            setHintText2('Warning');
        } else if ((inputText2.length > 7) && (inputText2.length <= 10)) {
            setIconType2(TypeIcon.Error);
            setHintText2('Error');
        } else {
            setIconType2(TypeIcon.None);
            setHintText2('');
        }
    }, [inputText2]);

    useEffect(() => {
        if ((inputText3.length > 3) && (inputText3.length <= 5)) {
            setIconType3(TypeIcon.Success);
            setHintText3('Success');
        } else if ((inputText3.length > 5) && (inputText3.length <= 7)) {
            setIconType3(TypeIcon.Warning);
            setHintText3('Warning');
        } else if ((inputText3.length > 7) && (inputText3.length <= 10)) {
            setIconType3(TypeIcon.Error);
            setHintText3('Error');
        } else {
            setIconType3(TypeIcon.None);
            setHintText3('');
        }
    }, [inputText3])

    return (
        <div className="input-wrapper">
            <div className="header">Input fields</div>
            <div className="input-container">
                <div className="row1">
                    <div className="first-input">
                        <Input
                            text=''
                            hint="REGULAR"
                            disabled={false}
                            
                        />
                    </div>
                    <div className="second-input">
                        <Input
                            text=""
                            hint="ACTIVE"
                            disabled={false}
                            
                        />
                    </div>
                    <div className="third-input">
                        <Input
                            text=""
                            hint="DISABLED"
                            disabled={true}
                            
                        />
                    </div>
                </div>
                <div className="row2">
                    <div className="forth-input">
                        <Input
                            text={inputText1}
                            hint={hintText1}
                            type={iconType1}
                            disabled={false}
                            
                            onChange={(text) => {
                                setInputText1(text);
                            }}
                        />
                    </div>
                    <div className="fifth-input">
                        <Input
                            text={inputText2}
                            hint={hintText2}
                            type={iconType2}
                            disabled={false}
                          
                            onChange={(text) => {
                                setInputText2(text);
                            }}
                        />
                    </div>
                    <div className="sixth-input">
                        <Input
                            text={inputText3}
                            hint={hintText3}
                            type={iconType3}
                            disabled={false}
                          
                            onChange={(text) => {
                                setInputText3(text);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
