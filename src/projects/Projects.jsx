import React from 'react'

import { Navbar, Footer, Body } from '../common'
import { Header } from './components'
import './Projects.css'
import data from '../assets/data.json'

const projects = data.projects_info

const getContent = projects.map((project) => {
  return (
    <Body key={project.name} content={
      <>
        <h1 className='gradient__text'>{project.name}</h1>
        <p>{project.description}</p>
      </>
    }/>
  )
})

// projects.PropTypes {

// }

const Projects = () => {
  return (
    <>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <div className='project-container section__margin'>
        {getContent}
      </div>
      <Footer />
    </>
  )
}

export default Projects
