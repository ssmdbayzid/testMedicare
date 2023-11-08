import React from 'react'
import {BsTrash} from 'react-icons/bs'

const Qualification = ({setOpen}) => {
  return (
    <div>Qualification
        <br />
        
        <div
        onClick={()=>setOpen(false)}
        className="w-8 rounded-full h-8 bg-red-600 text-white flex items-center justify-center cursor-pointer">
        <BsTrash className="text-lg"/ >
        </div>

    </div>
  )
}

export default Qualification