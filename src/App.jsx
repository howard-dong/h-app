import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Projects from './projects/Projects'
import './App.css'
import Home from './home/Home'

function App () {
  return (
    <BrowserRouter basename='/h-app'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
