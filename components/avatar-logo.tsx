import Image from "next/image";
import { MotionTransition } from "./transition-component";

interface AvatarLogoProps {  
    className?: string; // Declarar className como un prop opcional de tipo string  
}  

const AvatarLogo = ({ className = '' }: AvatarLogoProps) => {
    return (
        <>
        <MotionTransition position='right' className={`${className}`}>
            <Image src="/DAGS.png" width="400" height="400" className="w-52 md:w-[230px] md:h-[230px] " alt="Logo"/>
        </MotionTransition>
        </>
    );
}

export default AvatarLogo;
