import React from 'react'
import img from '../../assets/images/feature-img.png'
import videoIcon from '../../assets/images/video-icon.png'
import  avatar from '../../assets/images/avatar-icon.png'


const VirtualSupport = () => {
  return (
    <section>
      <div className="container mt-24">

        {/* ================== Virtual Treatment Content ================ */}
        <div className="flex bg-green-600 justify-between  gap-16 lg:gap-20 xl:gap-0">
            <div className="w-3/4 lg:w-1/2 xl:w-[670px]">
                <h2 className="heading">Get virtual treatment anytime</h2>
                <ul className="ml-3 ">
                    <li className="text_para">1. Schedule the appointment directly.</li>
                    <li className="text_para">2. Search for your  physician here. and contact their office.</li>
                    <li className="text_para">3. View  our physicians are accepting new  parents. use the online  shcedule  tool to select an appointment time. ..</li>
                </ul>
                <button className="btn">Learn More</button>
            </div>


        {/* ================== Virtual Treatment Image ================ */}
        
        <div className="relative z-10 justify-end w-3/4 lg:w-1/2 xl:w-[770px] ">
            <img src={img} alt="" />
            <div className="absolute bottom-24 left-[-22%] w-[150px] lg:w-[250px] rounded-lg shadow p-5 bg-white">
                <p className="flex justify-between ">
                    <span>Tue</span>
                    <span>10.05 AM</span>
                    <div className="w-8 h-8 bg-secondaryColor flex items-center justify-center">

                    <img src={videoIcon} alt="" />
                    </div>
                </p>
                <span className="bg-irirsBlueColor/20 inline-block px-4 py-1 rounded-full font-semibold text-irirsBlueColor">Consultent</span>
                <flex className="flex gap-3 mt-3">
                    <img src={avatar} alt="" />
                    <span className="font-[900]">Wayne Colline</span>
                </flex>
            </div>
        </div>

        </div>
      </div>
    </section>
  )
}

export default VirtualSupport
