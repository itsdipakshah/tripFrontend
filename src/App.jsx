import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import About from './pages/About'
import Landing from './pages/landing'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Landing/>}/>
       <Route path='/about' element={<About/>}/>

      
    </Routes>
    </BrowserRouter>
  )
}

export default App
