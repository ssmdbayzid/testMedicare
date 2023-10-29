import { authContext } from 'context/AuthContext'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HashLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { useUpdateUserMutation } from 'state/api'
import imgUploadToImgBB from 'utils/uploadImage'
import avatar from '../../assets/images/avatar-icon.png'

const initialFormData  =
  {
    name: "",
    email: "",
    password: "",
    photo: "",
    gender: "",    
    bloodGroup: "",
  }

const ProfileSetting = () => {
  const [updateUser, {isLoading}] = useUpdateUserMutation()
  const [previewUrl, setPreviewUrl] = useState("")
  const [formData, setFormData] = useState(initialFormData)
  
  const {user} = useContext(authContext)
  
  useEffect(()=>{

    if(user){        
       const existUserData = {
        name: user.name,
        email: user.email,        
        photo: "",
        gender: user.gender,
        bloodGroup: user.bloodGroup ? user.bloodGroup :"",        
      }
      setFormData(existUserData)      

      
    }
  },[])
  const navigate = useNavigate()

  const handleInputChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleFileInputChange = async e =>{
    
    const file = e.target.files[0];
    const imgUrl = await imgUploadToImgBB(file)
    
    setPreviewUrl(imgUrl);
    setFormData({...formData, photo:imgUrl})
    
  }

  
  console.log(user)

  const submitForm = async event => {
    // setLoading(true)
    event.preventDefault()            
        const result = await updateUser(formData)

        if(result.data){
          
          toast.success("Create Account Success")          
          setPreviewUrl("")
          setFormData(initialFormData)
          navigate("/users/profile/me")
          
        }
        if(result.error){
         toast.error(result.error.data.message)  
        //  setLoading(false)
        }
    }

    console.log(formData)
  return (
    <div>
      <h2 className="text-2xl mt-8 font-bold">Profile Setting</h2>
      <form action="">
        <div className="mb-5">
      <input
            type="text"
            name="name" required
            onChange={handleInputChange}
            value={formData.name}
            placeholder={formData.name}
            className="border-b border-[#0066ff61] border-solid w-full  py-2 text-[16px] leading-7 placeholder:text-textColor outline-none focus:outline-none focus:border-primaryColor" />
        </div>
        <div className="mb-5">
      <input
            type="email"
            name="email" required
            onChange={handleInputChange}
            value={formData.email}            
            className="border-b border-[#0066ff61] border-solid w-full  py-2 text-[16px] leading-7 placeholder:text-textColor outline-none focus:outline-none focus:border-primaryColor" />
        </div>
        <div className="mb-5">
      <input
            type="password"
            name="password" 
            onChange={handleInputChange}
            value={formData.password && formData.password}
            placeholder={formData.password ? formData.password : "Password"}
            required
            className="border-b border-[#0066ff61] border-solid w-full  py-2 text-[16px] leading-7 placeholder:text-textColor outline-none focus:outline-none focus:border-primaryColor" />
        </div>
        <div className="mb-5">
      <input
            type="text"
            name="bloodGroup" required
            onChange={handleInputChange}
            value={formData.bloodGroup && formData.bloodGroup}
            placeholder={formData.bloodGroup ? formData.bloodGroup : "Blood Group"}
            className="border-b border-[#0066ff61] border-solid w-full  py-2 text-[16px] leading-7 placeholder:text-textColor outline-none focus:outline-none focus:border-primaryColor" />
        </div>
        <div className="flex mb-10">
        <label htmlFor="gender" className="mr-5">Gender</label>
        {/* background: "var(--primary-color)", */}
        <select         
        name="gender" id="gender" value={formData.gender} onChange={handleInputChange} className="text-white w-3/12 text-center text-[var(--my-color)] bg-[var(--primary-color)]">
          <option value="male" className="" >Male</option>
          <option value="female" selected className="">Female</option>
          <option value="other" className="">Other</option>
        </select>
        </div>
        

        {/* // image uploadImage */}
        <div className="flex gap-5 items-center">
        {previewUrl && <figure className="w-[75px]  h-[75px] rounded-full border-2 border-solid border-primaryColor/80">
              <img src={previewUrl ? previewUrl : avatar} alt="" className="w-full h-full rounded-md" />
            </figure>}
        
        <div className="relative w-[150px] h-[50px]">
        
            <input 
            onChange={handleFileInputChange}
            type="file"
            accept='.jpg, .png'
            name="" id="customFile"
            required            
            className="absolute top-0 left-0 w-full h-full opacity-0 "
             />

             <label htmlFor="customFile"
             className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-[#0066ff46] text-textColor rounded-full cursor-pointer font-semibold px-2 py-1"
             >
              Upload Photo
             </label>
            </div>
            </div>
                     
            <button            
            className="btn w-full px-5 py-2 mt-2 rounded-md">
              { !isLoading ? "Submit" :  <HashLoader size={30} color={"#ffffff"} /> }
            </button>  
      </form>

    </div>
  )
}

export default ProfileSetting