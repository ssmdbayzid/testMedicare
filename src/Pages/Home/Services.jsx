import React from 'react'
import serviceData from '../../assets/data/data'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

const Services = () => {
  return (
    <div className="container">
        <div className="xl:w-[470px] mx-auto">
            <h2 className="heading">Out medical services</h2>
            <p className="text_para text-center">World class care for everyone Our health System offers unmatched export health care</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 mt-16">
        {serviceData && serviceData.map((data, index)=> 
            <div>
                <h2 className="text-3xl font-[700]">{data.name}</h2>
                <p className="text_para text-justify">{data.description}</p>
                <div className="flex justify-between items-center mt-8">
                <Link to="/doctors" className="flex items-center justify-center w-12 h-12 border-2 rounded-full hover:bg-primaryColor hover:border-none text-xl hover:text-white">
                    < BsArrowRight />
                </Link>

                <div className="h-12 w-12 flex items-center justify-center font-[700] text-2xl "
                style={{
                    background: `${data.bgColor}`,
                    color: `${data.textColor}`                    
                }}
                >
                    {index + 1}
                </div>
                </div>
            </div>
        )}
        </div>        
    </div>
  )
}

export default Services