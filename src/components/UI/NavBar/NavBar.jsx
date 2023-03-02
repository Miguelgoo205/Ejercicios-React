import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='nav'>
        <ul className='list'>
            <Link className="anchor" to="/" >Home</Link>
            <Link className="anchor" to="/UseState" >Use State</Link>
            <Link className="anchor" to="/UseCustom" >Use Custom</Link>
            <Link className="anchor" to="/UseEffect" >Use Effect</Link>
            <Link className="anchor" to="/Rick And Morty" >Rick And Morty</Link>
            <Link className="anchor" to="/Tweets" >Tweets</Link>

        </ul>
    </nav>
  )
}
