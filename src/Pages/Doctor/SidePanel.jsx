import React from 'react'

const SidePanel = () => {
  return (
    <div className="p-4 md:p-5 rounded-md shadow-xl border border-solid">
      <div className="flex justify-between items-center mb-3">
        <p className=" font-semibold text-[15px]">Ticket Price</p>
        <p className="text-[18px] md:text-[22px] leading-6 md:leading-8 font-bold">500 BDT</p>
      </div>
      <p className="text-[16px] lg:text-[18px] font-semibold">Available Time Slots :</p>

      <div className="flex justify-between items-center text-[14px] lg:text-[16px] mt-5">
        <p>Sunday</p>
        <p>4:00 PM - 9:30 PM </p>
      </div>
      <div className="flex justify-between items-center text-[14px] lg:text-[16px] mt-5">
        <p>Sunday</p>
        <p>4:00 PM - 9:30 PM </p>
      </div>
      <div className="flex justify-between items-center text-[14px] lg:text-[16px] mt-5">
        <p>Sunday</p>
        <p>4:00 PM - 9:30 PM </p>
      </div>
      <div className="btn rounded-md text-center px-3 text-[15px] md:text-lg cursor-pointer">Book Appointment</div>
    </div>
  )
}

export default SidePanel