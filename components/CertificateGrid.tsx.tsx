'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { certificados, Certificate } from '@/data/certificados';
import { LuSearch, LuX, LuExternalLink } from "react-icons/lu";

export default function CertificateGrid() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const closeModal = () => setSelectedCert(null);

  useEffect(() => {
    document.body.style.overflow = selectedCert ? 'hidden' : 'unset';
  }, [selectedCert]);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">

      {/* SECCIÓN DEL TÍTULO: Altura fija para que no empuje las tarjetas */}
      <div className="h-[120px] md:h-[160px] flex items-center justify-center mb-4">
        <h1 className="text-2xl leading-tight text-center md:text-4xl text-white m-0">
          Mis  {' '}
          <TypeAnimation
            sequence={['logros', 1000, 'certificados...', 1000]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
            className="font-bold text-tertiary"
          />
        </h1>
      </div>

      {/* 1. Grid de Tarjetas: Ahora se mantiene estático */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {certificados.map((cert) => (
          <motion.div
            key={cert.id}
            className="relative p-[1px] overflow-hidden rounded-2xl group cursor-pointer bg-slate-900"
            onClick={() => setSelectedCert(cert)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Capa de Luz Animada */}
            <motion.div
              className="absolute inset-[-100%] z-0"
              style={{
                background: "conic-gradient(from 0deg, #b8860b, #e5e4e2, #ffffff, #b8860b)",
              }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            {/* Contenido de la Tarjeta */}
            <div className="relative z-10 flex flex-col h-full w-full bg-[#05050a] rounded-[15px] overflow-hidden">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <LuSearch className="text-white text-3xl" />
                </div>
              </div>

              <div className="p-4 border-t border-white/5">
                <h3 className="text-white font-medium text-sm line-clamp-1">{cert.title}</h3>
                <p className="text-gray-500 text-xs mt-1">{cert.issuer}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 2. Modal Interactivo */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative z-[110] bg-[#0a0a15] p-2 rounded-3xl max-w-4xl w-full border border-white/10 shadow-2xl"
            >
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-tertiary text-3xl"
              >
                <LuX />
              </button>

              <img
                src={selectedCert.fullImageUrl}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-2xl"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white">{selectedCert.title}</h3>
                <p className="text-tertiary mb-6">{selectedCert.issuer}</p>

                {selectedCert.websiteUrl && (
                  <motion.a
                    href={selectedCert.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-tertiary hover:text-white transition-all"
                  >
                    <LuExternalLink /> Visitar sitio
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}






















// 'use client'

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { TypeAnimation } from 'react-type-animation';
// import { certificados, Certificate } from '@/data/certificados';
// import { LuSearch, LuX, LuExternalLink } from "react-icons/lu";
// // import { MotionTransition } from "@/components/transition-component";

// export default function CertificateGrid() {
//   const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

//   const closeModal = () => setSelectedCert(null);

//   // Bloquear scroll cuando el modal está abierto
//   useEffect(() => {
//     document.body.style.overflow = selectedCert ? 'hidden' : 'unset';
//   }, [selectedCert]);

//   return (
//     <section className="py-12 px-4 max-w-7xl mx-auto">

//       <div className="min-h-[100px] flex items-center justify-center">
//         {/* Título con Animación */}

//         <h1 className="text-2xl leading-tight text-center md:text-4xl mb-12 text-white">
//           Mis logros y {' '}
//           <TypeAnimation
//             sequence={['aprendizaje', 1000, 'certificados...', 1000]}
//             wrapper="span"
//             speed={10}
//             repeat={Infinity}
//             className="font-bold text-tertiary"
//           />
//         </h1>

//       </div>




//       {/* 1. Grid de Tarjetas con Borde Animado */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {certificados.map((cert) => (
//           <motion.div
//             key={cert.id}
//             className="relative p-[1px] overflow-hidden rounded-2xl group cursor-pointer bg-slate-900"
//             onClick={() => setSelectedCert(cert)}
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             {/* Capa de Luz: Mezcla de Metales (Oro/Plata) */}
//             <motion.div
//               className="absolute inset-[-100%] z-0"
//               style={{
//                 background: "conic-gradient(from 0deg, #b8860b, #e5e4e2, #ffffff, #b8860b)",
//               }}
//               animate={{ rotate: [0, 360] }}
//               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//             />

//             {/* Contenido de la Tarjeta (Máscara) */}
//             <div className="relative z-10 flex flex-col h-full w-full bg-[#05050a] rounded-[15px] overflow-hidden">
//               <div className="relative h-44 overflow-hidden">
//                 <img
//                   src={cert.imageUrl}
//                   alt={cert.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 {/* Lupa Overlay */}
//                 <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                   <LuSearch className="text-white text-3xl" />
//                 </div>
//               </div>

//               <div className="p-4 border-t border-white/5">
//                 <h3 className="text-white font-medium text-sm line-clamp-1">{cert.title}</h3>
//                 <p className="text-gray-500 text-xs mt-1">{cert.issuer}</p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* 2. Modal Interactivo */}
//       <AnimatePresence>
//         {selectedCert && (
//           <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={closeModal}
//               className="absolute inset-0 bg-black/90 backdrop-blur-md"
//             />

//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="relative z-[110] bg-[#0a0a15] p-2 rounded-3xl max-w-4xl w-full border border-white/10 shadow-2xl"
//             >
//               <button
//                 onClick={closeModal}
//                 className="absolute -top-12 right-0 text-white hover:text-tertiary text-3xl"
//               >
//                 <LuX />
//               </button>

//               <img
//                 src={selectedCert.fullImageUrl}
//                 alt={selectedCert.title}
//                 className="w-full h-auto max-h-[70vh] object-contain rounded-2xl"
//               />

//               <div className="p-6 text-center">
//                 <h3 className="text-xl md:text-2xl font-bold text-white">{selectedCert.title}</h3>
//                 <p className="text-tertiary mb-6">{selectedCert.issuer}</p>

//                 {selectedCert.websiteUrl && (
//                   <motion.a
//                     href={selectedCert.websiteUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ y: -2 }}
//                     className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-tertiary hover:text-white transition-all"
//                   >
//                     <LuExternalLink /> Visitar sitio
//                   </motion.a>
//                 )}
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>


//     </section>
//   );
// }