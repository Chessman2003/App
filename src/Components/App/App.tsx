import React, { useEffect, useState } from "react";
import { Input } from "../Input/Input";
import './App.scss';
import { InputIconsTypes } from "../../types/inputType";
import {TypeIcon} from '../Input/Input'


export const App = () => {
    const [text1, setText1] = useState<string>("");
    const [text2, setText2] = useState<string>("");
    const [text3, setText3] = useState<string>("");
    const [errorStatus1, setErrorStatus1] = useState<boolean>(false);
    const [warningStatus1, setWarningStatus1] = useState<boolean>(false);
    const [successStatus1, setSuccessStatus1] = useState<boolean>(false);

    const [warningStatus2, setWarningStatus2] = useState<boolean>(false);
    const [errorStatus2, setErrorStatus2] = useState<boolean>(false);
    const [successStatus2, setSuccessStatus2] = useState<boolean>(false);

    const [warningStatus3, setWarningStatus3] = useState<boolean>(false);
    const [errorStatus3, setErrorStatus3] = useState<boolean>(false);
    const [successStatus3, setSuccessStatus3] = useState<boolean>(false);

    const [activeStatus1, setActiveStatus1] = useState<boolean>(false);
    const [activeStatus2, setActiveStatus2] = useState<boolean>(false);
    const [activeStatus3, setActiveStatus3] = useState<boolean>(false);


    useEffect(() => {
        if (text1.trim().length === 0) {
            setWarningStatus1(false);
            setSuccessStatus1(false);
            setErrorStatus1(false);
            setActiveStatus1(true);
        } else if (text1.trim().length > 1 && text1.trim().length < 5) {
            setWarningStatus1(false);
            setSuccessStatus1(false);
            setErrorStatus1(true);
            setActiveStatus1(false);
        } else if (text1.trim().length >= 5 && text1.trim().length < 10) {
            setActiveStatus1(false)
            setErrorStatus1(false);
            setSuccessStatus1(false);
            setWarningStatus1(true);
        } else if (text1.trim().length >= 10) {
            setActiveStatus1(false)
            setErrorStatus1(false)
            setWarningStatus1(false);
            setSuccessStatus1(true);
        }
    }, [text1]);

    useEffect(() => {
        if (text2.trim().length === 0) {
            setWarningStatus2(false);
            setSuccessStatus2(false);
            setErrorStatus2(false);
            setActiveStatus2(true);
        } else if (text2.trim().length > 1 && text2.trim().length < 5) {
            setWarningStatus2(false);
            setSuccessStatus2(false);
            setErrorStatus2(true);
            setActiveStatus2(false);
        } else if (text2.trim().length >= 5 && text2.trim().length < 10) {
            setActiveStatus2(false)
            setErrorStatus2(false);
            setSuccessStatus2(false);
            setWarningStatus2(true);
        } else if (text2.trim().length >= 10) {
            setActiveStatus2(false)
            setErrorStatus2(false)
            setWarningStatus2(false);
            setSuccessStatus2(true);
        }
    }, [text2]);

    useEffect(() => {
        if (text3.trim().length === 0) {
            setWarningStatus3(false);
            setSuccessStatus3(false);
            setErrorStatus3(false);
            setActiveStatus3(true);
        } else if (text3.trim().length > 1 && text3.trim().length < 5) {
            setWarningStatus3(false);
            setSuccessStatus3(false);
            setErrorStatus3(true);
            setActiveStatus3(false);
        } else if (text3.trim().length >= 5 && text3.trim().length < 10) {
            setActiveStatus3(false)
            setErrorStatus3(false);
            setSuccessStatus3(false);
            setWarningStatus3(true);
        } else if (text3.trim().length >= 10) {
            setActiveStatus3(false)
            setErrorStatus3(false)
            setWarningStatus3(false);
            setSuccessStatus3(true);
        }
    }, [text3]);

    const [inputText1, setInputText1] = useState('');
    const [hintText1, setHintText1] = useState('');
    const [iconType1, setIconType1] = useState(TypeIcon.None);

    useEffect(()=>{
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
    }, [inputText1])

    return (
        <div className="input-wrapper">
            <div className="header">Input fields</div>
            <div className="input-container">
                <div className="row">
                    <div className="first-input">
                        <Input
                            text={inputText1}
                            hint={hintText1}
                            type={iconType1}
                            disabled={false}
                            onChange={(text)=>{
                                setInputText1(text);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
