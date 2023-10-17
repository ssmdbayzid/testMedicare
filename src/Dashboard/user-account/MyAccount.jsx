import { authContext } from 'context/AuthContext'
import React, { useContext, useState,  } from 'react'
import MyBooking from './MyBooking';
import ProfileSetting from './ProfileSetting';
import Loader from 'component/Loader';

const MyAccount = () => {
  const {user, dispatch} = useContext(authContext);
  const [tab, setTab] = useState("booking")

  const signOut = ()=>{
    dispatch({
      type:"LOGOUT"
    })
  }
  return (
    <div className="max-w-[1770px] px-5 mx-auto">
      {!user && <Loader />}
      {user && <div className="grid md:grid-cols-3 gap-10">
        <div className="pb-12 px-7 rounded-md">
          <div className="flex items-center justify-center">
            <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
              <img 
              src={user.photo}
              alt=""
              srcset="" 
              className="w-full h-full rounded-full"
              />
            </figure>
          </div>
          <div className="text-center mt-4">
            <h3 className="text-lg leading-7 text-headingColor font-bold">
              {user.name}
            </h3>
            <p className="text-textColor text-[16px] leading-6 font-medium">
              {user.email}
            </p>
            <p className="text-textColor text-[16px] leading-6 font-medium">
              Blood Type: 
              <span className="ml-2 text-red-600 text-[22px] leading-8 font-bold">
                O-
              </span>
            </p>
            </div>

            <div className="mt-12 md:mt-24">
              <button
              onClick={()=>signOut()}
              className="w-full bg-primaryColor p-3 text-lg leading-7 rounded-md text-white mb-3">
              Logout
              </button>
              <button className="w-full bg-[#181A1E] p-3 text-lg leading-7 rounded-md text-white">
              Delete account
              </button>
            </div>
          
        </div>
        <div className="md:col-span-2 md:px-7">
          <div>
            <button
            onClick={()=>setTab("booking")}
            className={` ${tab === "booking" && 'bg-primaryColor text-white'} p-2 px-5 mr-5 rounded-md text-headingColor font-semibold text-lg leading-7 border border-solid border-primaryColor  cursor-pointer`}>
              My Booking
            </button>
            <button
            onClick={()=>setTab("setting")}
            className={` ${tab === "setting" && 'bg-primaryColor text-white'} p-2 px-5 mr-5 rounded-md text-headingColor font-semibold text-lg leading-7 border border-solid border-primaryColor  cursor-pointer`}>
              Profile Setting
            </button>
            {
              tab === "booking" ? <MyBooking /> 
              : <ProfileSetting />
            }
          </div>
        </div>
      </div>}
    </div>
  )
}

export default MyAccount