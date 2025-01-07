import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import { MotionTransition } from "@/components/transition-component";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import Link from "next/link";
import AvatarLogo from "@/components/avatar-logo";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage /> 
            <AvatarServices /> 
            <AvatarLogo className={`flex justify-center relative pt-40 md:pt-0 md:w-full md:fixed md:right-1/3
            top-5 pb-0`}/>
            
            <div className="grid items-center justify-center gap-3 max-w-5xl mx-auto md:h-screen md:grid-cols-2 pr-4 pl-4 md:p-0 md:pt-0">
                <div className="max-w-[450px] md:mt-0">

                    <MotionTransition position="right" className="mt-8">
                    <div className="flex flex-col items-center"> {/* Contenedor Flex */}  
                    <h1 className="text-4xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-terciaro"> servicios.</span></h1>
                    <p className="mb-3 text-smmd:text-xl text-center md:text-left text-gray-300">Desarrollo web frontend especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS, JavaScript, ReackJs, Tailwindcss diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.</p>
                    <Link href={`https://wa.me/584129782130?text=Me,%20gustaria%20tus%20servicios.`} target="_blank" className="px-3 py-2 rounded-lg text-center bg-terciaro hover:bg-terciaro/65 hover:shadow-lg hover:shadow-terciaro">Contacta conmigo</Link>
                    </div>
                    </MotionTransition>
                </div>

                {/* SLIDER */}
                <MotionTransition position="bottom" className="mt-8">
                    <SliderServices />
                </MotionTransition>
            </div>

        </>
    );
}

export default ServicesPage;
