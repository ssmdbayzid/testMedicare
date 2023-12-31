import React, { useContext, useState } from 'react'
import Overview from './Overview';
import DoctorAppointment from './DoctorAppointment';
import Profile from './Profile';
import { authContext } from 'context/AuthContext';

const DoctorAccount = () => {
  const [tab, setTab] =  useState("overview");
  
  const {user, role} = useContext(authContext)
  console.log("User", user, "role", role)
  return (
    <div className="max-w-[1170px] px-5 mx-auto flex-1 py-12">
      <div className="grid md:grid-cols-3 gap-10">
        {/* ============ Sidebar ============ */}
        {/* <p>This is from doctor about</p> */}
       <div className="p-6 rounded-md bg-white shadow-xl w-full">
        <button 
        onClick={()=>setTab("overview")}
        className={`${tab === "overview" ? "text-blue-500 bg-blue-200 font-semibold" :
         "text-[#121212] bg-white"} w-full px-3 py-2 `}>Overview</button>
        <button
        onClick={()=>setTab("appointment")}        
        className={`${tab === "appointment" ? "text-blue-500 bg-blue-200 font-semibold" :
        "text-[#121212] bg-white"} w-full px-3 py-2 `}>Appointment</button>
        <button
        onClick={()=>setTab("profile")}        
        className={`${tab === "profile" ? "text-blue-500 bg-blue-200 font-semibold" :
        "text-[#121212] bg-white"} w-full px-3 py-2 `}>Profile</button>
        </div>
        <div className="md:col-span-2" >
        {tab === "overview" && <Overview />}
        {tab === "appointment" && <DoctorAppointment />}
        {tab === "profile" && <Profile user={user} />}
        </div>

      </div>
    </div>
  )
}

export default DoctorAccount