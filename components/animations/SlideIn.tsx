"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SlideInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "left" | "right";
}

export const SlideIn = ({ children, className, delay = 0, direction = "left" }: SlideInProps) => {
    return (
        <motion.div
            initial={{ x: direction === "left" ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
};
