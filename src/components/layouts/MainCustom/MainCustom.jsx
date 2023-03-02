import React, { useState} from 'react'
import { Button } from '../../UI/Button/Button'
import { Input } from '../../UI/Input/Input'
let message =""

export const MainCustom = () => {
    const[text, setText] = useState("")
    const saveValue = ({target})=>{
        message = target.value
    }

    const putText = ()=>{
        setText(message)
    }
    return (
        <main>
            <p>{text}</p>
            <Input styleInput="inputStyle"   change={saveValue}/>
            <Button  styleBtn="btn" content="Send" fun={putText} />
        </main>
    )
}
