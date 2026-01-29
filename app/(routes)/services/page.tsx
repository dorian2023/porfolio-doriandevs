"use client";

import TransitionPage from "@/components/animations/TransitionPage";
import ContainerPage from "@/components/layout/ContainerPage";
import SliderServices from "@/components/sections/services/SliderServices";
import AvatarLogo from "@/components/sections/hero/AvatarLogo";
import { FadeIn } from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Mail } from "lucide-react";

const ServicesPage = () => {
    return (
        <main className="relative bg-[#09070f] min-h-screen">
            <TransitionPage />

            <ContainerPage>
                <div className="relative pt-20 md:pt-32 space-y-12 pb-40 md:pb-20 px-6">
                    <AvatarLogo className="absolute top-8 left-4 md:left-12 pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <FadeIn direction="right" className="space-y-8">
                            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                                Mis <span className="text-terciaro font-extrabold">Servicios</span>
                            </h1>
                            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg">
                                Desarrollo web frontend especializado en la creación de sitios web y aplicaciones atractivas y funcionales.
                                Utilizo tecnologías de vanguardia para diseñar interfaces intuitivas que potencian el crecimiento de tu negocio.
                            </p>
                            <div className="pt-4">
                                <Link href="/contact">
                                    <Button variant="tertiary" size="lg" className="rounded-full shadow-lg shadow-terciaro/20">
                                        Explorar Proyectos <Mail className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                            </div>
                        </FadeIn>

                        <FadeIn direction="left" delay={0.2}>
                            <div className="bg-secondary-900/40 border border-white/5 backdrop-blur-md rounded-3xl p-4 md:p-8">
                                <SliderServices />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </ContainerPage>
        </main>
    );
}

export default ServicesPage;
