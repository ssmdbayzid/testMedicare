import React from 'react'
import logo from '../assets/images/logo.png'
import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillYoutube, AiFillGithub, AiOutlineInstagram} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const socialLinks = [
  {
    path:  "https://youtube.com/",
    icon: < AiFillYoutube className="w-6 h-6 group-hover:text-white" />
  },
  {
    path:  "https://www.instagram.com/",
    icon: < AiOutlineInstagram className="w-6 h-6 group-hover:text-white" />
  },
  {
    path:  "https://github.com/ssmdbayzid",
    icon: < AiFillGithub className="w-6 h-6 group-hover:text-white" />
  },
  {
    path:  "https://www.linkedin.com/in/ssmdbayzid/",
    icon: < RiLinkedinFill className="w-6 h-6 group-hover:text-white" />
  },
]

const quickLink1 = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "About",
    path: "/about",
  },
  {
    display: "Service",
    path: "/services",
  },
  {
    display: "Blog",
    path: "/services",
  },
] 
const quickLink2 = [
  {
    display: "Find a Doctor",
    path: "/doctors",
  },
  {
    display: "Request a Appointment",
    path: "/doctors",
  },
  {
    display: "Get a Opinion",
    path: "/doctors",
  },
  {
    display: "Blog",
    path: "/services",
  },
] 
const quickLink3 = [
  {
    display: "Donate",
    path: "/",
  },
  {
    display: "Contact",
    path: "/contact",
  },  
] 

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-10 pb-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-7">
          
      <div className="">
        <img src={logo} alt="" />
        <p>Copy right @{year} developed by Mahbubur Rahman all right  reserved</p>
        <div className="flex items-center gap-3 mt-4">
        {
          socialLinks && socialLinks.map((link, index)=> <Link to={link.path} className="group hover:bg-primaryColor hover:border-none flex items-center justify-center rounded-full h-9 w-9 border border-solid border-[#181A1E]">
            {link.icon}
          </Link>)}
      </div>
      </div>
      {/* ============= Quick Link 1 ======================= */}
      <div>
        <h2 className="text-[20px] leading-[30px] text-headingColor font-[700] mb-6"> </h2>
        <ul>
              {quickLink1 &&  quickLink1.map((link, index)=> <li key={index} className="mb-4"> <Link to={link.path} >
                {link.display}
              </Link></li>)}
        </ul>
      </div>
      
      {/* ============= Quick Link 2 ======================= */}

      <div>
        <h2 className="text-[20px] leading-[30px] text-headingColor font-[700] mb-6"> </h2>
        <ul>
              {quickLink2 &&  quickLink2.map((link, index)=> <li key={index} className="mb-4"> <Link to={link.path} className="hover:font-[500]">
                {link.display}
              </Link></li>)}
        </ul>
      </div>


      {/* ============= Quick Link 3 ======================= */}

      <div>
        <h2 className="text-[20px] leading-[30px] text-headingColor font-[700] mb-6"> </h2>
        <ul>
              {quickLink3 &&  quickLink3.map((link, index)=> <li key={index} className="mb-4"> <Link to={link.path} >
                {link.display}
              </Link></li>)}
        </ul>
      </div>

        </div>
      </div>

      </footer>
  )
}

export default Footer