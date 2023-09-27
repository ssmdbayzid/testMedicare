import React, { useState } from 'react'
import { BiLogoGoogle, BiLogoFacebook } from 'react-icons/bi'
import avatar from '../../assets/images/avatar-icon.png'

import signUpImg from '../../assets/images/signup.gif'
const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  })

  const handleInputChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleFileInputChange = async e =>{
    const file = e.target.files[0];
    console.log(file)

    // later we will cloudinary to upload image
  }


  const submitForm = async event => {
    event.preventDefault()
  }

  return (
    <section className="px-5 xl:px-0 lg:py-10">
      <div className="max-w-[1170px] md:w-[80%] lg:w-2/3 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ================ Img Box =========== */}
          <div className="hidden  lg:flex items-center bg-primaryColor rounded-l-lg">
            <figure className="rounded-r-lg">
              <img src={signUpImg} alt="" className=" w-full rounded-l-lg" />
            </figure>
          </div>

          {/* ================ Sign Up Form =========== */}
          <div className="lg:pl-16 rounded-l-lg py-5">
            <h2 className="text-headingColor text-[22px] leading-9 font-semibold mb-8">
              Create an <span className="text-primaryColor">account</span>
            </h2>
            
            <form action="">
            <div className="mb-3">
              <input
              value={formData.name}
              onChange={handleInputChange}
              name='name'
              type="text" 
              placeholder="Your Name" 
              className="w-full border-b border-solid outline-none focus:border-primaryColor text-[16px]  px-5 py-2 leading-7" required />
            </div>
            <div className="mb-3">
              <input
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              placeholder="Your Email" 
              className="w-full border-b border-solid outline-none focus:border-primaryColor text-[16px]  px-5 py-2 leading-7" required />
            </div>
            <div className="mb-3">
              <input
              value={formData.password}
              onChange={handleInputChange}
              type="password" 
              placeholder="Your Password" 
              className="w-full border-b border-solid outline-none focus:border-primaryColor text-[16px]  px-5 py-2 leading-7" required />
            </div>
            <div className="mb-5 flex items-center justify-between">
            <label
            className="text-textColor font-bold text-[16px] leading-7"
            >
              Are you a: 
              <select 
               value={formData.role}
               onChange={handleInputChange}
              name="role" 
              id="role"
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
              <select 
              value={formData.gender}
              onChange={handleInputChange}
              name="gender" 
              id="gender"              
              className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
              >
                <option value="select">select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>

          <div className="flex items-center gap-3 mb-2">
            <figure className="w-[50px]  h-[50px] rounded-full border-2 border-solid border-primaryColor/80">
              <img src={avatar} alt="" className="w-full h-full rounded-full" />
            </figure>

            <div className="relative w-[150px] h-[50px]">
            <input 
            onChange={handleFileInputChange}
            type="file"
            accept='.jpg, .png'
            name="" id="customFile"            
            className="absolute top-0 left-0 w-full h-full opacity-0 "
             />

             <label htmlFor="customFile"
             className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-[#0066ff46] text-textColor rounded-full cursor-pointer font-semibold px-2 py-1"
             >
              Upload Photo
             </label>
            </div>
           
          </div>
            <button className="btn w-full px-5 py-2 mt-2 rounded-md">
              Submit
            </button>          
          </form>
          <div className="flex items-center justify-between pt-2">
              <hr className="h-1 w-1/3 bg-irisBlueColor" />
                <span>or</span>
              <hr className="h-1 w-1/3 bg-irisBlueColor" />
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
            <p className="mt-3 text-center">Already have an account? <a href="/login" className="text-primaryColor font-semibold">Log In</a></p>
          </div>
          
        </div>
      </div>
      
    </section>
  )
}

export default Signup