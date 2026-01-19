import { useState } from 'react'
import './App.css'
import Header from './Componets/Header'
import Navber from './Componets/Navber'
import Banner from './Componets/Banner'
import About from './Componets/About'

function App() {

  return (
    <>
      <Header/>
      <Navber/> 
      <Banner/>
      <About/>
    </>
  )
}

export default App
