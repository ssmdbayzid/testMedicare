import { authContext } from 'context/AuthContext'
import React, { useState } from 'react'

const ProfileSetting = () => {

  const [previewUrl, setPreviewUrl] = useState("")
  
  const [formData, setFormData] = useState(initialFormData)

  const {user, signUp} = useContext(authContext)

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

  
  

  const submitForm = async event => {
    // setLoading(true)
    event.preventDefault()            
        const result = await createUser(formData)

        if(result.data){
          signUp(formData.email, formData.password)
          toast.success("Create Account Success")          
          setPreviewUrl("")
          setFormData(initialFormData)
          navigate("/login")
          // setLoading(false)
        }
        if(result.error){
         toast.error(result.error.data.message)  
        //  setLoading(false)
        }
    }
  return (
    <div>
      <h2>Profile Setting</h2>
      <form action="">
        <div className="mb-5">
      <input
            type="email"
            name="email" required
            onChange={handleInputChange}
            value={formData.email}
            placeholder='Your email'
            className="border-b border-[#0066ff61] border-solid w-full  py-2 text-[16px] leading-7 placeholder:text-textColor outline-none focus:outline-none focus:border-primaryColor" />
        </div>
        <div className="mb-5">
      <input
            type="email"
            name="email" required
            onChange={handleInputChange}
            value={formData.email}
            placeholder='Your email'
            className="border-b border-[#0066ff61] border-solid w-full  py-2 text-[16px] leading-7 placeholder:text-textColor outline-none focus:outline-none focus:border-primaryColor" />
        </div>
        <div className="mb-5">
      <input
            type="email"
            name="email" required
            onChange={handleInputChange}
            value={formData.email}
            placeholder='Your email'
            className="border-b border-[#0066ff61] border-solid w-full  py-2 text-[16px] leading-7 placeholder:text-textColor outline-none focus:outline-none focus:border-primaryColor" />
        </div>
        <div className="mb-5">
      <input
            type="email"
            name="email" required
            onChange={handleInputChange}
            value={formData.email}
            placeholder='Your email'
            className="border-b border-[#0066ff61] border-solid w-full  py-2 text-[16px] leading-7 placeholder:text-textColor outline-none focus:outline-none focus:border-primaryColor" />
        </div>

        {/* // image uploadImage */}
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
                     
            <button            
            className="btn w-full px-5 py-2 mt-2 rounded-md">
              { !isLoading ? "Submit" :  <HashLoader size={30} color={"#ffffff"} /> }
            </button>  
      </form>

    </div>
  )
}

export default ProfileSetting