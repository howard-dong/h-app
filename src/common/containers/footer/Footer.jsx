import React from 'react'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import './Footer.css'
import data from "../../../assets/data.json"

const Footer = () => {
  return (
    <div className='footer section__padding'>
      <div className='footer-heading'>
        <h1 className='gradient__text'>
          {data.footer.text_heading}
        </h1>
      </div>

      <div className='footer-socials-container'>
        <a href="https://github.com/howard-dong" rel="noreferrer" target="_blank">
          <AiOutlineGithub color='#fff' size={40} />
        </a>
        <a href="https://www.linkedin.com/in/howard-dong" rel="noreferrer" target="_blank">
          <AiFillLinkedin color='#fff' size={40}/>
        </a>
      </div>

      <div className='footer-copyright'>
        <p>
          {data.footer.text_copyright}
        </p>
      </div>
    </div>
  )
}

export default Footer