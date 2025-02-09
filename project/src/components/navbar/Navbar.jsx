import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <div id='nav'>
      <ul>
      <NavLink to={'/'}><li>Home</li></NavLink>
      <NavLink to={'/menu'}><li>Menu</li></NavLink>
      <NavLink to={'/about'}><li>About</li></NavLink>
      <NavLink to={'/contact'}><li>Contact</li></NavLink>
      </ul>
    </div>
  )
}
