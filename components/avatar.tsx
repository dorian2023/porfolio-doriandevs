"use client"

import Image from "next/image";

import { MotionTransition } from "./transition-component";

export function Avatar() {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute ">
            <Image src="/avatar-1.png" width="350" height="350" className="w-full h-full" alt="Particles" />
        </MotionTransition>
    )
}