import React from 'react'
import { Navbar, Footer } from '../common'
import { Header } from './components'

const Home = () => {
  return (
    <>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Footer />
    </>
  )
}

export default Home
