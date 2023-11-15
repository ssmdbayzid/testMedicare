import moment from 'moment'
import React from 'react'

const SidePanel = ({doctor}) => {
  return (
    <div className="p-4 md:p-5 rounded-md shadow-xl border border-solid">
      <div className="flex justify-between items-center mb-3">
        <p className=" font-semibold text-[15px]">Ticket Price</p>
        <p className="text-[18px] md:text-[22px] leading-6 md:leading-8 font-bold">{doctor?.ticketPrice} BDT</p>
      </div>
      <p className="text-[16px] lg:text-[18px] font-semibold">Available Time Slots :</p>    
     {
      doctor && doctor.timeSlots.map((slot, index)=>
      <div key={index} className="flex justify-between items-center text-[14px] lg:text-[16px] mt-5">
      <p className="first-letter:capitalize">{slot.day}</p>
      <p> {moment(slot.startingTime, "HH:mm").format("hh:mm A")} - {moment(slot.endingTime, "HH:mm").format("hh:mm A")} </p>
    </div>)}      
      <div className="btn rounded-md text-center px-3 text-[15px] md:text-lg cursor-pointer">Book Appointment</div>
    </div>
  )
}

export default SidePanel