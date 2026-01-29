"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { itemsNavbar } from "@/data";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/FadeIn";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <FadeIn direction="up" className="fixed bottom-10 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <nav className="pointer-events-auto">
                <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
                    {itemsNavbar.map((item) => {
                        const isActive = pathname === item.link;
                        return (
                            <Link
                                key={item.id}
                                href={item.link}
                                className={cn(
                                    "p-3 rounded-full transition-all duration-300 group relative",
                                    isActive ? "bg-terciaro text-white" : "text-white/70 hover:bg-white/10 hover:text-white"
                                )}
                            >
                                <span className="relative z-10">{item.icon}</span>
                                {isActive && (
                                    <span className="absolute inset-0 bg-terciaro rounded-full blur-md opacity-50 animate-pulse" />
                                )}
                                {/* Tooltip */}
                                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-xs font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                    {item.title}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </FadeIn>
    );
}

export default Navbar;
