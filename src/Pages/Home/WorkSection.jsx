import React from 'react'
import img1 from '../../assets/images/icon01.png'
import img2 from '../../assets/images/icon02.png'
import img3 from '../../assets/images/icon03.png'
import { Link } from 'react-router-dom'

import {BsArrowRight} from 'react-icons/bs'
const WorkSection = () => {
  return (
    <div className="container mt-12">
        {/* ======= Heading ================= */}

        <div className="xl:w-[470px] mx-auto mb-12">
            <h2 className="mt-8 heading text-center">Providing the best <br /> medical services</h2>
            <p className="text_para text-center">World class care for everyone our health System offers unmatched export health care</p>
        </div>

        {/* ======= Work Section Content ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* ============= Works Content 1 ============= */}
            <div>
                <img src={img1} alt="" className=" mx-auto"/>
                <h2 className="mt-8 text-headingColor text-2xl font-bold text-center">Find a Doctor</h2>
                <p className="text_para text-center">World class care for everyone our health System offers unmatched export health care</p>
                <Link to="/doctors" className="flex  items-center justify-center mx-auto mt-5 border-2 h-10 w-10 rounded-full hover:bg-primaryColor hover:border-none hover:text-white"><BsArrowRight /></Link>
            </div>
            {/* ============= Works Content 1 ============= */}
            <div>
                <img src={img2} alt="" className=" mx-auto"/>
                <h2 className="mt-8 text-headingColor text-2xl font-bold text-center">Find a Doctor</h2>
                <p className="text_para text-center">World class care for everyone our health System offers unmatched export health care</p>
                <Link to="/doctors" className="flex  items-center justify-center mx-auto mt-5 border-2 h-10 w-10 rounded-full hover:bg-primaryColor hover:border-none hover:text-white"><BsArrowRight /></Link>
            </div>
            {/* ============= Works Content 1 ============= */}
            <div>
                <img src={img3} alt="" className=" mx-auto"/>
                <h2 className="mt-8 text-headingColor text-2xl font-bold text-center">Find a Doctor</h2>
                <p className="text_para text-center">World class care for everyone our health System offers unmatched export health care</p>
                <Link to="/doctors" className="flex  items-center justify-center mx-auto mt-5 border-2 h-10 w-10 rounded-full hover:bg-primaryColor hover:border-none hover:text-white"><BsArrowRight /></Link>
            </div>
        </div>


    </div>
  )
}

export default WorkSection