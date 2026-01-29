"use client"

import { Avatar } from "@/components/sections/about/Avatar";
import AvatarLogo from "@/components/sections/hero/AvatarLogo";
import ContainerPage from "@/components/layout/ContainerPage";
import CounterServices from "@/components/sections/about/CounterServices";
import SliderHerramientas from "@/components/features/tools/Herramientas";
import TimeLine from "@/components/sections/about/Timeline";
import TransitionPage from "@/components/animations/TransitionPage";


const AboutMePage = () => {
    return (
        <>
            <TransitionPage />

            <ContainerPage>
                <AvatarLogo className={`flex justify-center md:justify-start  md:left-10 relative w-full md:absolute mt-10 pb-0`} />
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-center md:text-5xl mt-10">
                    Toda mi{' '}
                    <span className="font-bold text-terciaro">
                        trayectoria profesional
                    </span>
                </h1>

                <CounterServices />

                <TimeLine />




            </ContainerPage>
            <div className="pb-80">

                <SliderHerramientas />
            </div>

        </>
    );
}

export default AboutMePage;