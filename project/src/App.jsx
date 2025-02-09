import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Menu from './pages/menu/Menu'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div id=''>
      <leftnavbar></leftnavbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Advertisement></Advertisement>
      </div>

      <Footer />
    </>
  )
}

export default App
