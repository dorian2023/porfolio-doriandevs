"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export const FadeIn = ({ children, className, delay = 0, direction }: FadeInProps) => {
    const directions = {
        up: { y: 20 },
        down: { y: -20 },
        left: { x: 20 },
        right: { x: -20 },
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...(direction ? directions[direction] : {})
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                x: 0
            }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: delay,
                ease: "easeOut",
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
};
