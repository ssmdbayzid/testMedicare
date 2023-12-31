import React from 'react'
import logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom'

const Menu = ({setOpen, navLink, open}) => {
  return ( <>
    <div className={``}>
    <div className="flex justify-between items-center">
        <figure className="w-full">
        <img src={logo} alt="" className="w-48"/>
        </figure>
        <span onClick={()=> setOpen(!open)} className="text-2xl hover:text-red-600 cursor-pointer" >X</span>
    </div>
    <ul className=" text-center">
        {navLink && navLink.map((link, index)=>
        <li key={index} onClick={()=> setOpen(!open)}>
        <NavLink to={link.path} className={navClass => navClass.isActive ? "text-primaryColor text-lg  font-[500] text-center"
        : "text-white font-[500] "
    }>{link.display}</NavLink>
    </li>)}
    </ul>
    </div>
    </>
  )
}

export default Menu