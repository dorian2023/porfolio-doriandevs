"use client";

import TransitionPage from "@/components/animations/TransitionPage";
import ContainerPage from "@/components/layout/ContainerPage";
import AvatarLogo from "@/components/sections/hero/AvatarLogo";
import ContactForm from "@/components/features/contact/ContactForm";
import { FadeIn } from "@/components/animations/FadeIn";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
    return (
        <main className="relative bg-[#09070f] min-h-screen">
            <TransitionPage />

            <ContainerPage>
                <div className="relative pt-20 md:pt-32 space-y-12">
                    <AvatarLogo className="absolute top-8 left-4 md:left-12 pointer-events-none" />

                    <FadeIn direction="up">
                        <h1 className="text-3xl md:text-6xl font-bold text-center text-white">
                            ¿Tienes un <span className="text-terciaro">proyecto</span> en mente?
                        </h1>
                        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
                            Estoy disponible para nuevos proyectos y colaboraciones. ¡Hablemos!
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <FadeIn direction="right" delay={0.2} className="space-y-6">
                                <div className="flex items-center gap-4 text-white group">
                                    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-terciaro/20 transition-colors">
                                        <Mail className="text-terciaro" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Email</h4>
                                        <p className="text-gray-400 text-sm">dorian.dev@ejemplo.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-white group">
                                    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-terciaro/20 transition-colors">
                                        <Phone className="text-terciaro" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">WhatsApp</h4>
                                        <p className="text-gray-400 text-sm">+58 412 978 2130</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-white group">
                                    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-terciaro/20 transition-colors">
                                        <MapPin className="text-terciaro" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Ubicación</h4>
                                        <p className="text-gray-400 text-sm">Venezuela, Remoto</p>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-2">
                            <ContactForm />
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="h-20" />
                </div>
            </ContainerPage>
        </main>
    );
};

export default ContactPage;
