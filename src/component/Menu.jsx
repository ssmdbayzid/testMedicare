import React from 'react'
import logo from '../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaLaptopMedical } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { logOut, selectCurrentUser } from 'features/auth/authSlice';

  
const navLinks = [
  {
      path: '/home',
      display: "Home",
      icon: <IoHomeOutline />
  },
  {
      path: '/profile',
      display: "Profile",
      icon: <CgProfile />
  },
  {
      path: '/doctors',
      display: "Doctors",
      icon: <FaRegUser />
  },
  {
      path: '/services',
      display: "Services",
      icon: <FaLaptopMedical />
  },
  {
      path: '/contact',
      display: "Contact",
      icon: < RiLogoutBoxLine />
  },
]

const Menu = ({setOpen,  open}) => {
  const user =  useSelector(selectCurrentUser)

  
  return ( <>

     <div className='h-[87vh] relative'>
            <ul className=" flex flex-col justify-center  mx-5 ml-4 pt-5">
                    { navLinks && navLinks.map((link, index)=>
                    <NavLink to={link.path} className={navClass => navClass.isActive ? "text-[var(--primary-color)] text-lg  font-[600] text-center  flex items-center gap-12 py-3 bg-blue-200"
                    : "text-lg text-textColor font-[500]  text-center flex items-center gap-12 hover:bg-blue-200 py-3 hover:blue-200" } key={index}>
                      <span>{link.icon}</span>
                      {link.display}
                      </NavLink>)
                    }
                </ul>
                <Link to={"/login"}><button className='w-[90%] text-white text-xl bg-blue-700 py-2  ml-3 mr-3 rounded-full mt-3'>Login</button></Link>
                <Link to={"/signup"}><button className='w-[90%] text-white text-xl bg-gray-600 py-2  ml-3 mr-3 rounded-full mt-3'>Signup</button></Link>
      
      </div>

      {/* ------------- User Email & Logout ----------- */}
    {user &&  <div className='absolute left-0 bottom-0 pl-2 bg-black bg-opacity-50 bg-transparent w-full flex items-center justify-between'>
        <div className='flex'>
        <img src={user.photo} alt="" className='w-10 rounded-md mr-3' />
        <div>
          <p className='text-white text-lg'>{user.name}</p>
          <p className='text-white'>{user.email}</p>
        </div>
        </div>
        
        <p
        onClick={()=>logOut()}
        className='bg-red-600 px-3 py-6 h-full cursor-pointer '>

        < RiLogoutBoxLine className='text-2xl text-white' />
        </p>
      </div>}
    </>
  )
}

export default Menu