import React from 'react'
import { Navbar } from '../common/components'
import { Header } from './components'
import { Footer } from '../common/containers'

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