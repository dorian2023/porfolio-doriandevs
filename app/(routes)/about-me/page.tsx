"use client"

import { Avatar } from "@/components/avatar";
import AvatarLogo from "@/components/avatar-logo";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import SliderHerramientas from "@/components/herramientas";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";


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