import React from 'react'
import img from '../../assets/images/feature-img.png'
import videoIcon from '../../assets/images/video-icon.png'
import  avatar from '../../assets/images/avatar-icon.png'


const VirtualSupport = () => {
  return (
    <section>
      <div className="container mt-24">

        {/* ================== Virtual Treatment Content ================ */}
        <div className="flex flex-col lg:flex-row justify-between  gap-16 lg:gap-20 xl:gap-0">
            <div className="w-3/4 lg:w-1/2 xl:w-[670px]">
                <h2 className="heading">Get virtual treatment anytime</h2>
                <ul className="ml-3 ">
                    <li className="text_para text-justify">1. Schedule the appointment directly.</li>
                    <li className="text_para text-justify">2. Search for your  physician here. and contact their office.</li>
                    <li className="text_para text-justify">3. View  our physicians are accepting new  parents. use the online  shcedule  tool to select an appointment time. ..</li>
                </ul>
                <button className="btn">Learn More</button>
            </div>


        {/* ================== Virtual Treatment Image ================ */}
        
        <div className="relative z-10 flex justify-end  w-3/4 lg:w-1/2 xl:w-[770px] ">
            <img src={img} alt="mx-auto" className="ml-auto" />
            <div className="absolute bg-white bottom-8 md:bottom-20 lg:bottom-24 left-[-12%] md:left-[20%] lg:left-[22%]  w-[170px] lg:w-[250px] rounded-lg shadow-lg p-2 lg:p-5 ">
                <p className="flex justify-between text-sm">
                    <span>Tue</span>
                    <span>10.05 AM</span>
                    <div className="w-8 h-8 bg-secondaryColor flex items-center justify-center">

                    <img src={videoIcon} alt="" />
                    </div>
                </p>
                <span className="text-sm bg-irisBlueColor/20 inline-block px-4 py-1 rounded-full font-semibold text-irisBlueColor">Consultent</span>
                <flex className="flex gap-1 mt-3">
                    <img src={avatar} alt="" />
                    <span className="text-sm font-[900]">Wayne Colline</span>
                </flex>
            </div>
        </div>

        </div>
      </div>
    </section>
  )
}

export default VirtualSupport
