"use client";

import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn';

const CircleImage = () => {
    return (
        <FadeIn direction="right" className="pointer-events-none fixed bottom-0 right-0 z-0">
            <Image
                src="/circles.png"
                width={200}
                height={200}
                className="w-full h-auto opacity-50"
                alt="Decoración de fondo"
            />
        </FadeIn>
    );
}

export default CircleImage;
