import React from 'react'
import { Navbar, Footer } from '../common'
import { Header } from './components'

const Home = () => {
  return (
    <div>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Footer />
    </div>
  )
}

export default Home
