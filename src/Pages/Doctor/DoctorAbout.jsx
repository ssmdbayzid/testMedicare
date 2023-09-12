import React from 'react'
import { formateDate } from '../../utils/formateDate'


const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className="text-[20px] leading-[30px] text-textColor font-semibold flex items-center  gap-2">
                About of <span className="text-irisBlueColor font-bold text-[24px] leading-9"> S S Md. Bayzid</span>
            </h3>
            <p className="text_para">
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
                        23 June, 2008
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
                        {formateDate("12-04-2010")}
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
    </div>
  )
}

export default DoctorAbout