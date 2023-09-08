import React from 'react'
import doctorsData from '../../assets/data/doctorsData'
import star from '../../assets/images/Star.png'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Doctors = () => {
  return (
    <div className="container">
        <div className="xl:w-[470px] mx-auto">

        <h2 className="heading text-center">Our Great Doctors</h2>
        <p className="text_para text-center">World class care for everyone  Our health System offers unmatched export health care</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 mt-12">

        {doctorsData && doctorsData.map((data, index)=>
          <div key={index} className="mx-auto p-3 lg:p-5">
              <div>
              <img src={data.photo} alt="" className="w-full" />
              </div>
              <h3 className="text-2xl mt-5 mb-3 font-bold">{data.name}</h3>
              <div className="flex items-center justify-between ">
              <span className="px-5 rounded-md py-2 text-iris text-irisBlueColor bg-irisBlueColor/20 font-bold">{data.specialization}</span>
                <div className="flex items-center gap-2">
                <img src={star} alt="" />
                <span className="font-bold">{data.avgRating}</span>
                <span className="text-textColor">({data.totalRating})</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-5">
                  <p className="text-textColor">{data.hospital}</p>

                  <Link to="doctors" className="flex items-center justify-center text-lg border-2 hover:border-none hover:bg-primaryColor hover:text-white w-10 h-10 rounded-full">
                  <BsArrowRight />
                  </Link>
                </div>
          </div>)}
        </div>
    </div>
  )
}

export default Doctors
