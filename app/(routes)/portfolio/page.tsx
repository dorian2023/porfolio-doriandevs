"use client";

import TransitionPage from "@/components/animations/TransitionPage";
import ContainerPage from "@/components/layout/ContainerPage";
import AvatarLogo from "@/components/sections/hero/AvatarLogo";
import ProjectList from "@/components/sections/portfolio/ProjectList";
import CertificateGrid from "@/components/sections/certificates/CertificateGrid";
import { FadeIn } from "@/components/animations/FadeIn";

const PortfolioPage = () => {
    return (
        <main className="relative bg-[#09070f] min-h-screen">
            <TransitionPage />

            <ContainerPage>
                <div className="relative pt-20 md:pt-32 space-y-20">
                    <AvatarLogo className="absolute top-8 left-4 md:left-12 pointer-events-none" />

                    <div className="space-y-12">
                        <FadeIn direction="up">
                            <h1 className="text-3xl md:text-6xl font-bold text-center text-white">
                                Mi <span className="text-terciaro">Portfolio</span>
                            </h1>
                        </FadeIn>

                        {/* Projects Section */}
                        <ProjectList />

                        {/* Certificates Section */}
                        <FadeIn direction="up" delay={0.2} className="pt-20">
                            <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-10">
                                Certificaciones y <span className="text-terciaro">Logros</span>
                            </h2>
                            <CertificateGrid />
                        </FadeIn>
                    </div>

                    {/* Spacer for flow */}
                    <div className="h-20" />
                </div>
            </ContainerPage>
        </main>
    );
}

export default PortfolioPage;
