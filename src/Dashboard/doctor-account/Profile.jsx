import React, { useState } from 'react'

import {BsTrash} from 'react-icons/bs'
import Qualification from './Qualification'

const initialState = {
  startDate: "",
  endDate: "",
  degree: "",
  university: "",
}


const Profile = () => {
  const [qualification, setQualification] = useState([{
    startDate : "", endDate: "", degree: "", university: "",
  }])
  const [data, setData] = useState(initialState)
  const [open, setOpen] = useState(false);

  const addQualification = () => {
    const newQualification = {
      startDate: data.startDate,
      endDate: data.endDate,
      degree: data.degree,
      university: data.university,
    }
    if(qualification.length === 1 && Object.values(qualification[0]).every(value=> value === "")){
    setQualification([{...newQualification, id:qualification.length}])
    setOpen(false)
    }else{
      setQualification([...qualification, {...newQualification, id:qualification.length + 1}])
    setOpen(false)
    }    
  }
  const handleOnChange = e => {
    setData({...data, [e.target.name]: e.target.value})
  }

  console.log("Qualification", qualification)
  console.log("onChange", data.startDate)

  return (
    <div>
        <p className="bg-yellow-100 py-1 px-2">To get approval please complete your profile. We'll review manually and approve within 3 days</p>
      <h2 className="text-2xl text-[var(--text-color)] font-bold mt-3">Profile Information</h2>
      <form action="/" className="my-3">
        <div className="mb-3">
        <label htmlFor="name" 
        className="text-[var(--text-color)]">Name <span className="text-red-500">*</span></label> <br />

        <input type="text" name="name" id='name'
        placeholder="Your Name" className="w-full border px-2 py-2 text-[18px] text-[#121212] rounded-lg mt-2" />
        </div>
        <div className="mb-3">
        <label htmlFor="email" 
        className="text-[var(--text-color)]">Email <span className="text-red-500">*</span></label> <br />

        <input type="email" name="email" id='email'
        placeholder="Your Email" className="w-full border px-2 py-2 text-[18px] text-[#121212] rounded-lg mt-2" />
        </div>
        <div className="mb-3">
        <label htmlFor="phone" 
        className="text-[var(--text-color)]">Phone <span className="text-red-500">*</span></label> <br />
        <input type="text" name="phone" id="phone"
        placeholder="Your Name" className="w-full border px-2 py-2 text-[18px] text-[#121212] rounded-lg mt-2" />
        </div>
        <div className="mb-3">
        <label  htmlFor="bio" 
        className="text-[var(--text-color)] mb-4">Bio <span className="text-red-500">*</span></label> <br />
        <textarea type="text" name="bio" id="bio" rows={3}
        placeholder="Your Bio" className="w-full border px-2 py-2 text-[18px] text-[#121212] rounded-lg mt-2" />
        </div>
        <div className="flex items-center justify-between gap-8">
          {/* // Gender  */}
          <div className="flex flex-col w-full">
          <label className="mb-4" htmlFor="gender">Gender</label>
          <select name="" id="gender" className="w-full p-3 border">
            <option value="select">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          </div>
          {/* // Specialization  */}
          <div className="flex flex-col w-full">
          <label className="mb-4" htmlFor="specialization">Specialization</label>
          <select name="" id="specialization" className="w-full p-3 border">
            <option value="select">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          </div>
          {/* // Ticket Price  */}
          <div className="flex flex-col w-full">
          <label className="mb-4" htmlFor="ticket-price">Ticket Price</label>
          <input type="number" className="numberInput appearance-none leading-tight w-full border p-3 focus:outline-none numberInput selection:focus:shadow-outline" />
          </div>          
        </div>
        {/* ====== Qualification======== */}
        <div>
        {(qualification && Object.values(qualification[0]).every(value=> value !== "")) && 
        <Qualification  qualification={qualification} setQualification={setQualification}/>
        } 
        </div>
        <div>
        
        {open && 
        <div>
      <p className="my-3">Qualification</p>
        {/* ======= Starting date ===== */}
        <div className="flex justify-between items-center gap-10">
          <div className="flex flex-col w-full">
          <label className="mb-2" htmlFor="startDate">Starting Date</label>
          <input
          onChange={handleOnChange}
          type="date" name="startDate" id="startDate" className=" border px-5 py-3" required/>
          </div>
          <div className="flex flex-col w-full">
          <label className="mb-2" htmlFor="endDate">Ending Date</label>
          <input
          onChange={handleOnChange}          
          type="date" name="endDate" id="endDate" className=" border px-5 py-3" required/>
          </div>
        </div>
        {/* ========== Degree & University Name == */}
        <div className="flex items-center justify-between gap-10 mt-3">
        <div className="flex flex-col w-full">
          <label className="mb-2" htmlFor="degree">Degree</label>
          <input 
          onChange={handleOnChange}                    
          type="text" placeholder="Degree" name="degree" id="degree" className=" border px-5 py-3" required />
          </div>
          <div className="flex flex-col w-full">
          <label className="mb-2" htmlFor="university">University</label>
          <input 
          onChange={handleOnChange}                              
          type="text" placeholder="University Name" name="university" id="university" className=" border px-5 py-3" required />
          </div>
        </div>
        <div className="flex items-center gap-10">
        <div  
        onClick={()=>addQualification()}      
        className="btn">Save</div>
        <div
        onClick={()=>setOpen(false)}
        className="w-8 rounded-full h-8 bg-red-600 text-white flex items-center justify-center cursor-pointer">
        <BsTrash className="text-lg"/ >
        </div>
        </div>
    </div>
        }
        <p
        onClick={()=>setOpen(true)}
         className="px-2 border py-3 bg-[#121212]/90 hover:bg-[#121212] text-white w-28 text-center mt-3 cursor-pointer">Qualification</p>
        </div>

      </form>
      
    </div>
  )
}

export default Profile