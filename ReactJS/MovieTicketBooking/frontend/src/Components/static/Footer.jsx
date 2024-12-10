import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
    <div className='d-flex'>
    <Link to="/contact">Contact</Link>
    <Link to="/back">Back</Link>
    <Link to="/policy">Policy</Link>
    </div>
     
    </div>
  )
}

export default Footer
