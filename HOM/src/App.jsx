import { useState } from 'react'
import { FaWhatsappSquare } from "react-icons/fa";

import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  const phoneNumber = "7891250008"
  const message = "Hello! I'm interested in your services."

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <>
      {/* <Navbar/> */}
      <a className="text-6xl text-green-600 hover:text-green-800 fixed bottom-12 right-12 z-50" href={whatsappUrl} target='_blank' rel="noopener noreferrer"><FaWhatsappSquare/></a>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
