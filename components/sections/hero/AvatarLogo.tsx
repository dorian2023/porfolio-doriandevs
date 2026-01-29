"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

interface AvatarLogoProps {
    className?: string;
}

const AvatarLogo = ({ className = '' }: AvatarLogoProps) => {
    return (
        <FadeIn direction="right" className={cn("z-30", className)}>
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-terciaro to-primary-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <Image
                    src="/DAGS.png"
                    width="400"
                    height="400"
                    className="relative w-52 md:w-[230px] md:h-auto transition-transform duration-500 group-hover:scale-105"
                    alt="Logo"
                />
            </div>
        </FadeIn>
    );
}

export default AvatarLogo;
