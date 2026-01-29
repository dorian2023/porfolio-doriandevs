"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "primary" | "secondary" | "tertiary" | "outline";
    children: React.ReactNode;
}

const Badge = ({
    className,
    variant = "primary",
    children,
    ...props
}: BadgeProps) => {
    const variants = {
        primary: "bg-primary-500/10 text-primary-500 border border-primary-500/20",
        secondary: "bg-secondary-500/10 text-secondary-500 border border-secondary-500/20",
        tertiary: "bg-terciaro/10 text-terciaro border border-terciaro/20",
        outline: "border border-white/20 text-white/80",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
};

export default Badge;
