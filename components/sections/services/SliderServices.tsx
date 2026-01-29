"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { serviceData } from '@/data';


const SliderServices = () => {
    return (
        <div className="w-full">
            <Swiper
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 15 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 20 }
                }}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="w-full pb-12"
            >
                {serviceData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-secondary-900/60 border border-white/5 p-6 rounded-2xl flex flex-col gap-4 group hover:border-terciaro/50 transition-all duration-500 hover:shadow-2xl hover:shadow-terciaro/10 min-h-[250px]">
                            <div className="text-4xl text-terciaro group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-white group-hover:text-terciaro transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
export default SliderServices;
