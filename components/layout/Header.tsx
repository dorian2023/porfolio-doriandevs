"use client"

import { socialNetworks } from "@/data";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
    return (
        <header className="absolute top-0 left-0 right-0 z-50 py-6 md:py-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <FadeIn direction="down" className="flex-shrink-0">
                    <Link href="/" className="group">
                        <TypeAnimation
                            sequence={[
                                'Dorian Developers',
                                1000,
                                'Dorian Design',
                                1000,
                            ]}
                            wrapper="h1"
                            speed={10}
                            repeat={Infinity}
                            className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 group-hover:from-terciaro group-hover:to-primary-500 transition-all duration-500"
                        />
                    </Link>
                </FadeIn>

                <FadeIn direction="down" delay={0.2} className="flex items-center gap-6">
                    {socialNetworks.map(({ logo, src, id }) => (
                        <Link
                            key={id}
                            href={src}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-terciaro transition-all duration-300 transform hover:scale-110"
                        >
                            {logo}
                        </Link>
                    ))}
                </FadeIn>
            </div>
        </header>
    );
}

export default Header;
