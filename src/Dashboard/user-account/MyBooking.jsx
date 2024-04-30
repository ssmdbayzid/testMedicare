import Loader from 'component/Loader'
import { useGetAllBookingQuery } from 'features/booking/bookingApiSlice'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import star from '../../assets/images/Star.png'
import moment from 'moment'

const MyBooking = ({user}) => {
  console.log(user)
  
  return (
    <div  className="">
      
     <h1 className='py-2 font-bold text-3xl mt-3 bg-blue-200 text-blue-700 text-center'>All Appointments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
     {user && user?.appointment?.map((data, index)=>
    <div key={index} className="mx-auto w-full">
      <div className='w-full h-[286px]'>
      <img src={data?.doctor.photo} alt="" className="w-full h-full rounded-xl" />
      </div>
      <h3 className="text-2xl md:text-xl mt-5 mb-3 font-bold">{data.doctor.name}</h3>
      <div className="flex items-center justify-between ">
      {/* <span className="bg-irisBlueColor/20 font-bold text-[var(text-color)] text-lg">{data.doctor.specialization}</span> */}
      <span className="text-[#01B5D8] bg-[#01B5D8]/20 text-irisBlueColor py-1 px-2 text-[12px] leading-4 lg:text-[14px] lg:leading-7 font-semibold rounded first-letter:uppercase">
              {data.doctor.specialization}
            </span>
            <div className="flex items-center">
         <img src={star} alt="" />
          <span className='text-md ml-1'>{(data.doctor.averageRating).toFixed(2)} ({data.doctor.totalRating})</span>
            </div>
      </div>
        <div className="flex justify-between mt-1">          
        <span className="font-semibold">Date:</span>
        <span className="font-semibold text-primary">{moment(data.appointmentDate).format('DD MMM YYYY')}</span>
        </div>
        <div className="flex justify-between mt-1">          
        <span className="font-semibold">Time:</span>        
        <span className="text-textColor text-primary">{moment(data.time, "HH:mm").format("hh:mm A")}</span>
        </div>
      <Link
      to={`/doctors/${data.doctor._id}`}
      className="group flex bg-[var(--primary-color)] text-white items-center justify-between mt-5 p-1 rounded-r-full">
          
          <p className="text-textColor pl-1">About Doctor</p>

          <p  className="flex items-center justify-center text-lg border-2 group-hover:border-none group-hover:bg-[var(--primary-color)] hover:text-white w-10 h-10 rounded-full">
          <BsArrowRight />
          </p>
        </Link>
  </div>)}   
</div>

    </div>
  )
}

export default MyBooking