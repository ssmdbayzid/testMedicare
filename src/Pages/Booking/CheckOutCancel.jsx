import React from 'react'

const CheckOutCancel = () => {
  const img = "https://img.freepik.com/free-vector/warning-concept-illustration_114360-1551.jpg?w=826&t=st=1703516472~exp=1703517072~hmac=f22782877283b7e9dad094ead123cf3f0f93fca0a2b2275a75bc65dbfa0bab8d"
  return (
    <div className="flex-1 flex  justify-center " >
      <div className='text-center'>

      <div className='w-80 md:w-96 mx-auto'>
      <img src={img} alt="" className='w-full' />
      </div>
      <h1 className="text-2xl font-bold mb-3">Payment failed</h1>
      <p className='text-[var(--textColor)] mt-8 mb-3'>The payment was unsuccessful due to an abnormally. Please try <br />
      agiain later or use another payment method.      
      </p>

      <button className='btn bg-primary text-white w-64 mb-3'>
        Try Again
      </button>
<br />
      <a href="/contact" className='text-primary font-semibold'>Need Help ?</a>
      </div>
      </div>
  )
}

export default CheckOutCancel