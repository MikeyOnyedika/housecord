import React from 'react'
import './styles.css'

const PageWrapper = (props) => {
  return (
    <div className='page-wrapper'>
        { props.children }
    </div>
  )
}

export default PageWrapper