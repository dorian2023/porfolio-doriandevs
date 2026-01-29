"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";

export function Avatar() {
    return (
        <FadeIn direction="up" className="pointer-events-none hidden lg:block lg:fixed bottom-0 right-0 z-10">
            <Image
                src="/avatar-1.png"
                width={400}
                height={400}
                className="w-full h-auto opacity-80"
                alt="Avatar Decorativo"
            />
        </FadeIn>
    )
}
