import React from 'react'
import './styles.css'

const Header = (props) => {
  return (
    <header>
        { props.children }
    </header>
  )
}

export default Header