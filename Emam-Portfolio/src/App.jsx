import { useState } from 'react'
import './App.css'
import Banner from './Componets/Banner'
import About from './Componets/About'
import Skills from './Componets/Skills'
import Project from './Componets/Project'
import Services from './Componets/Services'
import Client from './Componets/Client'
import Contact from './Componets/Contact'

function App() {

  return (
    <>

      <Banner/>
      <About/>
      <Skills/>
      <Project/>
      <Services/>
      <Client/>
      <Contact/>
    </>
  )
}

export default App
