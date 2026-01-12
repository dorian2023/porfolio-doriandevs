'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation'; // Importante importar esto
import { certificados, Certificate } from '@/data/certificados';
import { LuSearch, LuX } from "react-icons/lu";

export default function CertificateGrid() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const closeModal = () => setSelectedCert(null);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedCert]);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">

      {/* --- TÍTULO CON EFECTO DE ESCRITURA --- */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter">
          <TypeAnimation
            sequence={[
              'Certificados',
              2000,
              'Mis Logros',
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </h2>
        {/* Línea decorativa animada */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ delay: 1, duration: 1 }}
          className="h-1.5 bg-tertiary mx-auto mt-4 rounded-full"
        />
      </motion.div>

      {/* 1. Grid de Tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {certificados.map((cert) => (
          <motion.div
            key={cert.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl bg-[#15193b]/50 border border-white/10"
            onClick={() => setSelectedCert(cert)}
          >
            <img
              src={cert.imageUrl}
              alt={cert.title}
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay con Lupa */}
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <LuSearch className="text-white text-5xl mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
              <p className="text-white font-semibold px-4 text-center text-lg">{cert.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 2. Modal Interactivo */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative z-[110] bg-[#15193b] p-3 rounded-3xl max-w-5xl w-full shadow-2xl border border-white/20"
            >
              <button
                onClick={closeModal}
                className="absolute -top-14 right-0 md:-right-10 text-white hover:text-tertiary text-4xl transition-colors"
              >
                <LuX />
              </button>

              <img
                src={selectedCert.fullImageUrl}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[75vh] object-contain rounded-xl"
              />

              <div className="p-6 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{selectedCert.title}</h3>
                <p className="text-tertiary text-lg font-medium">{selectedCert.issuer}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}