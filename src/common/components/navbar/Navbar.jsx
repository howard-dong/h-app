import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './Navbar.css'
import Resume from '../../../assets/Howard_Dong_Resume_202111.pdf'

const Navbar = () => {
  // const [toggleMenu, setToggleMenu] = useState(false)

  const showResume = () => {
    window.open(Resume)
  }

  return (
    <div className='navbar'>
      <div className='navbar-title'>
        <p>Howard Dong</p>
      </div>
      <div className='navbar-links'>
        <p><a href='#home'>Home</a></p>
        <p><a href="#projects">Projects</a></p>
      </div>
      <div className='navbar-resume'>
        <button type='button' onClick={showResume}>Resume</button>
      </div>
      {/* <div className='navbar-menu'>
        {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#projects">Projects</a></p>
          </div>
          <div className="navbar-menu_container-links-sign">
            <button type="button">Resume</button>
          </div>
        </div>
        )}
      </div> */}
      
    </div>
  )
}

export default Navbar