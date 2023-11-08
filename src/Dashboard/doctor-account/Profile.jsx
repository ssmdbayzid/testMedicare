import React, { useState } from 'react'
import Qualification from './Qualification';

const Profile = () => {
  const [qualificationData, setQualificationData] = useState({
    startingDate : "",
    endingDate: "",
    degree: "",
    university: "",
  })
  const [open, setOpen] = useState(false);

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
        <label className="mb-4" htmlFor="ticket-price">Qualification</label>
        {open &&  < Qualification setOpen={setOpen} />}
        <p
        onClick={()=>setOpen(true)}
         className="px-2 border py-3 bg-[#121212]/90 hover:bg-[#121212] text-white w-28 text-center mt-3 cursor-pointer">Qualification</p>
        </div>

      </form>
      
    </div>
  )
}

export default Profile