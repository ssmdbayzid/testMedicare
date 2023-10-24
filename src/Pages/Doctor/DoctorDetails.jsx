import React, { useState } from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import star from '../../assets/images/Star.png'
import DoctorAbout from './DoctorAbout'
import Feedback from './Feedback'
import SidePanel from './SidePanel'
import { useGetSingleDoctorQuery } from 'state/api'
import { useParams } from 'react-router-dom'


const DoctorDetails = () => {
  const {id} = useParams();
  console.log("params id", id)
  const {data, isLoading, isError} = useGetSingleDoctorQuery(id)
    const [tab, setTab] = useState("about")

    


  return (<section className='section'>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-12 justify-between">
         {data &&  <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px] overflow-hidden">
                <img src={data.data.photo} alt="" className="w-full object-cover" />
              </figure>
              <div>
              <span className="bg-[#CCF0F3] text-irisBlueColor py-1 lg:py-2 px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                Sergeon
              </span>
              <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                {data.data.name}
              </h3>
              <div className="flex items-center gap-2">
                <img src={star} alt="" className="w-6 h-6" />
                <span className="font-semibold">{data.data.averageRating}</span>
                (292)
              </div>
              <p className="mt-3 text-_para text-[14px] md:text-15 leading-6 lg:max-w-[390px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minima ut laboriosam porro tenetur mollitia, </p>
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
                tab === "about" && <DoctorAbout doctor={data.data} />
              }
              {
                tab === "feedback" && <Feedback />
              }
            </div>          
          </div>}
          <div>
          <SidePanel />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorDetails