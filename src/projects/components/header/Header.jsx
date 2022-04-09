import React from 'react'
import './Header.css'
import data from '../../../assets/data.json'

const header = data.header_projects

const Header = () => {
  return (
    <div className='header section__padding'>
      <div className='header-content'>
        <h1 className='gradient__text'>
          {header.text_welcome} <br />
        </h1>
        <p>
          {header.text_about}
        </p>
      </div>
      {/* <div className='header-image'>
        <p></p>
      </div> */}
    </div>
  )
}

export default Header
