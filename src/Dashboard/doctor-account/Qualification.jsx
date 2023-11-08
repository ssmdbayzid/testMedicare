import React from 'react'
import {BsTrash} from 'react-icons/bs'

const Qualification = ({setOpen}) => {
  return (
    <div>
      <p className="my-3">Qualification</p>
        
        <div className="flex justify-between items-center gap-10">
          <div className="flex flex-col w-full">
          <label className="mb-2" htmlFor="startingDate">Starting Date</label>
          <input type="date" name="" id="" className=" border px-5 py-3" />
          </div>
          <div className="flex flex-col w-full">
          <label className="mb-2" htmlFor="startingDate">Ending Date</label>
          <input type="date" name="" id="" className=" border px-5 py-3" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-10 mt-3">
        <div className="flex flex-col w-full">
          <label className="mb-2" htmlFor="startingDate">Starting Date</label>
          <input type="date" name="" id="" className=" border px-5 py-3" />
          </div>
          <div className="flex flex-col w-full">
          <label className="mb-2" htmlFor="startingDate">Ending Date</label>
          <input type="date" name="" id="" className=" border px-5 py-3" />
          </div>
        </div>
        
        <div
        onClick={()=>setOpen(false)}
        className="w-8 rounded-full h-8 bg-red-600 text-white flex items-center justify-center cursor-pointer mt-5">
        <BsTrash className="text-lg"/ >
        </div>

    </div>
  )
}

export default Qualification