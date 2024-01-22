import React from 'react'
import img from '../../assets/images/cancel-vactor.jpg'
import { Link } from 'react-router-dom'

const CheckOutFail = () => {
    
  return (
    <div className="flex-1 flex  justify-center " >
      <div className='text-center'>

      <div className='w-40 md:w-56 mx-auto'>
      <img src={img} alt="" className='w-full' />
      </div>
      <h1 className="text-2xl font-bold mb-3">Payment failed</h1>
      <p className='text-[var(--textColor)] mt-8 mb-3'>The payment was Failed<br />
      agiain later or use another payment method.      
      </p>

      <Link to={"/doctors"} className='text-lg bg-[var(--primary-color)]  text-white px-12 py-2 rounded-md cursor-pointer mx-auto'>
        Try Again
        </Link>     
      </div>
      </div>
  )
}

export default CheckOutFail