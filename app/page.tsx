"use client";

import AvatarLogo from "@/components/sections/hero/AvatarLogo";
import Introduction from "@/components/sections/hero/Introduction";
import HeroParticles from "@/components/sections/hero/HeroParticles";
import TransitionPage from "@/components/animations/TransitionPage";

export default function Home() {
  return (
    <main className="relative bg-[#09070f] overflow-x-hidden min-h-screen">
      <TransitionPage />
      <HeroParticles />

      <div className="relative z-10 flex flex-col items-center">
        <AvatarLogo className="absolute top-8 left-4 md:left-12 pointer-events-none" />
        <Introduction />
      </div>
    </main>
  );
}
