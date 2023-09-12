import React from 'react'
import doctorsData from '../../assets/data/doctorsData'
import star from '../../assets/images/Star.png'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Testimonial from '../Home/Testimonial'


const Doctors = () => {
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
          name="" id="" />
          <button className="btn mt-0 rounded-none rounded-r-md">
            Search
          </button>

        </div>
      </div>
    </section>
      {/* ===================== Doctors List  ======================== */}
  <section>
    <div className="container">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">

{doctorsData && doctorsData.map((data, index)=>
  <div key={index} className="mx-auto p-3 lg:p-5">
      <div>
      <img src={data.photo} alt="" className="w-full" />
      </div>
      <h3 className="text-xl mt-5 mb-3 font-bold">{data.name}</h3>
      <div className="flex items-center justify-between ">
      <span className="px-2 rounded-md py-2 text-sm text-irisBlueColor bg-irisBlueColor/20 font-bold">{data.specialization}</span>
        <div className="flex items-center">
        <img src={star} alt="" />
        <span className="font-semibold">{data.avgRating}</span>
        <span className="text-textColor">({data.totalRating})</span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-5">
          <p className="text-textColor">{data.hospital}</p>

          <Link to="/doctors" className="flex items-center justify-center text-lg border-2 hover:border-none hover:bg-primaryColor hover:text-white w-10 h-10 rounded-full">
          <BsArrowRight />
          </Link>
        </div>
  </div>)}
</div>
</div>
    </section>

      {/* ===================== Petient Testimonial   ======================== */}

      <Testimonial />

    </>
  )
}

export default Doctors