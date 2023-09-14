import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai';

const FeedbackForm = ({showFeedbackForm, setShowFeedbackForm}) => {
const [rating, setRating] = useState(0)
const [hover, setHover] = useState(0)

const [showFeedback, setShowFeedback] = useState("")

console.log(hover)

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        console.log(showFeedback, rating)
    }
  return (
    <form onSubmit={handleFormSubmit}>
        <div>
            <p className="mb-2">How would you rate the overall experience?<span className="text-red-600">*</span></p>
            {[...Array(5).keys().map((_, index)=>{
                index += 1;
                return (
                    <button 
                    key={index}
                    type="button"
                    className={`${index <= ((rating && hover) || hover)
                    
                    // className={`${index ==  hover
                        ? "text-secondaryColor"
                        : "text-textColor"
                        } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                        onClick={()=> setRating(index)}
                        onMouseEnter={()=>setHover(index)}
                        onMouseLeave={()=> { console.log("this is from mouse leave"); setHover(rating)}}
                        onDoubleClick={()=> {
                            setHover(0);
                            setRating(0);
                        }}
                    >
                        <span> <AiFillStar /> </span>
                    </button>
                )
            })]}

            <p className="my-3">Share your Feedback or Suggestion<span className="text-red-600">*</span></p>
            <textarea type="textarea"
            onChange={(e)=> setShowFeedback(e.target.value)}

            className="w-full border border-solid p-4 text-textColor"
            rows="5" 
            placeholder="Write your  feedback or suggestion here" name="" id="" />

        </div>
    <button 
    
    className="btn">Submit</button>
    </form>
  )
}

export default FeedbackForm