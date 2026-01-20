import React from 'react'
import { Outlet } from "react-router";
import Header from './Componets/Header';
import Navber from './Componets/Navber'
import Futter from './Componets/Futter'

const RoutLayout = () => {
  return (
    <div>
      <Header/>
      <Navber/>
      <Outlet />
      <Futter/>
    </div>
  )
}

export default RoutLayout
