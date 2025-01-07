"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { serviceData } from '@/data';
import { MotionTransition } from './transition-component';

const SliderServices = () => {
    return (
        <MotionTransition position="bottom">
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true,
                
            }}
            modules={[Pagination]}
            className="h-[200px] md:h-[340px] w-[270px] md:w-[550px]"
        > 

            {serviceData.map((item, index) => (
                
                <SwiperSlide key={index} >
                    <div className="flex px-6 py-2 h-[120px] md:h-[290px] rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-terciaro border-2 hover:shadow-xl hover:shadow-terciaro">
                        <div className="mb-4 text-4xl text-terciaro">{item.icon}</div>
                        <div>
                            <h3 className="mb-4 text-lg">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
              
            ))}
            
        </Swiper>
        </MotionTransition>
    );
}
export default SliderServices;
