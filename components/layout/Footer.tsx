"use client";

import Link from "next/link";
import { socialNetworks, itemsNavbar } from "@/data";
import { FadeIn } from "@/components/animations/FadeIn";
import { Mail, Phone, ExternalLink } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary-900/40 border-t border-white/5 backdrop-blur-md pb-40 md:pb-10 pt-16">
            <ContainerPage>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 px-6">
                    {/* Logo & Info */}
                    <FadeIn direction="up" className="md:col-span-2 space-y-6">
                        <h3 className="text-2xl font-bold text-white">
                            Dorian<span className="text-terciaro">Devs</span>
                        </h3>
                        <p className="text-gray-400 max-w-sm leading-relaxed">
                            Transformando ideas en experiencias digitales excepcionales.
                            Desarrollador full-stack especializado en interfaces premium y gestión de datos eficiente.
                        </p>
                        <div className="flex gap-4">
                            {socialNetworks.map(({ logo, src, id }) => (
                                <Link
                                    key={id}
                                    href={src}
                                    target="_blank"
                                    className="p-3 bg-white/5 rounded-xl hover:bg-terciaro/20 hover:text-terciaro transition-all"
                                >
                                    {logo}
                                </Link>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Quick Links */}
                    <FadeIn direction="up" delay={0.1} className="space-y-6">
                        <h4 className="font-bold text-white text-lg">Explorar</h4>
                        <ul className="space-y-4">
                            {itemsNavbar.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        href={item.link}
                                        className="text-gray-400 hover:text-terciaro transition-colors flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-[2px] bg-terciaro mr-0 group-hover:mr-2 transition-all"></span>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>

                    {/* Contact */}
                    <FadeIn direction="up" delay={0.2} className="space-y-6">
                        <h4 className="font-bold text-white text-lg">Contacto</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="mailto:dorian.dev@ejemplo.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3">
                                    <Mail size={18} className="text-terciaro" />
                                    dorian.dev@ejemplo.com
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/584129782130" target="_blank" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3">
                                    <Phone size={18} className="text-terciaro" />
                                    +58 412 978 2130
                                </a>
                            </li>
                            <li className="pt-4">
                                <Link href="/contact">
                                    <span className="text-terciaro hover:underline flex items-center gap-2 cursor-pointer">
                                        Trabajemos juntos <ExternalLink size={14} />
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </FadeIn>
                </div>

                <div className="border-t border-white/5 pt-8 px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Dorian Developers. Todos los derechos reservados.
                    </p>
                    <p className="text-gray-500 text-sm flex gap-6">
                        <span className="hover:text-white cursor-pointer transition-colors">Política de Privacidad</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Términos de Servicio</span>
                    </p>
                </div>
            </ContainerPage>
        </footer>
    );
};

// Internal ContainerPage helper if not already defined for this specific layout
const ContainerPage = ({ children }: { children: React.ReactNode }) => (
    <div className="max-w-7xl mx-auto w-full">{children}</div>
);

export default Footer;
