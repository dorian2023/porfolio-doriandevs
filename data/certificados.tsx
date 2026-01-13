// data/certificados.ts

export interface Certificate {
    id: number;
    title: string;
    issuer: string;
    imageUrl: string;      // Miniatura para la tarjeta (puedes usar el mismo link)
    fullImageUrl: string;  // Imagen grande para el modal
    websiteUrl?: string; // 👈 Agregamos esto (el '?' significa que es opcional)
}

export const certificados: Certificate[] = [
    {
        id: 1,
        title: "FULL STACK DEVELOPER",
        issuer: "EDTECNICA",
        imageUrl: "https://i.ibb.co/GvdLXv1p/Sin-t-tulo.png",
        fullImageUrl: "https://i.ibb.co/S4YVx5sN/PROGRAMACION-FULL-STACK.jpg",
        websiteUrl: "https://www.edtecnica.com" // 👈 Ejemplo de uso
    },
    {
        id: 2,
        title: "IA EN LA CIBERSEGURIDAD",
        issuer: "SUSCERTE",
        imageUrl: "https://i.ibb.co/Df1m9sNt/IA-EN-LA-CIBERSEGURIDAD.png",
        fullImageUrl: "https://i.ibb.co/Df1m9sNt/IA-EN-LA-CIBERSEGURIDAD.png",
        websiteUrl: "https://aulavirtual.suscerte.gob.ve/"
    },
    {
        id: 3,
        title: "CIBERSEGURIDAD",
        issuer: "SUSCERTE",
        imageUrl: "https://i.ibb.co/cKKffr2B/CIBERSEGURIDAD.png",
        fullImageUrl: "https://i.ibb.co/cKKffr2B/CIBERSEGURIDAD.png",
        websiteUrl: "https://aulavirtual.suscerte.gob.ve/"
    },
    {
        id: 4,
        title: "SEXTING",
        issuer: "SUSCERTE",
        imageUrl: "https://i.ibb.co/bjtvqtVQ/SEXTING.png",
        fullImageUrl: "https://i.ibb.co/bjtvqtVQ/SEXTING.png",
        websiteUrl: "https://aulavirtual.suscerte.gob.ve/"
    },
    {
        id: 5,
        title: "FIRMA ELECTRÓNICA",
        issuer: "SUSCERTE",
        imageUrl: "https://i.ibb.co/6crtcKtv/FIRMA-ELECTRINICA.png",
        fullImageUrl: "https://i.ibb.co/6crtcKtv/FIRMA-ELECTRINICA.png",
        websiteUrl: "https://aulavirtual.suscerte.gob.ve/"
    },
    {
        id: 6,
        title: "INFORMATICA FORENCE",
        issuer: "SUSCERTE",
        imageUrl: "https://i.ibb.co/ccHnXx2s/INFORMATICA-FORENCE.png",
        fullImageUrl: "https://i.ibb.co/ccHnXx2s/INFORMATICA-FORENCE.png",
        websiteUrl: "https://aulavirtual.suscerte.gob.ve/"
    },
    {
        id: 7,
        title: "SEGURIDAD INFORMATICA",
        issuer: "SUSCERTE",
        imageUrl: "https://i.ibb.co/gM070s6k/SEGURIDAD-INFORMATICA.png",
        fullImageUrl: "https://i.ibb.co/gM070s6k/SEGURIDAD-INFORMATICA.png",
        websiteUrl: "https://aulavirtual.suscerte.gob.ve/"
    },
    {
        id: 8,
        title: "PREVENCION DEL GROOMING",
        issuer: "SUSCERTE",
        imageUrl: "https://i.ibb.co/rG825gFD/PREVENCION-DEL-GROOMING.png",
        fullImageUrl: "https://i.ibb.co/rG825gFD/PREVENCION-DEL-GROOMING.png",
        websiteUrl: "https://aulavirtual.suscerte.gob.ve/"
    },
    {
        id: 9,
        title: "PREVENCION DEL CIBERACOSO",
        issuer: "SUSCERTE",
        imageUrl: "https://i.ibb.co/jPSjDMCv/PREVENCION-DEL-CIBERACOSO.png",
        fullImageUrl: "https://i.ibb.co/jPSjDMCv/PREVENCION-DEL-CIBERACOSO.png",
        websiteUrl: "https://aulavirtual.suscerte.gob.ve/"
    },
    {
        id: 10,
        title: "HACKING ÉTICO",
        issuer: "SUSCERTE",
        imageUrl: "https://i.ibb.co/bjG6HQSj/HACKING-ETICO.png",
        fullImageUrl: "https://i.ibb.co/bjG6HQSj/HACKING-ETICO.png",
        websiteUrl: "https://aulavirtual.suscerte.gob.ve/"
    },
    {
        id: 11,
        title: "FRAUDE ELECTRÓNICO",
        issuer: "SUSCERTE",
        imageUrl: "https://i.ibb.co/7tv5GyWw/FRAUDE-ELECTRONICO.png",
        fullImageUrl: "https://i.ibb.co/7tv5GyWw/FRAUDE-ELECTRONICO.png",
        websiteUrl: "https://aulavirtual.suscerte.gob.ve/"
    },
    {
        id: 12,
        title: "ESTRATEGIAS DE CIBERSEGURIDAD",
        issuer: "SUSCERTE",
        imageUrl: "https://i.ibb.co/2301LYmV/ESTRATEGIAS-DE-CIBERSEGURIDAD.png",
        fullImageUrl: "https://i.ibb.co/2301LYmV/ESTRATEGIAS-DE-CIBERSEGURIDAD.png",
        websiteUrl: "https://aulavirtual.suscerte.gob.ve/"
    },
    {
        id: 13,
        title: "BITCOIN 360",
        issuer: "SUSCERTE",
        imageUrl: "https://i.ibb.co/Df1mqqjy/BITCOIN-360.png",
        fullImageUrl: "https://i.ibb.co/Df1mqqjy/BITCOIN-360.png",
        websiteUrl: "https://aulavirtual.suscerte.gob.ve/"
    },
    {
        id: 14,
        title: "DOMINA LA IA CON GEMINI",
        issuer: "GOOGLE",
        imageUrl: "https://i.ibb.co/bgFVD2dJ/Sin-t-tulo-1.pngg",
        fullImageUrl: "https://i.ibb.co/bgFVD2dJ/Sin-t-tulo-1.png",
        websiteUrl: "https://grow.google/intl/es/ai-opportunity/"
    }
    // Puedes copiar y pegar este bloque para añadir más certificados
];