import React, { useEffect, useState } from "react";
import { Input } from "../Input/Input";
import './App.scss';
import { InputIconsTypes } from "../../types/inputType";



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

    useEffect(() => {
        if (text1.trim().length === 0) {
            setWarningStatus1(false)
            setSuccessStatus1(false)
            setErrorStatus1(true);
        } else if (text1.trim().length > 1 && text1.trim().length < 10) {
            setErrorStatus1(false);
            setSuccessStatus1(false);
            setWarningStatus1(true);
        } else if (text1.trim().length >= 10) {
            setErrorStatus1(false)
            setWarningStatus1(false);
            setSuccessStatus1(true);
        }
    }, [text1]);

    useEffect(() => {
        if (text2.trim().length === 0) {
            setWarningStatus2(false);
            setSuccessStatus2(false);
            setErrorStatus2(true);
        } else if (text2.trim().length > 1 && text2.trim().length < 10) {
            setErrorStatus2(false);
            setSuccessStatus2(false);
            setWarningStatus2(true);
        } else if (text2.trim().length >= 10) {
            setErrorStatus2(false);
            setWarningStatus2(false);
            setSuccessStatus2(true);
        }
    }, [text2]);

    useEffect(() => {
        if (text3.trim().length === 0) {
            setWarningStatus3(false)
            setSuccessStatus3(false)
            setErrorStatus3(true);
        } else if (text3.trim().length > 1 && text3.trim().length < 10) {
            setErrorStatus3(false);
            setSuccessStatus3(false);
            setWarningStatus3(true);
        } else if (text3.trim().length >= 10) {
            setErrorStatus3(false)
            setWarningStatus3(false);
            setSuccessStatus3(true);
        }
    }, [text3]);

    return (
        <div className="input-wrapper">
            <div className="header">Input fields</div>
            <div className="input-container">
                <div className="row">
                    <div className="first-input">
                        <Input
                            text=""
                            hint="REGULAR"
                            icon={InputIconsTypes.None}
                            disabled={false}
                            className=""
                        />
                    </div>
                    <div className="second-input">
                        <Input
                            text=""
                            hint="ACTIVE"
                            icon={InputIconsTypes.None}
                            disabled={false}
                            className=""
                        />
                    </div>
                    <div className="third-input">
                        <Input
                            text=""
                            hint="DISABLED"
                            icon={InputIconsTypes.None}
                            disabled={true}
                            className=""
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="forth-input">
                        <Input
                            text="rrrrrrrrr"
                            hint={
                                errorStatus1
                                    ? 'Error!'
                                    : warningStatus1
                                        ? 'Warning!'
                                        : successStatus1
                                            ? 'Success!'
                                            : ''
                            }
                            icon={
                                errorStatus1
                                    ? InputIconsTypes.Error
                                    : warningStatus1
                                        ? InputIconsTypes.Warning
                                        : successStatus1
                                            ? InputIconsTypes.Success
                                            : InputIconsTypes.None
                            }
                            disabled={false}
                            onChange={(text1) => setText1(text1)}
                            className={
                                errorStatus1 ? "error-input" : warningStatus1 ? "warning-input" : successStatus1 ? "success-input" : ""
                            }
                        />
                    </div>
                    <div className="fifth-input">
                        <Input
                            text="sfes"
                            hint={
                                errorStatus2
                                    ? 'Error!'
                                    : warningStatus2
                                        ? 'Warning!'
                                        : successStatus2
                                            ? 'Success!'
                                            : ''
                            }
                            icon={
                                errorStatus2
                                    ? InputIconsTypes.Error
                                    : warningStatus2
                                        ? InputIconsTypes.Warning
                                        : successStatus2
                                            ? InputIconsTypes.Success
                                            : InputIconsTypes.None
                            }
                            disabled={false}
                            onChange={(text2) => setText2(text2)}
                            className={
                                errorStatus2 ? "error-input" : warningStatus2 ? "warning-input" : successStatus2 ? "success-input" : ""
                            }
                        />
                    </div>
                    <div className="sixth-input">
                        <Input
                            text=""
                            hint={
                                errorStatus3
                                    ? 'Error!'
                                    : warningStatus3
                                        ? 'Warning!'
                                        : successStatus3
                                            ? 'Success!'
                                            : ''
                            }
                            icon={
                                errorStatus3
                                    ? InputIconsTypes.Error
                                    : warningStatus3
                                        ? InputIconsTypes.Warning
                                        : successStatus3
                                            ? InputIconsTypes.Success
                                            : InputIconsTypes.None
                            }
                            disabled={false}
                            onChange={(text3) => setText3(text3)}
                            className={
                                errorStatus3 ? "error-input" : warningStatus3 ? "warning-input" : successStatus3 ? "success-input" : ""
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
