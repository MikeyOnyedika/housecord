import React from 'react'
import NavBar from '../NavBar'
import { Outlet } from 'react-router-dom'
import './styles.css'

interface NavType{
    children: React.ReactElement
}

const Nav = (props: NavType) => {
  return (
    <div className='nav'>
        <NavBar />
        {props.children}
    </div>
  )
}

export default Nav