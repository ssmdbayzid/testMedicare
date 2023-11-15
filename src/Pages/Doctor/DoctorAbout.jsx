import React from 'react'
import { formateDate } from '../../utils/formateDate'


const DoctorAbout = ({doctor}) => {
    const {name, averageRating, bio, experience, qualification, photo, about, specialization} = doctor
  return (
    <div>
        <div>
            <h3 className="text-[20px] leading-[30px] text-textColor font-semibold flex items-center  gap-2">
                About of <span className="text-irisBlueColor font-bold text-[24px] leading-9"> {name}</span>
            </h3>
            <p className="text_para text-justify">
               {about}
            </p>
        </div>
        <div className="mt-12">
            <h3 className="text-[20px] leading-7 text-headingColor font-semibold">
                Education
            </h3>

        {/* ========== Education ================ */}
            <ul className="pt-4 md:p-5">
           {qualification && qualification.map((data, index)=>
           <li key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
                <div className="">
                    <span className="text-irisBlueColor  text-[15px] leading-6 font-semibold">
                    {formateDate("09-13-2014")} - {formateDate("09-12-2016")}
                    {data.startingTime}
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">
                        {data.degree}
                    </p>
                </div>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                    {data.university}
                </p>
            </li>       )}   
            </ul>
        </div>
        <div className="mt-12">
        <h3 className="text-[20px] leading-7 text-headingColor font-semibold">
                Experience
            </h3>
            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                {experience && experience.map((exp, index)=><li key={index} className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-secondaryColor text-[16px] leading-[25px] font-semibold">                    
                    {/* {formateDate("08-12-2010")} - {formateDate("08-12-2014")} */}
                    {exp.startDate} - {exp.endDate}
                    </span>
                    <p className="text-[16px] mt-3 leading-8 semibold">
                       {exp.position}
                    </p>
                    <p className="text-sm font-semibold">{exp.hospital}</p>
                </li> )}               
            </ul>
        </div>
    </div>
  )
}

export default DoctorAbout