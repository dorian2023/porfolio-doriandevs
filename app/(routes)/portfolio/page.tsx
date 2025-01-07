'use client'
import { dataPortfolio } from "@/data";

import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";
import { TypeAnimation } from "react-type-animation";
import { MotionTransition } from "@/components/transition-component";
import AvatarLogo from "@/components/avatar-logo";


const PortfolioPage = () => {

    return (
        <ContainerPage>
            <TransitionPage />
            <MotionTransition position="bottom" >

                <AvatarLogo className={`flex justify-center relative w-full md:fixed md:left-1/3
                 top-5 mt-0 pb-0`} />
                
            </MotionTransition>

            <CircleImage />
            <div className="flex flex-col justify-center h-full  md:mt-0">
            <MotionTransition position="bottom">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Mis últimos {' '} 
                    <TypeAnimation
                            sequence={[
                                'trabajos ',
                                1000,
                                'trabajos realizados..',
                                1000,
                            ]}
                            wrapper="span"
                            speed={10}
                            repeat={Infinity}
                            className="font-bold text-terciaro"
                        />
                </h1>
            </MotionTransition> ;
            <MotionTransition position="right">

                <div className="relative md:z-10 grid grid-cols-2 justify-items-center max-w-5xl gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                        ))}
                </div>
            </MotionTransition>
            </div>
        </ContainerPage>
    );
}

export default PortfolioPage;
