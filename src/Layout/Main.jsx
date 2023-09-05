import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom'

const 
Main = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default 
Main