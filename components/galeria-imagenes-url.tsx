  import React from "react";
import { GaleriaImagenesUrlIgbb } from '@/data';
import { MotionTransition } from "./transition-component";
import { TypeAnimation } from "react-type-animation";
export function FeaturedImageGallery() {
  
  const [active, setActive] = React.useState(
    "https://i.ibb.co/82XWpTJ/leslie1.jpg",
  );
  
  return (
    <div className="md:w-[700px] grid gap-1 w-10/12">
    
      <MotionTransition position="bottom">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:my-5 pt-10 md:pt-6">Mi galeria {' '} 
                    <TypeAnimation
                            sequence={[
                                'de imagenes',
                                1000,
                                'de imagenes.',
                                1000,
                            ]}
                            wrapper="span"
                            speed={10}
                            repeat={Infinity}
                            className="font-bold text-terciaro"
                        />
                </h1>
      </MotionTransition> ;
      <div>
        <img
          className="h-auto w-full md:w-full md:p-[6px] max-w-full rounded-lg object-cover object-center md:h-[550px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 md:grid-cols-12 gap-3 md:gap-2">
        {GaleriaImagenesUrlIgbb.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="md:h-20 md:max-w-auto md:ml-2 cursor-pointer rounded-sm object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
