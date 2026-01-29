"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    isHoverable?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, isHoverable = true, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                whileHover={isHoverable ? { y: -5, transition: { duration: 0.2 } } : {}}
                className={cn(
                    "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-shadow hover:shadow-2xl hover:shadow-primary-500/10",
                    className
                )}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

Card.displayName = "Card";

export default Card;
