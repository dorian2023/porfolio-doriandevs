"use client";

import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { FadeIn } from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import { verProyectos } from "@/data";
import Link from "next/link";

const Introduction = () => {
    return (
        <div className="z-20 w-full h-full bg-darkBg/60 backdrop-blur-sm">
            <div className="z-20 grid md:grid-cols-2 items-center justify-items-center h-full max-w-7xl mx-auto p-6 py-20 md:py-0">

                {/* Image Section */}
                <FadeIn direction="right" className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-terciaro to-primary-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <Image
                        src="/home-4.png"
                        priority
                        width="800"
                        height="800"
                        alt="Avatar"
                        className="relative w-2/3 md:w-full h-auto mx-auto md:ml-0 drop-shadow-2xl"
                    />
                </FadeIn>

                {/* Content Section */}
                <div className="flex flex-col items-center md:items-start max-w-xl text-center md:text-left space-y-6 md:space-y-8">
                    <FadeIn direction="up">
                        <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tight text-white">
                            Si puedes pensarlo, <br />
                            <TypeAnimation
                                sequence={[
                                    'puedes programarlo',
                                    2000,
                                    'puedes optimizarlo',
                                    2000,
                                    'puedes implementarlo',
                                    2000,
                                    'puedes desarrollarlo',
                                    2000
                                ]}
                                wrapper="span"
                                speed={10}
                                repeat={Infinity}
                                className="text-terciaro"
                            />
                        </h1>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.2}>
                        <p className="text-base md:text-xl text-gray-300 leading-relaxed">
                            Apasionado desarrollador frontend y administrador de datos con una sólida experiencia en el
                            <span className="text-white font-medium"> diseño y desarrollo de aplicaciones web & mobile</span> atractivas y funcionales.
                            Experto en optimización de sistemas de gestión empresarial y control de datos.
                        </p>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.4} className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 w-full">
                        {verProyectos.map((item) => (
                            <Link key={item.id} href={item.link} passHref>
                                <Button
                                    variant={item.id === 1 ? "tertiary" : "outline"}
                                    className="min-w-[160px]"
                                >
                                    {item.title}
                                </Button>
                            </Link>
                        ))}
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}

export default Introduction;

