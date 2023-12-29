import Loader from 'component/Loader'
import { useGetAllBookingQuery } from 'features/booking/bookingApiSlice'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import star from '../../assets/images/Star.png'

const MyBooking = () => {
  const {data, isError, isLoading} = useGetAllBookingQuery()
  
  console.log(data?.data?.map(item=> {
    return item.doctor
  }))
  return (
    <div  className="flex-1">
      {(isError || isLoading) ? 
      <>
      {isError ?
    <p className="text-center">Something Went Error</p>   
     : <div className=' text-center pt-[10%]'> <Loader/> </div>
     }
      </>: <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
     <h1>This is appointment's booking</h1>
     {data && data?.data?.map((doctor, index)=>
  <div key={index} className="mx-auto p-3 lg:p-5">
      <div className='w-full h-[286px]'>
      <img src={doctor.photo} alt="" className="w-full h-full rounded-xl" />
      </div>
      <h3 className="text-2xl mt-5 mb-3 font-bold">{doctor.name}</h3>
      <div className="flex items-center justify-between ">
      <span className="bg-irisBlueColor/20 font-bold text-[var(text-color)] text-lg">{doctor.specialization}</span>
        <div className="flex items-center">
        <img src={star} alt="" />
        <span className="font-semibold">{doctor.avgRating}</span>
        <span className="text-textColor">({doctor.totalRating})</span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-5">
          <p className="text-textColor">{doctor.hospital}</p>

          <Link to={`/doctors/${doctor._id}`} className="flex items-center justify-center text-lg border-2 hover:border-none hover:bg-[var(--primary-color)] hover:text-white w-10 h-10 rounded-full">
          <BsArrowRight />
          </Link>
        </div>
  </div>)}   
</div>
      </>}
    </div>
  )
}

export default MyBooking