import React from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import patientComments from '../../assets/data/patientCommentData';
import {HiStar} from 'react-icons/hi'

const Testimonial = () => {
  return (
    <div className="container">
        <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What Our Patient Say</h2>
            <p className="text_para text-center">World class care for everyone Our health System offers unmatched expert health care </p>
        </div>
        <div className="mt-7 lg:mt-18">
        <Swiper
                        modules={[ Pagination ]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}>
            {patientComments && patientComments.map((user, index)=>
            <SwiperSlide key={index}>
            <div className="p-5">
                  <div className="flex items-center">
                        <img src={user.image} alt="" className="h-12 w-12 rounded-full" />
                    <div className="ml-3">
                    <h2 className="font-bold">{user.name}</h2>
                    <div className="flex items-center">
                    <HiStar className="text-secondaryColor" />
                    <HiStar className="text-secondaryColor" />
                    <HiStar className="text-secondaryColor" />
                    <HiStar className="text-secondaryColor" />
                    <HiStar className="text-secondaryColor" />
                    </div>

                    </div>
                  </div>
                    <p className="text-md mt-3 text-justify">{user.feedback}</p>
            </div>
            </SwiperSlide>
            )}
            </Swiper>

        </div>
    </div>
  )
}

export default Testimonial