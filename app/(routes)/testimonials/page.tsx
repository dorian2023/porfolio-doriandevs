"use client"

import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import { dataTestimonials } from '@/data';
import CircleImage from '@/components/circle-image';
import AvatarPortfolio from '@/components/avatar-portfolio';
import TransitionPage from '@/components/transition-page';
import AvatarLogo from '@/components/avatar-logo';
import { MotionTransition } from '@/components/transition-component';

const TestimonialsPage = () => {
    return (
        <>
            <TransitionPage />
            <div className='flex flex-col justify-center h-lvh'>
                <AvatarLogo />
                <AvatarPortfolio />
                <CircleImage />
                <MotionTransition position='bottom'>
                    <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                        Algunos comentarios
                        <span className="block font-bold text-terciaro"> de nuestros clientes</span>
                    </h1>
                </MotionTransition>
                <MotionTransition position="right">
                    <div className="flex items-center justify-center">
                        <div>
                            <Swiper
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 15
                                    },
                                }}
                                freeMode={true}
                                pagination={{
                                    clickable: true
                                }}
                                modules={[Pagination]}
                                className="h-[380px] md:h-[300px] w-[270px] md:w-[550px]"
                            >
                                {dataTestimonials.map(({ id, name, description, imageUrl }) => (
                                    <SwiperSlide key={id}>
                                        <Image src={imageUrl} alt={name} width="100" height="100" className="mx-auto rounded-full" />
                                        <h4 className='text-center'>{name}</h4>
                                        <div className="mt-5 text-center">
                                            {description}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </MotionTransition>
            </div>
        </>
    );
}

export default TestimonialsPage;