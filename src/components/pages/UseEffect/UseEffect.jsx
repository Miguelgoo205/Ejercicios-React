// import React from 'react'
import React, { useRef } from 'react'
export const UseEffect = () => {

  const color = useRef();

  const saveColor = (event) =>{
    color.current.style.backgroundColor = event.target.value;
  }


  return (
    <main className='mainEffect'>
      <div ref={color} className='container'></div>
      <input  type="color" name="" id="inptColor" onChange={saveColor} />
    </main>
  )
}
