import { ReactNode } from "react";

/**
 * Navegación
 */
export interface NavItem {
    id: number;
    title: string;
    icon: ReactNode;
    link: string;
}

export interface ButtonLink {
    id: number;
    title: string;
    link: string;
    className: string;
}

/**
 * Redes Sociales
 */
export interface SocialNetwork {
    id: number;
    logo: ReactNode;
    src: string;
}

/**
 * Experiencia Laboral
 */
export interface WorkExperience {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    date: string;
}

/**
 * Contador de Estadísticas
 */
export interface CounterData {
    id: number;
    endCounter: number;
    text: string;
    lineRight: boolean;
    lineRightMobile: boolean;
}

/**
 * Herramientas/Tecnologías
 */
export interface Tool {
    image: ReactNode;
    title: string;
    link?: string;
    butto?: string; // Mantener typo del original para compatibilidad
}

/**
 * Galería de Imágenes
 */
export interface GalleryImage {
    imgelink: string; // Mantener nombre del original para compatibilidad
}
