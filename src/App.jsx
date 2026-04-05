import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Shop from './Pages/Shop'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import PageNotFound from './Pages/PageNotFound'
import LoginContent from './Pages/LoginContent'
import SignUpContent from './Pages/SignUpContent'
import TermsAndConditions from './Pages/TermsAndConditions'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />

        <Route path='/login' element={<LoginContent/>}/>
        <Route path='/signup' element={<SignUpContent/>}/>
        <Route path='/terms' element={<TermsAndConditions/>} />
      </Routes>


    </div>
  )
}

export default App