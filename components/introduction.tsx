"use client"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { MotionTransition } from "./transition-component";

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
         
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <MotionTransition position="bottom">
                    <Image src="/home-4.png" priority width="800" height="800" alt="Avatar" />
                </MotionTransition>
                <MotionTransition position="right" className="flex flex-col ml-8 md:ml-0 justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Si puedes pensarlo, <br />
                        <TypeAnimation
                            sequence={[
                                'puedes programarlo',
                                1000,
                                'puedes optimizarlo',
                                1000,
                                'puedes implementarlo',
                                1000,
                                'puedes desarrollarlo',
                                1000
                            ]}
                            wrapper="span"
                            speed={10}
                            repeat={Infinity}
                            className="font-bold text-terciaro"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl  text-center md:text-left md:text-xl md:mx-0 md:mb-8">
                        Apasionado desarrollador frontend y administrador de datos con una sólida experiencia en el diseño y desarrollo de aplicaciones web & mobile atractivas y funcionales. Ademas de implementar y mantener el sistema de gestión empresarial en donde manejo aspectos clave como la contabilidad, la facturación y el control de inventario.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                    <a href="/projects" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                    Ver proyectos
                    </a>
                    <a href="/contact"
                    className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-terciaro border-terciaro rounded-xl hover:shadow-xl hover:shadow-terciaro" >
                    Contacta conmigo
                    </a>
                    </div>

              

                </MotionTransition>
            </div>
        </div>
    );
}

export default Introduction;

