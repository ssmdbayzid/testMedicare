import { setAuthToken } from 'api/auth'
import { authContext, useAuthContext } from 'context/AuthContext'
import { AuthContext} from 'context/AuthProvider'
import React, { useContext, useState } from 'react'
import { BiLogoGoogle, BiLogoFacebook } from 'react-icons/bi'
import { toast } from 'react-toastify'
import { useLoginUserMutation } from 'state/api'


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const [loginUser] = useLoginUserMutation()
  const  {login} = useContext(AuthContext)

  const  {dispatch} = useContext(AuthContext)

  
  
  

  const handleInputChange = e => {
   setFormData({...formData, [e.target.name] : e.target.value })
  }

  const handleLogin = async (event) => {
    event.preventDefault()

          // setLoading(true)

          console.log(formData)

      // login(formData.email, formData.password)
      
        const result = await loginUser(formData)
        if(result.data){

          toast.success("Login Success")
          
          dispatch({
            type: "LOGIN_SUCCESSFULL",
            payload: {
              user: result.data.data,
              role: result.data.role,
              user: result.data.token,
            }
          })
          console.log("this is from form data", result.data)
          // signUp(formData.email, formData.password)
          // navigate("/home")
          setLoading(false)
        }
        if(result.error){
         toast.error(result.error.data.message)  
         setLoading(false)
         console.log("this is from form data",result.error.data.message)

        }
        
    }
    
   if(loading) {
    return <p>Loading.......</p>
   } 
  
  return (
    <section className="px-5 lg:px-0 md:mt-12">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md mt:pt-10">
        <div className="p-10">
          <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10 ">
            Hello <span className="text-primaryColor ">Welcome</span> Back
          </h3>
          <form
          onSubmit={handleLogin}
          className="pt-4 md:py-0">
            <div className="mb-5">
            <input
            type="email"
            name="email" required
            onChange={handleInputChange}
            value={formData.email}
            placeholder='Your email'
            className="border-b border-[#0066ff61] border-solid w-full px-4 lg:px-5 py-2 text-[16px] leading-7 placeholder:text-textColor outline-none focus:outline-none focus:border-primaryColor" />
            </div>
            <div className="mb-5">
            <input
            type="password"
            name="password" required
            onChange={handleInputChange}
            value={formData.password}
            placeholder='Your password'
            className="border-b border-[#0066ff61] border-solid w-full px-4 lg:px-5 py-2 text-[16px] leading-7 placeholder:text-textColor outline-none focus:outline-none focus:border-primaryColor" />
            </div>
            <button className="btn mt-5 px-5 py-2 justify-between text-[18px] w-full rounded-md">
            Submit
            </button>     
            <div className="flex items-center justify-between pt-3">
            <hr className="h-1 w-1/3 bg-irisBlueColor" />
            <span className="text-lg">or  </span>
            <hr className="h-1 w-1/3 bg-irisBlueColor" />
            </div>
               
          </form>

          {/* =============== Third Party Authentication ====================== */}
{/*
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
            */} 
            <p className="mt-3 text-center">Already haven't an account? <a href="/signup" className="text-primaryColor font-semibold">Sign up</a></p>
        </div>
      </div>
    </section>)
}

export default Login 