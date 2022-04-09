import React from 'react'
import { Link } from 'react-router-dom'
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import './Navbar.css'
import Resume from '../../../assets/Howard_Dong_Resume_202111.pdf'

const Navbar = () => {
  const showResume = () => {
    window.open(Resume)
  }

  return (
    <div className='navbar'>
      <div className='navbar-title'>
        <p>Howard Dong</p>
      </div>
      <div className='navbar-links'>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/projects">Projects</Link></p>
      </div>
      <div className='navbar-resume'>
        <button type='button' onClick={showResume}>Resume</button>
      </div>
    </div>
  )
}

export default Navbar
