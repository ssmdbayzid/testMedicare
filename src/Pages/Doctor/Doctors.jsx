import React from 'react'
import doctorsData from '../../assets/data/doctorsData'
import star from '../../assets/images/Star.png'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Testimonial from '../Home/Testimonial'
import { useGetDoctorsQuery } from 'state/api'
import Loader from 'component/Loader'

const Doctors = () => {
  const {data:doctors, isError, isLoading} = useGetDoctorsQuery()

 if(isError){
  console.log(isError)

 }

  return (
    <>
      {/* ===================== Search Doctors List  ======================== */}

    <section className="section bg-[#fff9ea">
      <div className="container text-center">
        <h2 className="heading">Find a doctor</h2>
        <div className="max-w-[570px]  mt-7 mx-auto bg-[#0066ff2c] rounded-md flex items-center  justify-between">
          <input type="search"
          className="py-4 pl-4 pr-2 bg-transparent w-full  focus:outline-none cursor-pointer placeholder:text-textColor"
          placeholder="Search Doctor"
          name="" />
          <button   
          className="py-4 px-8 bg-[var(--primary-color)] text-white mt-0 rounded-none rounded-r-md">
            Search
          </button>

        </div>
      </div>
    </section>
      {/* ===================== Doctors List  ======================== */}
  <section>
    <div className="container">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">

      {(isError || isLoading) ? <> {isError ? <p className="text-center">Something Went Error</p>  
      : <Loader/>}    </> :   <>  {doctors && doctors.data.map((doctor, index)=>
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
    </>
    }

</div>
</div>
    </section>

      {/* ===================== Petient Testimonial   ======================== */}

      <Testimonial />

    </>
  )
}

export default Doctors