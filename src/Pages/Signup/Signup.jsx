import React from 'react'
import { BiLogoGoogle, BiLogoFacebook } from 'react-icons/bi'

import signUpImg from '../../assets/images/signup.gif'
const Signup = () => {
  return (
    <section className="px-5 xl:px-0 lg:py-10">
      <div className="max-w-[1170px] md:w-[80%] lg:w-2/3 mx-auto">
        <div className="grid lg:grid-cols-2">
          {/* ================ Img Box =========== */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-r-lg">
              <img src={signUpImg} alt="" className="rounded-l-lg" />
            </figure>
          </div>

          {/* ================ Sign Up Form =========== */}
          <div className="lg:pl-16 rounded-l-lg py-10">
            <h2 className="text-headingColor text-[22px] leading-9 font-semibold mb-8">
              Create an <span className="text-primaryColor">account</span>
            </h2>
            
            <form action="">
            <div className="mb-3">
              <input type="text" placeholder="Your Name" className="w-full border-b border-solid outline-none focus:border-primaryColor text-[16px]  px-5 py-2 leading-7" required />
            </div>
            <div className="mb-3">
              <input type="email" placeholder="Your Email" className="w-full border-b border-solid outline-none focus:border-primaryColor text-[16px]  px-5 py-2 leading-7" required />
            </div>
            <div className="mb-3">
              <input type="password" placeholder="Your Password" className="w-full border-b border-solid outline-none focus:border-primaryColor text-[16px]  px-5 py-2 leading-7" required />
            </div>
            <button className="btn w-full px-5 py-2 mt-2 rounded-md">
              Submit
            </button>
            <div className="flex items-center justify-between pt-2">
              <hr className="h-1 w-1/3 bg-irisBlueColor" />
                <span>or</span>
              <hr className="h-1 w-1/3 bg-irisBlueColor" />
            </div>
          </form>

          <div className="mb-5 flex items-center justify-between">
            <label
            className="text-textColor font-bold text-[16px] leading-7"
            >
              Are you a: 
              <select name="role" id=""
              className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </label>
            <label
            className="text-textColor font-bold text-[16px] leading-7"
            >
              Gander: 
              <select name="role" id=""
              className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
              >
                <option value="select">select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>

          {/* =============== Third Party Authentication ====================== */}

          <div className="flex items-center justify-center gap-10 pt-3">
              <p className="flex items-center cursor-pointer  border-2 px-3 py-1.5 rounded-md group hover:text-white hover:bg-[#db3236]">
                < BiLogoGoogle className="text-2xl mr-2" />
                <p className="text-lg leading-7 text-textColor group-hover:text-white">Google </p>
              </p>

              <p className="flex items-center cursor-pointer border-2 px-3 py-1.5 rounded-md hover:bg-primaryColor group hover:text-white">
                < BiLogoFacebook className="text-2xl mr-2" />
                <p className="text-lg leading-7 text-textColor group-hover:text-white ">Facebook </p>
              </p>
             
            </div>  
            <p className="mt-3 text-center">Already have an account? <a href="/signup" className="text-primaryColor font-semibold">Log In</a></p>
          </div>
          
        </div>
      </div>
      
    </section>
  )
}

export default Signup