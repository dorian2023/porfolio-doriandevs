import Image from "next/image";
import { MotionTransition } from "./transition-component";

const AvatarServices = () => {
    return (
        <>
        <MotionTransition position='bottom' className="bottom-0 left-0 hidden md:inline-block md:fixed">
            <Image src="/avatar-1.png" width="400" height="400" className="w-[350px] h-full " alt="Particles "/>
        </MotionTransition>
        </>
    );
}

export default AvatarServices;