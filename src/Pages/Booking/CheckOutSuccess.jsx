import { selectCurrentUser } from 'features/auth/authSlice'
import React from 'react'
import { useSelector } from 'react-redux'
import img from '../../assets/images/payment-complete.png'
import { Link } from 'react-router-dom'

const CheckOutSuccess = () => {
  const user = useSelector(selectCurrentUser)
  console.log(user)
  return (      
      <div class="bg-white p-6 container  mx-auto h-[70vh]">
        <div>
        <img src={img} alt="" srcset="" className="w-56 mx-auto" />
        </div>
        <div class="text-center max-w-[520px] mx-auto">
            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Thank you for booking your appointment</h3>
            <p class="text-gray-600 mt-2 mb-8">We appreciate your proactive approach to your health, and we look forward to providing you with excellent care.</p>
            
            <Link to={`/users/profile/${user._id}`} class=" bg-[var(--primary-color)] py-3 px-4 rounded-full text-white text-center">
                Go to deshboard
            </Link>
        </div>
    </div>
  
  )
}

export default CheckOutSuccess
          // <a
          // href={`/users/profile/${user._id}`}
          //   className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded mmd:rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
          //   <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24"
          //     stroke="currentColor" stroke-width="2">
          //     <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          //   </svg>
          //   <span className="text-sm font-medium">
          //     Go go Dashboard
          //   </span>
          // </a>