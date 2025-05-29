import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import {Outlet} from "react-router-dom"
export const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>   {/*----dynamic value adding*/}
    <Footer/>
    </>
  )
}
