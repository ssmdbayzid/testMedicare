import React, { useContext, useState } from 'react'
// import logo from '../assets/images/logo.png'
import logo from '../assets/images/pluslogo.png'
import {  Link, NavLink } from 'react-router-dom'
import avatar from '../assets/images/avatar-icon.png'
import {BiMenu} from 'react-icons/bi'
import Menu from './Menu'
import { authContext } from 'context/AuthContext'
import {CiLight, CiDark} from 'react-icons/ci'
import { ThemeContext } from 'context/ThemeContext'
import DropdownMenu from './DropdownMenu'
// import bg from '../assets/images/header-bg.png'

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
    const [openMenu, setOpenMenu] = useState(false)
    const {user, token, dispatch} = useContext(authContext)
    const {theme, themeToggle} = useContext(ThemeContext)
        
    const signUp = ()=>{
        dispatch({type: "LOG_OUT"})        
    }
    if(user && token){
        console.log("user", user, "token", token)
    }
  return (
    <div className="header leading-[100%] relative flex items-center">
        <div className="container">
            <div className="flex justify-between items-center">

                {/* ============= Logo ========== */}
                <a href="/home" className="flex text-3xl items-center text-[var(--heading-color)] gap-3 font-extrabold">
                <img src={logo} alt="Logo" className="cursor-pointer w-8"/>
                <p>Mediplus</p>
                </a>

                {/* ================= Navigation ============== */}
                <div className="navigation hidden md:block ">
                <ul className="flex items-center justify-between gap-8 mx-5">
                    { navLinks && navLinks.map((link, index)=>
                    <NavLink to={link.path} className={navClass => navClass.isActive ? "text-[var(--primary-color)] text-lg leading-7 font-[600]"
                    : "text-lg text-textColor font-[500] leading-7" } key={index}>{link.display}</NavLink>)
                    }
                </ul>
                </div>


            {/* ============= Nev Right ================= */}
            <div className="flex items-center justify-between gap-4">                
                   { user && token ? 
                   <>
                   <div className="mr-3"
                   onClick={()=>setOpenMenu(!openMenu)}
                   >
                       <figure className="w-11 h-11 cursor-pointer">
                       <img src={user.photo} alt="" className={`w-full h-full outline-green-600 ${openMenu && "outline"} rounded-full`} />
                       </figure>
                      
                   </div>    
                   {
                    openMenu && <DropdownMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
                   }                                                          
               </>                   
                   : <div className='hidden md:flex items-center gap-5'> <Link to="/login" >
                        <button className="flex justify-center items-center min-w-[100px]  py-2 px-6 h-[40px] bg-slate-300 cursor-pointer text-[#121212] transition-all ease-in duration-75 hover:text-primaryColor  hover:underline font-[800] rounded-md group-hover:bg-opacity-0">Log In</button>
                    </Link>
                    
                    <Link  to="/signup">
                  {/* <button style={{background: "var(--primary-color)"}} className="flex justify-center items-center py-2 px-6 min-w-[120px]  text-white h-[40px] rounded-full cursor-pointer">
                   Sign Up
                  </button> */}
                  <button className="bg-[var(--primary-color)] text-white font-semibolds flex justify-center items-center rounded-lg cursor-pointer py-2 px-6  min-w-[120px] h-[40px] mt-0">
                   Sign Up
                  </button>
                </Link>
                </div>}
                <button onClick={themeToggle} className="text-sm hover:bg-slate-300 rounded-full p-1">
                   {theme === "dark" ? <CiLight  className="text-[30px]"/>
                    : <CiDark className="text-[30px]"/>}

                </button>           
                    {!open ? <BiMenu onClick={()=> setOpen(!open)} className="cursor-pointer md:hidden text-[40px]" /> 
                    : <button onClick={()=> setOpen(!open)} className='text-2xl hover:text-red-600 md:hidden  cursor-pointer'>X</button>  }                                        
            </div>
        </div>
      </div>
      { open &&
          <Menu open={open} setOpen={setOpen} />
       } 
            </div>
  )
}

export default Header