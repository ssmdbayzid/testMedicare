import React from 'react'
import img1 from '../../assets/images/hero-img01.png'
import img2 from '../../assets/images/hero-img02.png'
import img3 from '../../assets/images/hero-img03.png'

const 
HeroSection = () => {
  return (
    <section className="hero_section py-[36px] md:py-[75px]">
        <div className="container">
            <div className="flex flex-col md:flex-row gap-16 items-center">
                {/* ================== Hero Section ================== */}
                <div className="lg:w-[570px]">
                    <h1 className="text-[44px] lg:text-[65px] font-[800] ">
                    We help patients  
                    live a healthy, 
                    longer life
                    </h1>
                    <p className="text_para text-justify">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse earum quidem corrupti, soluta dolores suscipit fuga blanditiis. Amet, asperiores deserunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto soluta, perferendis veniam commodi porro corrupti.
                    </p>
                    <button className="btn">Request an Appointment</button>

                    <div className="flex items-center mt-12 gap-5">
                        <div>
                            <h1 className="text-4xl font-bold">30+</h1>
                            <hr className="h-3 w-[100px] mt-[-20px] bg-secondaryColor"></hr>
                            <p className="text_para">Years of Experience</p>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold">30+</h1>
                            <hr className="h-3 w-[100px] mt-[-20px] bg-purpleColor"></hr>
                            <p className="text_para">Years of Experience</p>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold">30+</h1>
                            <hr className="h-3 w-[100px] mt-[-20px] bg-irisBlueColor"></hr>
                            <p className="text_para">Years of Experience</p>
                        </div>
                    </div>
                </div>

                {/* ================== Hero Content ================== */}

                <div className="flex justify-end">
                    <div className="mb-5">
                    <img src={img1} alt="" className="w-full" />
                    </div>
                    <div className="ml-5 mt-12 flex flex-col gap-2">
                    <img src={img2} alt="" className="mb-5 w-full" />
                    <img src={img3} alt="" className=" w-full" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default 
HeroSection