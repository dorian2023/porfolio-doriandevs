"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataTestimonials } from "@/data";
import TransitionPage from "@/components/animations/TransitionPage";
import ContainerPage from "@/components/layout/ContainerPage";
import AvatarLogo from "@/components/sections/hero/AvatarLogo";
import { FadeIn } from "@/components/animations/FadeIn";
import Card from "@/components/ui/Card";
import Image from "next/image";

const TestimonialsPage = () => {
  return (
    <main className="relative bg-[#09070f] min-h-screen">
      <TransitionPage />

      <ContainerPage>
        <div className="relative pt-20 md:pt-32 space-y-12 pb-40 md:pb-20 px-6">
          <AvatarLogo className="absolute top-8 left-4 md:left-12 pointer-events-none" />

          <FadeIn direction="up">
            <h1 className="text-3xl md:text-6xl font-bold text-center text-white">
              Opiniones de <span className="text-terciaro">Clientes</span>
            </h1>
            <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
              La satisfacción de mis clientes es el mejor reflejo de la calidad de mi trabajo.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="flex items-center justify-center">
              <Swiper
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 15 },
                  768: { slidesPerView: 2, spaceBetween: 30 },
                }}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="w-full max-w-5xl pb-16"
              >
                {dataTestimonials.map(({ id, name, description, imageUrl }) => (
                  <SwiperSlide key={id}>
                    <Card className="h-full bg-secondary-900/40 border-white/5 p-8 flex flex-col items-center text-center space-y-6">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-terciaro/30 p-1">
                        <Image
                          src={imageUrl}
                          alt={name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold text-white">{name}</h4>
                        <div className="w-10 h-1 bg-terciaro mx-auto rounded-full" />
                      </div>
                      <p className="text-gray-400 italic leading-relaxed">
                        "{description}"
                      </p>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </FadeIn>
        </div>
      </ContainerPage>
    </main>
  );
};

export default TestimonialsPage;
