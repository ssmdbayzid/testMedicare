import React from 'react'

const 
HeroSection = () => {
  return (
    <section>
        <div className="container">
            <div className="flex flex-col md:flex-row gap-16 items-center">
                {/* ================== Hero Section ================== */}
                <div className="lg:w-[570px]">
                    <h1 className="text-[44px] lg:text-[55px] font-[800] ">
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
                            <hr className="h-3 w-[100px] mt-[-20px] bg-irirsBlueColor"></hr>
                            <p className="text_para">Years of Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default 
HeroSection