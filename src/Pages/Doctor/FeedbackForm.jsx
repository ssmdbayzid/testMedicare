import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai';

const FeedbackForm = ({showFeedbackForm, setShowFeedbackForm}) => {
const [rating, setRating] = useState(0)
const [hover, setHover] = useState(0)

console.log(hover)
  return (
    <form action=''>
        <div>
            <h3>How would you rate the overall experience?</h3>
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
        </div>
    <button onClick={()=> setShowFeedbackForm(!showFeedbackForm)} className="btn">Submit</button>
    </form>
  )
}

export default FeedbackForm