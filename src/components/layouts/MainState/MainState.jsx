import React, { useState, useEffect } from 'react'

import { Button } from '../../UI/Button/Button'


export const MainState = () => {

    const [counter, setCounter] = useState(0);
    const [clas, setClas] = useState("min");

    useEffect(() =>{
        counter >= 10?  setClas("max"): setClas("min")

        // if (counter >=10 ) {
        //     setClas("max")
        // }
        // else{
        //     setClas("min")
        // }
    },[counter])



    return (
    <main className='mainState'>
        <h1 className={clas}>{counter}</h1>
        <div id='contButtons'>
            <Button styleBtn="btn" content="Add" fun={() => setCounter(counter + 1)} />
            <Button styleBtn="btn" content="Reset" fun={() => setCounter(0)}  />
            <Button styleBtn="btn" content="Substract" fun={()=>setCounter(counter-1)} />
        </div>
    </main>
    )
}

