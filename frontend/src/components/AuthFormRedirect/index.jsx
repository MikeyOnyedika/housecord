import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

const AuthFormRedirect = (props) => {
    const { text, path, linkText } = props
  return (
    <p className='auth-redirect'>{ text } <Link to={path}>{ linkText }</Link> </p>
  )
}

export default AuthFormRedirect