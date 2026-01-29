"use client";

import { Avatar } from "@/components/sections/about/Avatar";
import AvatarLogo from "@/components/sections/hero/AvatarLogo";
import ContainerPage from "@/components/layout/ContainerPage";
import CounterServices from "@/components/sections/about/CounterServices";
import SkillsGrid from "@/components/sections/about/SkillsGrid";
import TimeLine from "@/components/sections/about/Timeline";
import TransitionPage from "@/components/animations/TransitionPage";
import { FadeIn } from "@/components/animations/FadeIn";

const AboutMePage = () => {
    return (
        <main className="relative bg-[#09070f] min-h-screen">
            <TransitionPage />

            <ContainerPage>
                <div className="relative pt-20 md:pt-32 space-y-20">
                    <AvatarLogo className="absolute top-8 left-4 md:left-12 pointer-events-none" />

                    <section className="space-y-12">
                        <FadeIn direction="up">
                            <h1 className="text-3xl md:text-6xl font-bold text-center text-white">
                                Toda mi{' '}
                                <span className="text-terciaro">trayectoria profesional</span>
                            </h1>
                        </FadeIn>

                        <Avatar />
                        <CounterServices />
                    </section>

                    <TimeLine />

                    <SkillsGrid />

                    {/* Spacer for flow */}
                    <div className="h-20" />
                </div>
            </ContainerPage>
        </main>
    );
}

export default AboutMePage;