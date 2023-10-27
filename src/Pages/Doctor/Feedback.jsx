import React, { useEffect, useState } from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import { formateDate } from '../../utils/formateDate'
import  {AiFillStar} from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'
import { useParams } from 'react-router-dom'
import { useGetAllReviewsQuery } from 'state/api'

const Feedback = () => {
  const {id} = useParams()
  const [showFeedbackForm, setShowFeedbackForm] = useState(false)
  const [reviews, setReviews] = useState(null)

  const {data, isLoading, isError} = useGetAllReviewsQuery()

              
    useEffect(()=>{
      if(data){
        const doctor = data.data.filter((doctor)=> doctor.doctor === id)
        console.log(doctor)
        setReviews(doctor);  
      }
    },[data])  
    
    

  return (
    <div>
      <div className="mb-12">
        <p className="text-lg leading-7 mb-7 font-semibold text-textColor">
          All reviews (272)
        </p>
        <div className="flex flex-col gap-4 mb-7">
       {/* ---------- Given reviews ------------- */}
      
      {reviews && reviews.map((review, index)=><div key={index} className="flex justify-between gap-5">
        <div  className="flex gap-5">
          <figure  className="h-12 w-12 ">
            <img src={review.user.photo} alt="" className="w-full h-full rounded-full" />
          </figure>
          <div className="">
            <h3 className="font-bold text-[16px] leading-7 text-primaryColor">{review.user.name}</h3>
            
            <div className="flex items-center gap-3">
              {/* // rating */}
            <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index)=>(
              <AiFillStar key={index} className="text-[#515152] text-[16px]" />
            ))}
          </div>
            <p className="text-[14px]"> {formateDate("06-08-2023")} </p>
            </div>
            
          <p className="text_para mt-1">{review.reviewText} </p>
          </div>
        </div>

          
        </div>)}
       
     {/* <div  className="flex items-center gap-5">
          <figure  className="h-16 w-16 rounded-full">
            <img src={avatar} alt="" className="w-full" />
          </figure>
          <div className="">
            <h3 className="font-bold text-[18px] leading-7 text-primaryColor">S S Md. Bayzid</h3>
            <p className="text-[14px]"> {formateDate("06-08-2023")} </p>
          <p className="text_para text-[15px] mt-2">This is feedback</p>
          </div>
        </div>
        */}
        
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