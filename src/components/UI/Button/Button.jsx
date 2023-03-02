import React from 'react'


export const Button = ({content, styleBtn, fun}) => {
return (
    <button onClick={fun} className={styleBtn}>{content}</button>
)
}
