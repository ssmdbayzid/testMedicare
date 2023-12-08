import React, { useState } from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import star from '../../assets/images/Star.png'
import DoctorAbout from './DoctorAbout'
import Feedback from './Feedback'
import SidePanel from './SidePanel'
import { useParams } from 'react-router-dom'
import Loader from 'component/Loader'
import { useGetSingleDoctorQuery } from 'features/doctor/doctorApiSlice'
import  HashLoader  from 'react-spinners/HashLoader'
import { toast } from 'react-toastify'





const DoctorDetails = () => {
  const {id} = useParams();
  // const [loading, setLoading] = useState(false)
  const {data, error } = useGetSingleDoctorQuery(id)
  
    const [tab, setTab] = useState("feedback")
    let doctor;
    if(data){
      doctor = data.data
    }
    if(error){
      toast.error(error.data?.message)
    }
    
    // const {name, averageRating, bio, experience, qualification, photo, about, specialization} = data?.data

    console.log(doctor)
  return (<section className='section'>
    {
      !data ? <div className="h-screen flex items-start justify-center">

        <HashLoader size={30} color={"#ffffff"} /> 
      </div>
      : <div className="max-w-[1170px] px-5 mx-auto">
      <div className="grid md:grid-cols-3 gap-12 justify-between">
       <div className="md:col-span-2">
          <div className="flex items-center gap-5">
            <figure className="max-w-[200px] max-h-[200px] overflow-hidden">
              <img src={doctor.photo} alt="" className="w-full object-cover" />
            </figure>
            <div>
            <span className="text-[#01B5D8] bg-[#01B5D8]/20 text-irisBlueColor py-1 lg:py-2 px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded first-letter:uppercase">
              {doctor.specialization}
            </span>
            <h3 className="text-[var(--heading-color)] text-[30px] leading-12 mt-4  font-bold">
              {doctor.name}
            </h3>
            <div className="flex items-center gap-2">
              <img src={star} alt="" className="w-6 h-6" />
              
              <span className="font-semibold">{doctor?.averageRating.toFixed(2)}</span>
              ({doctor?.totalRating})
            </div>
            <p className="mt-3 text-para text-[14px] md:text-15 leading-6 lg:max-w-[390px]">{doctor.bio} </p>
          </div>
          </div>

          <div className="mt-12 border-b border-solid border-[#0066dd34]">
          <button 
            onClick={()=>setTab("about")}
          className={`${tab == "about" && "font-bold border-b-2 border-solid"} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor `}>
            About
          </button>

          <button 
            onClick={()=>setTab("feedback")}
            className={`${tab == "feedback" && "font-bold border-b-2 border-solid"} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor `}>
            Feedback
          </button>
          </div>
          <div className="mt-12">
            {
              tab === "about" ? <DoctorAbout doctor={doctor} />
              : <Feedback />
            }
           
          </div>          
        </div>
        <div>
        <SidePanel doctor={doctor} />
        </div>
      </div>
    </div>
    }
      
    </section>
  )
}

export default DoctorDetails