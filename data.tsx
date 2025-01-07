import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Facebook, FacebookIcon, Music2, Music2Icon, Gift, Github, FileSliders } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "https://www.youtube.com/channel/UCE31lq0gsiiHjXX3F-2n_lw",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 6,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/dorian2023?tab=repositories",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Testomionials",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Frontend Developer - Analista de Datos",
        subtitle: "Muebles Bellagio JK C.A.",
        description: "Especialista en optimizacion de procesos. Responsable de la gestion intregal del inventario, desde la recepcion hasta la distribucion, ademas de desarrollo de soluciones tecnólogicas, como aplicaciones moviles, etc.",
        date: "Ago 2020 ",
    },
    {
        id: 2,
        title: "Oficial de Delitos Informaticos",
        subtitle: "CPNB - Vzla",
        description: "Experto en delitos informaticos con mas de 7 años de experiencia en la investigacion y resolucion de casos relacionados con la ciberseguridad.",
        date: "May 2018",
    },
    {
        id: 3,
        title: "Coordinador de Operaciones y Sistemas",
        subtitle: "DJGSeguridad C.A.",
        description: "Responsable de la programacion y asignacion de personal de seguridad, asi como de la gestion de los recursos de la empresa, dominando sofware garantzando el correcto funcionamiento de los sistemas tecnológicos.",
        date: "Ene 2016",
    },

]

export const dataCounter = [
    {
        id: 0,
        endCounter: 6,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 10,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 12,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 5,
        text: "Estudios finalizados",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop size={30} strokeWidth={2}/>,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil size={30} strokeWidth={2} />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer size={30} strokeWidth={2} />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book size={30} strokeWidth={2}/>,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket size={30} strokeWidth={2}/>,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
    {
        icon: <FileSliders size={30} strokeWidth={2} />,
        title: "ADMINISTRATION",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web-Catalogo (MUEBLES BELLAGIO)",
        image: "/imagen-15.png",
        urlGithub: "#!",
        urlDemo: "https://bellagioprueba.odoo.com/",
    },
    {
        id: 2,
        title: "Portfolio-Dev (PERSONAL)",
        image: "/imagen-14.png",
        urlGithub: "https://github.com/dorian2023/porfolio-doriandevs",
        urlDemo: "https://doriandevs-portfolio.netlify.app/",
    },
    {
        id: 8,
        title: "Data Analyst & Inventory Manager",
        image: "/imagen-15.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },{
        id: 9,
        title: "Data Analyst",
        image: "/imagen-15.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile1.png",
    }
];