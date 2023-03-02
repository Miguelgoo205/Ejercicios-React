import React from 'react'

export const Input = ({ styleInput,change}) => {
    return (
    <input className={styleInput} type="text" onChange={change} />
    )
}
