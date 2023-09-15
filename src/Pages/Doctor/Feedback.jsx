import React, { useState } from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import { formateDate } from '../../utils/formateDate'
import  {AiFillStar} from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false)

  return (
    <div>
      <div className="mb-12">
        <p className="text-lg leading-7 mb-7 font-semibold text-textColor">
          All reviews (272)
        </p>
        <div className="flex justify-between gap-4 mb-7">
        <div className="flex items-center gap-5">
          <figure  className="h-16 w-16 rounded-full">
            <img src={avatar} alt="" className="w-full" />
          </figure>
          <div className="">
            <h3 className="font-bold text-[18px] leading-7 text-primaryColor">Ali Ahmed</h3>
            <p className="text-[14px]"> {formateDate("06-08-2023")} </p>
          <p className="text_para text-[15px] mt-2">Good Service, Highly Recommended </p>
          </div>
        </div>
        <div className="flex gap-1">
          {[...Array(5).keys()].map((_, index)=>(
            <AiFillStar key={index} className="text-[#0067FF]" />
          ))}
        </div>
        </div>
        <div className="">
          {!showFeedbackForm &&  <button onClick={()=> setShowFeedbackForm(!showFeedbackForm)} className="btn block mx-auto">Give  Feedback</button>}
          {showFeedbackForm && <FeedbackForm showFeedbackForm={showFeedbackForm} setShowFeedbackForm={setShowFeedbackForm} />}
        </div>
      </div>
    </div>
  )
}

export default Feedback