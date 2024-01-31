import React, { useEffect } from "react";
import { InputPanel } from "../InputPanel/InputPanel";
import './App.scss';





export const App = () => {
    const [text, setText] = useState<string>('')
    const [warningStatus, setWarningStatus] = useState<boolean>(false);

    useEffect(()=>{
        setWarningStatus((text.length > 5))        
    }, [text])
    return (
        <>
            <div>Inputs</div>
            <InputPanel />
            <Input text={text} icon={warningStatus ? Type.Warning : Type.None} hint={'dsfsdf'} onChange=((text)=>{setText(text)}) />
            <Input text={'dsfsdf'} icon={Type.None} hint={'dsfsdf'} />
            <Input text={'dsfsdf'} icon={Type.Error} hint={'dsfsdf'} />
            <Input text={'dsfsdf'} disabled={true} hint={'Это поле не активное'} />
            <Input text={'dsfsdf'} icon={Type.Warning} hint={'dsfsdf'} />
        </>
    )
}