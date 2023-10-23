import React, { useContext, useState } from 'react'
import logo from '../assets/images/logo.png'
import {  Link, NavLink } from 'react-router-dom'
import avatar from '../assets/images/avatar-icon.png'
import {BiMenu} from 'react-icons/bi'
import Menu from './Menu'
import { authContext } from 'context/AuthContext'
import {CiLight, CiDark} from 'react-icons/ci'
import { ThemeContext } from 'context/ThemeContext'

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
    const [open, setOpen] = useState(false)
    const {user, token, dispatch} = useContext(authContext)
    const {theme, themeToggle} = useContext(ThemeContext)
    
    
    const signUp = ()=>{
        dispatch({
        type: "LOGOUT"
    })}

    
  return (
    <div className="header relative flex items-center">
        <div className="container">
            <div className="flex justify-between items-center">

                {/* ============= Logo ========== */}
                <img src={logo} alt="" />

                {/* ================= Navigation ============== */}
                <div className="navigation hidden md:block ">
                <ul className="flex items-center justify-between gap-8 mx-5">
                    { navLinks && navLinks.map((link, index)=>
                    <NavLink to={link.path} className={navClass => navClass.isActive ? "text-primaryColor text-lg leading-7 font-[600]"
                    : "text-lg text-textColor font-[500] leading-7" } key={index}>{link.display}</NavLink>)
                    }
                </ul>
                </div>


            {/* ============= Nev Right ================= */}
            <div className="flex items-center justify-between gap-4">

                
                   { user && token ? 
                   <>
                   <Link to='/' className="mr-3">
                       <figure className="w-11 h-11 rounded-full cursor-pointer">
                       <img src={user.photo} alt="" className="w-full  outline-green-600" />
                       </figure>
                   </Link>
                   
                   
                   <button
                   onClick={()=> signUp()}
                    className="flex justify-center items-center py-2 px-6 min-w-[120px]  text-white h-[40px] bg-primaryColor rounded-full cursor-pointer">
                    Sign Out
                   </button>
                 
               </>                   
                   : <> <Link to="/login" >
                        <button className="flex justify-center items-center min-w-[100px]  py-2 px-6 h-[40px] bg-slate-300 cursor-pointer text-textColor transition-all ease-in duration-75 hover:text-primaryColor  hover:underline font-[800] rounded-md group-hover:bg-opacity-0">Log In</button>
                    </Link>
                    
                    <Link  to="/signup">
                  <button className="flex justify-center items-center py-2 px-6 min-w-[120px]  text-white h-[40px] bg-primaryColor rounded-full cursor-pointer">
                   Sign Up
                  </button>
                </Link>
                </>}
                <button onClick={themeToggle} className="text-sm hover:bg-slate-300 rounded-full p-1">
                   {theme === "dark" ? <CiLight  className="text-[30px]"/>
                    : <CiDark className="text-[30px]"/>}

                </button>
            <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" className="cursor-pointer">Theme change</button>

                    <BiMenu onClick={()=> setOpen(!open)} className=" md:hidden text-[40px]" />
                    {open && <Menu navLink={navLinks} setOpen={setOpen} open={open} />}                
            </div>
        </div>
      </div>

            </div>
  )
}

export default Header