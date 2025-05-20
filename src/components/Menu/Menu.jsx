import React from 'react'
import './Menu.scss'
import { NavLink } from 'react-router'
export default function Menu() {
  return (
    <>
        <nav className='menu'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/dev-work'>Dev Work</NavLink>
            <NavLink to='/design-work'>Design Work</NavLink>
        </nav>
    </>
  )
}
