import React from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import { formateDate } from '../../utils/formateDate'

const Feedback = () => {
  return (
    <div>
      <div className="mb-12">
        <p className="text-lg leading-7 mb-7 font-semibold text-textColor">
          All reviews (272)
        </p>

        <div className="flex items-center gap-5">
          <figure  className="h-10 w-10 rounded-full">
            <img src={avatar} alt="" className="w-full" />
          </figure>
          <div className="">
            <h3 className="font-bold text-[18px] leading-7 text-primaryColor">Ali Ahmed</h3>
            <p className="text-[14px]"> {formateDate("06-08-2023")} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback