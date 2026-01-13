import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Github, FileSliders, } from "lucide-react";

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

export const verProyectos = [
    {
        id: 1,
        title: "Proyectos",
        link: "/portfolio",
        className: "px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50",

    },
    {
        id: 2,
        title: "Contacto",
        link: "https://wa.me/584129782130?text=Me,%20gustaria%20tus%20servicios.",
        className: "px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-terciaro border-terciaro rounded-xl hover:shadow-xl hover:shadow-terciaro",


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
        icon: <Crop size={30} strokeWidth={2} />,
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
        icon: <Book size={30} strokeWidth={2} />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket size={30} strokeWidth={2} />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
    {
        icon: <FileSliders size={30} strokeWidth={2} />,
        title: "ADMINISTRATION",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];
export const HerramientasData = [
    {
        image: <img src="https://i.ibb.co/thNwVBS/html-5.png" alt="html" />,
        title: "html",
        link: "https://developer.mozilla.org/es/docs/Web/HTML"
    },
    {
        image: <img src="https://i.ibb.co/KjLBFZV/css-3.png" alt="css" />,
        title: "Css",
        link: "https://developer.mozilla.org/es/docs/Web/CSS",
    },
    {
        image: <img src="https://i.ibb.co/JkMFVzp/javascript.png" alt="javascript" />,
        title: "JavaScript",
        link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    },
    {
        image: <img src="https://i.ibb.co/26h75bG/nodo-js.png" alt="nodejs" />,
        title: "NodeJs",
        link: "https://nodejs.org/docs/latest/api/",
    },
    {
        image: <img src="https://i.ibb.co/bzZhsjP/reactbueno.png" alt="react" />,
        title: "ReactJs",
        link: "https://react.dev/",
    },
    {
        image: <img src="https://i.ibb.co/5K667vK/pngwing-com.png" alt="tailwindcss" />,
        title: "Tailwincss",
        link: "https://tailwindcss.com/",
    },
    {
        image: <img src="https://i.ibb.co/5RnyXpn/pngwing-com-1.png" alt="nextjs" />,
        title: "NextJs",
        butto: "https://nextjs.org/",
    },
    {
        image: <img src="https://i.ibb.co/wMQBKH6/pngwing-com-2.png" alt="odoo" />,
        title: "Odoo",
        link: "https://www.odoo.com/es",
    },
    {
        image: <img src="https://i.ibb.co/Ks9cyx5/logohead.png" alt="odoo" />,
        title: "A2 Software",
        link: "http://www.a2.com.ve/",
    },
    {
        image: <img src="https://i.ibb.co/v3VLCsR/pngwing-com-4.png" alt="git" />,
        title: "Git",
        link: "https://git-scm.com/"
    },
    {
        image: <img src="https://i.ibb.co/tmPxxqh/pngwing-com-3.png" alt="git" />,
        title: "Excel",
        link: "https://www.microsoft.com/es-es/microsoft-365/excel"
    },

];

export const GaleriaImagenesUrlIgbb = [
    {
        imgelink:
            "https://i.ibb.co/z6849WZ/sofa-mariana.jpg",
    },
    {
        imgelink:
            "https://i.ibb.co/2S7YWr5/marbella2.jpg",
    },
    {
        imgelink:
            "https://i.ibb.co/55mRwSp/valentina.jpg",
    },
    {
        imgelink:
            "https://i.ibb.co/FqPXySG/manhattan.jpg",
    },
    {
        imgelink:
            "https://i.ibb.co/VSc5KfV/dormitorio.jpg",
    },
    {
        imgelink:
            "https://i.ibb.co/XWKkG2b/esmeralda2.jpg",
    },
    {
        imgelink:
            "https://i.ibb.co/PhxPchV/elegance.jpg",
    },
    {
        imgelink:
            "https://i.ibb.co/r0f0YQL/cruz-tunning.jpg",
    },
    {
        imgelink:
            "https://i.ibb.co/yYs5CXH/diamante.jpg",
    },
    {
        imgelink:
            "https://i.ibb.co/3sPDLpR/karen.jpg",
    },
    {
        imgelink:
            "https://i.ibb.co/nRwKPTd/aluminio.jpg",
    },
    {
        imgelink:
            "https://i.ibb.co/4VZ0Zmj/infinito.jpg",
    },
    {
        imgelink:
            "https://i.ibb.co/pJg5Gfz/comedorx.jpg",
    },
    {
        imgelink:
            "https://i.ibb.co/7bFMnPn/esmeralda.jpg",
    },
    {
        imgelink:
            "https://i.ibb.co/82XWpTJ/leslie1.jpg",
    },
    {
        imgelink:
            "https://i.ibb.co/TP68tGG/moises.jpg",
    },
    {
        imgelink:
            "https://i.ibb.co/zrrB96Y/nicole.jpg",
    },
    {
        imgelink:
            "https://i.ibb.co/gMWKd6b/leslie2.jpg",
    },
    {
        imgelink:
            "https://i.ibb.co/zSKZHGY/paola.jpg",
    },
    {
        imgelink:
            "https://i.ibb.co/sPPwDmr/marian2.jpg",
    },
    {
        imgelink:
            "https://i.ibb.co/vJk8FVT/marbella.jpg",
    },
    {
        imgelink:
            "https://i.ibb.co/Jd7Qdt0/primola.jpg",
    },
    {
        imgelink:
            "https://i.ibb.co/z6849WZ/sofa-mariana.jpg",
    },
    {
        imgelink:
            "https://i.ibb.co/2h8KZBH/Milord.jpg",
    },
];

export const dataCard = [
    {
        id: 1,
        CardTitle: "Web-Catalogo (Mueble Bellagio)",
        Button: "#!",
        titleHref: "https://bellagioprueba.odoo.com/",
        CardDescription: "hola mundo",
        btnHref: ""
    },
    {
        id: 2,
        CardTitle: "Web-Catalogo (Mueble Bellagio)",
        image: "/imagen-15.png",
        Button: "#!",
        titleHref: "https://bellagioprueba.odoo.com/",
        CardDescription: "hola mundo",
        btnHref: ""
    },
]

export const dataPortfolio = [
    {
        id: 1,
        title: "Catalogo Web (Muebles Bellagio)",
        image: "/bellagio-catalogo2.png",
        urlGithub: "#!",
        urlDemo: "https://mueblesbellagio2.odoo.com/",
    },
    {
        id: 2,
        title: "Portfolio-Dev (Personal)",
        image: "/imagen-14.png",
        urlGithub: "https://github.com/dorian2023/porfolio-doriandevs",
        urlDemo: "https://doriandevs-portfolio.netlify.app/",
    },
    {
        id: 8,
        title: "Galeria-Imagenes (Muebles Bellgio)",
        image: "/imagen-13.png",
        urlGithub: "https://github.com/dorian2023/MueblesBellagio-galeria",
        urlDemo: "https://mueblesbellagio-galeia.netlify.app/",
    }, {
        id: 9,
        title: "Data Analyst",
        image: "/bellagio-catalogo2.png",
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

// export const dataCertificados = [
//     {
//         id: 1,
//         title: "FULL STACK DEVELOPER",
//         issuer: "EDTECNICA",
//         imageUrl: "https://i.ibb.co/GvdLXv1p/Sin-t-tulo.png",
//         fullImageUrl: "https://i.ibb.co/S4YVx5sN/PROGRAMACION-FULL-STACK.jpg",
//         websiteUrl: "https://www.edtecnica.com" // 👈 Ejemplo de uso
//     },
//     {
//         id: 2,
//         title: "IA EN LA CIBERSEGURIDAD",
//         issuer: "SUSCERTE",
//         imageUrl: "https://i.ibb.co/Df1m9sNt/IA-EN-LA-CIBERSEGURIDAD.png",
//         fullImageUrl: "https://i.ibb.co/Df1m9sNt/IA-EN-LA-CIBERSEGURIDAD.png"
//     },
//     {
//         id: 3,
//         title: "CIBERSEGURIDAD",
//         issuer: "SUSCERTE",
//         imageUrl: "https://i.ibb.co/cKKffr2B/CIBERSEGURIDAD.png",
//         fullImageUrl: "https://i.ibb.co/cKKffr2B/CIBERSEGURIDAD.png"
//     },
//     {
//         id: 4,
//         title: "SEXTING",
//         issuer: "SUSCERTE",
//         imageUrl: "https://i.ibb.co/bjtvqtVQ/SEXTING.png",
//         fullImageUrl: "https://i.ibb.co/bjtvqtVQ/SEXTING.png"
//     },
//     {
//         id: 5,
//         title: "FIRMA ELECTRÓNICA",
//         issuer: "SUSCERTE",
//         imageUrl: "https://i.ibb.co/6crtcKtv/FIRMA-ELECTRINICA.png",
//         fullImageUrl: "https://i.ibb.co/6crtcKtv/FIRMA-ELECTRINICA.png"
//     },
//     {
//         id: 6,
//         title: "INFORMATICA FORENCE",
//         issuer: "SUSCERTE",
//         imageUrl: "https://i.ibb.co/ccHnXx2s/INFORMATICA-FORENCE.png",
//         fullImageUrl: "https://i.ibb.co/ccHnXx2s/INFORMATICA-FORENCE.png"
//     },
//     {
//         id: 7,
//         title: "SEGURIDAD INFORMATICA",
//         issuer: "SUSCERTE",
//         imageUrl: "https://i.ibb.co/gM070s6k/SEGURIDAD-INFORMATICA.png",
//         fullImageUrl: "https://i.ibb.co/gM070s6k/SEGURIDAD-INFORMATICA.png"
//     },
//     {
//         id: 8,
//         title: "PREVENCION DEL GROOMING",
//         issuer: "SUSCERTE",
//         imageUrl: "https://i.ibb.co/rG825gFD/PREVENCION-DEL-GROOMING.png",
//         fullImageUrl: "https://i.ibb.co/rG825gFD/PREVENCION-DEL-GROOMING.png"
//     },
//     {
//         id: 9,
//         title: "PREVENCION DEL CIBERACOSO",
//         issuer: "SUSCERTE",
//         imageUrl: "https://i.ibb.co/jPSjDMCv/PREVENCION-DEL-CIBERACOSO.png",
//         fullImageUrl: "https://i.ibb.co/jPSjDMCv/PREVENCION-DEL-CIBERACOSO.png"
//     },
//     {
//         id: 10,
//         title: "HACKING ÉTICO",
//         issuer: "SUSCERTE",
//         imageUrl: "https://i.ibb.co/bjG6HQSj/HACKING-ETICO.png",
//         fullImageUrl: "https://i.ibb.co/bjG6HQSj/HACKING-ETICO.png"
//     },
//     {
//         id: 11,
//         title: "FRAUDE ELECTRÓNICO",
//         issuer: "SUSCERTE",
//         imageUrl: "https://i.ibb.co/7tv5GyWw/FRAUDE-ELECTRONICO.png",
//         fullImageUrl: "https://i.ibb.co/7tv5GyWw/FRAUDE-ELECTRONICO.png"
//     },
//     {
//         id: 12,
//         title: "ESTRATEGIAS DE CIBERSEGURIDAD",
//         issuer: "SUSCERTE",
//         imageUrl: "https://i.ibb.co/2301LYmV/ESTRATEGIAS-DE-CIBERSEGURIDAD.png",
//         fullImageUrl: "https://i.ibb.co/2301LYmV/ESTRATEGIAS-DE-CIBERSEGURIDAD.png"
//     },
//     {
//         id: 13,
//         title: "BITCOIN 360",
//         issuer: "SUSCERTE",
//         imageUrl: "https://i.ibb.co/Df1mqqjy/BITCOIN-360.png",
//         fullImageUrl: "https://i.ibb.co/Df1mqqjy/BITCOIN-360.png"
//     }
//     // Puedes copiar y pegar este bloque para añadir más certificados
// ];