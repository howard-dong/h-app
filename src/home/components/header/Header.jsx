import React from 'react'
import './Header.css'
import data from '../../../assets/data.json'

const header = data.header_home

const getGreetText = () => {
  const h = (new Date()).getHours()
  if (h < 12) {
    return (header.text_greet_1)
  } else if (h < 18) {
    return (header.text_greet_2)
  } else {
    return (header.text_greet_3)
  }
}

const Header = () => {
  return (
    <div className='header section__padding'>
      <div className='header-content'>
        <h1 className='gradient__text'>
          {getGreetText()} <br />
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
