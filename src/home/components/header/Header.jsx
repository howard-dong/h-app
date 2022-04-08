import  React, { useState, useEffect } from 'react'
import './Header.css'
import data from "../../../assets/data.json"

const getGreetText = (setGreetText) => {
  const h = (new Date()).getHours()
  if (h < 12) {
    setGreetText(data.header.text_greet_1)
  } else if (h < 18) {
    setGreetText(data.header.text_greet_2)
  } else {
    setGreetText(data.header.text_greet_3)
  }
}

const Header = () => {
  const [greetText, setGreetText] = useState(null)

  useEffect(() => {
    getGreetText(setGreetText)
  }, [])
  
  return (
    <div className='header section__padding'>
      <div className='header-content'>
        <h1 className='gradient__text'>
          {greetText} <br />
          {data.header.text_welcome} <br />
        </h1>
        <p>
          {data.header.text_about}
        </p>
      </div>
      {/* <div className='header-image'>
        <p></p>
      </div> */}
    </div>
  )
}

export default Header