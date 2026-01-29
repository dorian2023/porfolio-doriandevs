"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { HerramientasData } from "@/data";
import Image from "next/image";

const SkillsGrid = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const entry = useIntersectionObserver(containerRef, { threshold: 0.1, freezeOnceVisible: true });
    const isVisible = !!entry?.isIntersecting;

    return (
        <section ref={containerRef} className="py-12 space-y-8">
            <FadeIn direction="up">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-4">
                    Mis <span className="text-terciaro">Habilidades</span> Técnicas
                </h2>
                <p className="text-center text-gray-400 max-w-2xl mx-auto">
                    Especializado en tecnologías modernas para crear experiencias digitales excepcionales
                    y sistemas de gestión eficientes.
                </p>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {HerramientasData.map((skill, index) => (
                    <FadeIn
                        key={skill.title}
                        direction="up"
                        delay={index * 0.05}
                    >
                        <Card className="group flex flex-col items-center justify-center p-6 h-full hover:border-terciaro/50 transition-colors bg-secondary-900/40 backdrop-blur-sm">
                            <div className="relative w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300">
                                {/* HerramientasData uses images from URLs */}
                                <div className="flex items-center justify-center w-full h-full grayscale group-hover:grayscale-0 transition-all">
                                    {skill.image}
                                </div>
                            </div>
                            <h3 className="text-sm md:text-base font-semibold text-white/80 group-hover:text-white capitalize">
                                {skill.title}
                            </h3>
                            <Badge variant="outline" className="mt-2 text-[10px] uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                                Expertise
                            </Badge>
                        </Card>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
};

export default SkillsGrid;
