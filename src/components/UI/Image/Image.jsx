import React from 'react'

export const Image = ({srcImg, styleImg}) => {
  return (
    <img className={styleImg} src={srcImg} alt="" />    
  )
}
