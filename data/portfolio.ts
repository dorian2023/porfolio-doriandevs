import type { Project, ProjectCard } from "@/types";

export const dataPortfolio: Project[] = [
    {
        id: 1,
        title: "Catalogo Web (Muebles Bellagio)",
        image: "/bellagio-catalogo2.png",
        urlGithub: "#!",
        urlDemo: "https://mueblesbellagio2.odoo.com/",
        tags: ["Odoo", "E-commerce", "Administración"],
        description: "Plataforma de catálogo web integrada con sistema Odoo para gestión de inventario y pedidos en tiempo real."
    },
    {
        id: 2,
        title: "Portfolio-Dev (Personal)",
        image: "/imagen-14.png",
        urlGithub: "https://github.com/dorian2023/porfolio-doriandevs",
        urlDemo: "https://doriandevs-portfolio.netlify.app/",
        tags: ["Next.js", "React", "Tailwind CSS"],
        description: "Portfolio profesional de alto impacto con animaciones avanzadas y diseño responsive optimizado."
    },
    {
        id: 8,
        title: "Galeria-Imagenes (Muebles Bellagio)",
        image: "/imagen-13.png",
        urlGithub: "https://github.com/dorian2023/MueblesBellagio-galeria",
        urlDemo: "https://mueblesbellagio-galeia.netlify.app/",
        tags: ["React", "Cloudinary", "Frontend"],
        description: "Galería de imágenes optimizada con carga perezosa y gestión de activos en la nube."
    },
    {
        id: 9,
        title: "Data Analyst Dashboard",
        image: "/bellagio-catalogo2.png",
        urlGithub: "#!",
        urlDemo: "#!",
        tags: ["Excel", "Administración", "Control"],
        description: "Panel de control para análisis de datos administrativos y financieros con visualización de KPIs clave."
    },
];

export const dataCard: ProjectCard[] = [
    {
        id: 1,
        CardTitle: "Web-Catalogo (Mueble Bellagio)",
        Button: "#!",
        titleHref: "https://bellagioprueba.odoo.com/",
        CardDescription: "hola mundo",
        btnHref: "",
    },
    {
        id: 2,
        CardTitle: "Web-Catalogo (Mueble Bellagio)",
        image: "/imagen-15.png",
        Button: "#!",
        titleHref: "https://bellagioprueba.odoo.com/",
        CardDescription: "hola mundo",
        btnHref: "",
    },
];
