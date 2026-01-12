"use client"

import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10 ">
            <header>
                <div className="container text-center hover:text-shadow-xl md:text-justify md:justify-between max-w-6xl mx-auto md:flex">
                    <Link href='/'>
                         <TypeAnimation
                            sequence={[
                                'Dorian ',
                                1000,
                                'Dorian Developers 📱💻',
                                1000,
                                'Dorian ',
                                1000,
                                'Dorian Design 📱💻',
                                1000
                            
                          
                            ]}
                            wrapper="h1"
                            speed={10}
                            repeat={Infinity}
                            className="my-3 text-3xl md:text-5xl font-bold "
                        />
                     
                    </Link>
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link
                                key={id}
                                href={src}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all duration-300 hover:text-terciaro"
                            >
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;