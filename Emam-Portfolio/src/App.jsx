import { useState } from 'react'
import './App.css'
import Header from './Componets/Header'
import Navber from './Componets/Navber'
import Banner from './Componets/Banner'
import About from './Componets/About'
import Skills from './Componets/Skills'
import Project from './Componets/Project'
import Services from './Componets/Services'
import Client from './Componets/Client'

function App() {

  return (
    <>
      <Header/>
      <Navber/> 
      <Banner/>
      <About/>
      <Skills/>
      <Project/>
      <Services/>
      <Client/>
    </>
  )
}

export default App
