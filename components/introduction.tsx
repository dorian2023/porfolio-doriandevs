"use client"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { MotionTransition } from "./transition-component";

import { verProyectos } from "@/data";
import Link from "next/link";

const Introduction = () => {
    return (
        <div className="z-20 w-[full] h-auto bg-darkBg/60">
         
            <div className="z-20 grid justify-items-center items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <MotionTransition position="bottom">
                    <Image src="/home-4.png" priority width="800" height="800" alt="Avatar" className="w-2/4 md:w-4/5 h-2/4 md:h-4/5 ml-52 md:ml-0 md:m-0 md:pl-60"/>
                </MotionTransition>
                <MotionTransition position="right" className="flex flex-col m-2 md:ml-0 justify-items-center max-w-md">
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

                    <p className="mx-auto mb-2 text-base text-center md:text-left md:text-xl md:mx-0 md:mb-8">
                        Apasionado desarrollador frontend y administrador de datos con una sólida experiencia en el diseño y desarrollo de aplicaciones web & mobile atractivas y funcionales. Ademas de implementar y mantener el sistema de gestión empresarial en donde manejo aspectos clave como la contabilidad, la facturación y el control de inventario.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        {verProyectos.map((item) => (
                            
                            <Link 
                                key={item.id}
                                href={item.link} 
                                className={item.className}>{item.title}
                            </Link>


                        ))}
                    </div>

              

                </MotionTransition>
            </div>
        </div>
    );
}

export default Introduction;

