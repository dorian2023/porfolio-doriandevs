"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { HerramientasData } from '@/data';
import { MotionTransition } from './transition-component';

const SliderHerramientas = () => {
    return (
        <MotionTransition position="bottom">
        
        <h1 className="text-2xl leading-tight text-center md:text-center md:text-5xl md:my-10 my-5">
                    Herramientas &{' '}
                    <span className="font-bold text-terciaro">
                        & Lenguajes
                    </span>
                </h1>


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
            className="h-[180px] md:h-[180px] w-[120px] md:w-[360px] items-center"
        > 

            {HerramientasData.map((item, index) => (
                
                <SwiperSlide key={index} >
                    <div className="flex md:px-6 md:py-2  p-4 justify-center md:justify-items-center h-auto md:h-[100px] md:w-[100px] md:items-center cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-terciaro border-2 hover:shadow-xl hover:shadow-terciaro rounded-full mb-20" >
                        <div className="p-5 ">{item.image}</div>
                     
                    </div>
                </SwiperSlide>
              
            ))}
            
        </Swiper>
        </MotionTransition>
    );
}
export default SliderHerramientas;
