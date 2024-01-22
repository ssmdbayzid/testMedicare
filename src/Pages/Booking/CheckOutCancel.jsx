import React from 'react'
import img from '../../assets/images/payment-canceled.png'
import { Link } from 'react-router-dom'


const CheckOutCancel = () => {
  
  return (
    <div className="h-[70vh] flex  justify-center " >
      <div className='text-center mt-10'>
      <div className='w-40 md:w-56 mx-auto'>
      <img src={img} alt="" className='w-full' />
      </div>
      
      <p className=' md:max-w-[530px] text-[var(--textColor)] mt-2 mb-3'>Thank you for your prompt payment; we appreciate your commitment to maintaining a seamless financial relationship for the excellent care provided.
      </p>
      
      <Link to={"/doctors"} className='text-lg bg-[var(--primary-color)]  text-white px-12 py-1 cursor-pointer mx-auto'>
        Try Again
        </Link>

      </div>
      </div>
  )
}

export default CheckOutCancel