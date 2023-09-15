import React from 'react'
import { formateDate } from '../../utils/formateDate'


const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className="text-[20px] leading-[30px] text-textColor font-semibold flex items-center  gap-2">
                About of <span className="text-irisBlueColor font-bold text-[24px] leading-9"> S S Md. Bayzid</span>
            </h3>
            <p className="text_para text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ratione quo perferendis numquam ut vitae asperiores exercitationem magni, deserunt soluta assumenda expedita consequatur amet eum adipisci nostrum architecto? Facilis, laboriosam!
            </p>
        </div>
        <div className="mt-12">
            <h3 className="text-[20px] leading-7 text-headingColor font-semibold">
                Education
            </h3>

            <ul className="pt-4 md:p-5">
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
                <div className="">
                    <span className="text-irisBlueColor  text-[15px] leading-6 font-semibold">
                    {formateDate("09-13-2014")} - {formateDate("09-12-2016")}
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">
                        PHD in Surgeon
                    </p>
                </div>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                    New Apollo Hospital, New York
                </p>
            </li>
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
                <div className="">
                    <span className="text-irisBlueColor  text-[15px] leading-6 font-semibold">
                    {formateDate("07-04-2010")} - {formateDate("09-02-2014")}
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">
                        PHD in Surgeon
                    </p>
                </div>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                    New Apollo Hospital, New York
                </p>
            </li>
            </ul>
        </div>
        <div className="mt-12">
        <h3 className="text-[20px] leading-7 text-headingColor font-semibold">
                Experience
            </h3>
            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-secondaryColor text-[16px] leading-[25px] font-semibold">                    
                    {formateDate("08-12-2010")} - {formateDate("08-12-2014")}
                    </span>
                    <p className="text-[16px] mt-3 leading-8 semibold">
                        Sr. Sergion
                    </p>
                    <p className="text-sm font-semibold">New Apollo Hospital, New  York</p>
                </li>
                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-secondaryColor text-[16px] leading-[25px] font-semibold">                    
                    {formateDate("08-12-2010")} - {formateDate("08-12-2014")}
                    </span>
                    <p className="text-[16px] mt-3 leading-8 semibold">
                        Sr. Sergion
                    </p>
                    <p className="text-sm font-semibold">New Apollo Hospital, New  York</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default DoctorAbout