
import React from "react";

interface SingleCardProps {  
  image: string;  
  Button: string;  
  CardDescription: string;  
  CardTitle: string;  
  titleHref?: string; // Hacemos que titleHref y btnHref sean opcionales  
  btnHref?: string;  
}  

const SingleCard: React.FC<SingleCardProps> = ({  
  image,  
  Button,  
  CardDescription,  
  CardTitle,  
  titleHref,  
  btnHref,  
}) => {  
  return (  
    <div className="h-[300px] md:h-auto md:mb-10 overflow-hidden rounded-lg bg-gray-800 shadow-1 duration-300 hover:bg-gray-700  dark:bg-gray-800 dark:shadow-card dark:hover:shadow-3 transition-all  hover:border-terciaro border-2 hover:shadow-xl hover:shadow-terciaro">  
      <img src={image} alt="" className="w-full h-auto" />  
      <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">  
        <h3>  
          <a  
            href={titleHref ? titleHref : "/#"}  
            className="mb-4 block text-lg font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"  
          >  
            {CardTitle}  
          </a>  
        </h3>  
        <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">  
          {CardDescription}  
        </p>  

        {Button && (  
          <a  
            href={btnHref ? btnHref : "#"}  
            className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"  
          >  
            {Button}  
          </a>  
        )}  
      </div>  
    </div>  
  );  
};  

const Card: React.FC = () => {  
  return (  
    <section className=" black pb-10 pt-20 px-24 dark:bg-dark lg:pb-10 lg:pt-[120px]">  
      <div className="container flex justify-center items-center">  
        <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:w-3/5">  
          <SingleCard  
            image="https://i.ibb.co/r2zns1m/image-01.jpg"  
            CardTitle="Cartas"  
            titleHref="/#"  
            btnHref="/#"  
            CardDescription="Lorem ipsum dolor sit amet pretium"  
            Button="Detalle"  
          />  
          <SingleCard  
            image="https://i.ibb.co/0nbbWM9/image-02-1.jpg"  
            CardTitle="Carta 2"  
            CardDescription="Lorem ipsum dolor sit amet pretium."  
            Button="Detalle"  
          />  
          <SingleCard  
            image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"  
            CardTitle="Carta 3"  
            CardDescription="Lorem ipsum dolor sit amet pretium."  
            Button="Detalle"  
          />  
          <SingleCard  
            image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"  
            CardTitle="Carta 3"  
            CardDescription="Lorem ipsum dolor sit amet pretium."  
            Button="Detalle"  
          />  
        </div>  
      </div>  
    </section>  
  );  
};  

export default Card;




//   return (
//     <>
//       <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
//         <div className="container">
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             <SingleCard
//               image="https://i.ibb.co/r2zns1m/image-01.jpg"
//               CardTitle="50+ Best creative website themes & templates"
//               titleHref="/#"
//               btnHref="/#"
//               CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//               Button="View Details"
//             />
//             <SingleCard
//               image="https://i.ibb.co/0nbbWM9/image-02-1.jpg"
//               CardTitle="Creative Card Component designs graphic elements"
//               CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//               Button="View Details"
//             />
//             <SingleCard
//               image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
//               CardTitle="The ultimate UX and UI guide to card design"
//               CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
//               Button="View Details"
//             />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Card;

// const SingleCard = ({
//   image,
//   Button,
//   CardDescription,
//   CardTitle,
//   titleHref,
//   btnHref,
// }) => {
//   return (
//     <>
//       {/*  */}
//       <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
//         <img src={image} alt="" className="w-full" />
//         <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
//           <h3>
//             <a
//               href={titleHref ? titleHref : "/#"}
//               className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
//             >
//               {CardTitle}
//             </a>
//           </h3>
//           <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
//             {CardDescription}
//           </p>

//           {Button && (
//             <a
//               href={btnHref ? btnHref : "#"}
//               className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
//             >
//               {Button}
//             </a>
//           )}
//         </div>
//       </div>
//       {/*  */}
//     </>
//   );
// };
