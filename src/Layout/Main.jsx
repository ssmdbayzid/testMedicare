import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom'

const 
Main = () => {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"

    }}>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default 
Main