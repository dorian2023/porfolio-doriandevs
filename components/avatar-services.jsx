import Image from "next/image";
import { MotionTransition } from "./transition-component";

const AvatarServices = () => {
    return (
        <>
        <MotionTransition position='bottom' className="bottom-0 left-0 hidden md:inline-block md:absolute">
            <Image src="/avatar-1.png" width="400" height="400" className="w-[350px] h-full " alt="Particles "/>
        </MotionTransition>
        <MotionTransition position='right' className="flex justify-center md:left-10 md:inline-block md:absolute mt-40 pb-0">
            <Image src="/DAGS.png" width="400" height="400" className="w-60 md:w-[350px] md:h-full " alt="Particles"/>
        </MotionTransition>
        </>
    );
}

export default AvatarServices;