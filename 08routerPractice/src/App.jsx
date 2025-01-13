import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import { Navbar } from './components/Navbar'
import './App.css'
import  {Navigation}  from './components/SubConfirmed'
import { NoMatch } from './components/Nomatch'
import { Product } from './components/Products'
import { Feature } from './components/Feature'
import { New } from './components/New'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='Submit' element={<Navigation />} />
      <Route path='*' element={<NoMatch />} />
      <Route path='product' element={<Product />} >
        <Route index element={<Feature />} />
        <Route path='feature' element={<Feature />} />
        <Route path='new' element={<New />} />
      </Route>

    </Routes>

    </>
  )
}

export default App
