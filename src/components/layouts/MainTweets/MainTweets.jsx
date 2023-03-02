import React, { useState, useEffect, useRef } from 'react'
import { Button } from '../../UI/Button/Button'
import { Ul } from '../../UI/UL/Ul'


const tweets = []
let data ;

export const MainTweets = () => {
    const refArea = useRef()

    const [counter, setCounter] = useState(255);
    const [area, setArea] = useState('');
    const [showData, setShowData] = useState([])
    const [clasCounter, setClasCounter] = useState("counterInit");
    // const textareaLength = textareaRef.current.value.length;

    const reduceNumber = (event)=>{
        let textareaLength = event.target.value;
        // console.log(textareaLength);
        setCounter(255-textareaLength.length)
}


// Color del contador
useEffect(() =>{
    counter <= 15?  setClasCounter("counterFinal"): setClasCounter("counterInit")
},[counter])


const handlePublish = ()=>{
    let textArea = refArea.current.value;
    if (textArea === "") {
        alert('No se puede publicar un tweet vacio')
    }
    else{
        setArea(textArea)
        // refArea.current.value = ""
        setCounter(255)
        archive()
    }
}


const archive = () =>{
    let valueTweet = refArea.current.value
    if (valueTweet === "") {
        alert('No puedes archivar un tweet vacio')
    }
    else{
        const tweetSaved = valueTweet
        console.log(valueTweet);
        tweets.push(tweetSaved)
        localStorage.setItem('tweet', (tweets))
        refArea.current.value = ""
    }
}


function getData(){
    
    if (tweets.length===0) {
        alert('No hay tweets archivados')
    }
    else{
        data = localStorage.getItem('tweet').split(',')
        setShowData(data)
    }
    return
}

    return (
    <main  className='mainTweets'>

        <h2>Generador de Tweets</h2>
            <textarea ref={refArea}  onChange={reduceNumber} placeholder='Escribe un tweet(max 255 caracteres)' maxLength={255} className='area' name="" id="" cols="30" rows="10"></textarea>
        <div className='containerBtns'>
            <Button styleBtn="btn" content="Publicar" fun={handlePublish}/>
            {/* <Button styleBtn="btn" content="Archivar" fun={archive}/> */}
            <Button styleBtn="btn" content="Lista Archivados" fun={getData}/>
        </div>
            <p className={clasCounter}>{counter}</p>
            <span id='PublishText'>{area}</span>

        <div>
            {
                showData.map((element,key)=>  <Ul className content={element} key={key}/>)
            }
        </div>
    </main>
    
    )
}
