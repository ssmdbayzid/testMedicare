import React from 'react'
import logo from '../assets/images/logo.png'
import {  NavLink } from 'react-router-dom'
import avatar from '../assets/images/avatar-icon.png'

const navLinks = [
    {
        path: '/home',
        display: "Home",
    },
    {
        path: '/doctors',
        display: "Doctors",
    },
    {
        path: '/services',
        display: "Services",
    },
    {
        path: '/contact',
        display: "Contact",
    },
]

const Header = () => {
    
  return (
    <div className="header relative flex items-center">
        <div className="container">
            <div className="flex justify-between items-center">

                {/* ============= Logo ========== */}
                <img src={logo} alt="" />

                {/* ================= Navigation ============== */}
                <div className="navigation">
                <ul className="flex items-center justify-between gap-8">
                    { navLinks && navLinks.map((link, index)=>
                    <NavLink to={link.path} className={navClass => navClass.isActive ? "text-primaryColor text-lg leading-7 font-[600]"
                    : "text-lg text-textColor font-[500] leading-7" } key={index}>{link.display}</NavLink>)
                    }
                </ul>
                </div>

                {/* ================= Nav Right ============== */}
                
                <div className="flex items-center gap-8">
                    <div className="w-14 h-14 rounded-full">
                        <img src={avatar} alt="" />
                    </div>
                    <div className=" h-8 w-8">
                        Log In
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Header