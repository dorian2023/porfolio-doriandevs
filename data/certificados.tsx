// data/certificados.ts

export interface Certificate {
    id: number;
    title: string;
    issuer: string;
    imageUrl: string;      // Miniatura para la tarjeta (puedes usar el mismo link)
    fullImageUrl: string;  // Imagen grande para el modal
}

export const certificados: Certificate[] = [
    {
        id: 1,
        title: "Full Stack Developer",
        issuer: "Tu Institución",
        imageUrl: "https://i.ibb.co/TMcZmLQj/Screenshot-20260112-180235.jpg",
        fullImageUrl: "https://i.ibb.co/TMcZmLQj/Screenshot-20260112-180235.jpg"
    },
    {
        id: 2,
        title: "Full Stack Developer",
        issuer: "Tu Institución",
        imageUrl: "https://i.ibb.co/G4RZYR4z/Sin-t-tulo-1-2.png",
        fullImageUrl: "https://i.ibb.co/G4RZYR4z/Sin-t-tulo-1-2.png"
    },
    {
        id: 3,
        title: "Full Stack Developer",
        issuer: "Tu Institución",
        imageUrl: "https://i.ibb.co/tu-enlace-aqui.jpg",
        fullImageUrl: "https://i.ibb.co/tu-enlace-aqui.jpg"
    },
    {
        id: 4,
        title: "Full Stack Developer",
        issuer: "Tu Institución",
        imageUrl: "https://i.ibb.co/tu-enlace-aqui.jpg",
        fullImageUrl: "https://i.ibb.co/tu-enlace-aqui.jpg"
    },
    {
        id: 5,
        title: "Full Stack Developer",
        issuer: "Tu Institución",
        imageUrl: "https://i.ibb.co/tu-enlace-aqui.jpg",
        fullImageUrl: "https://i.ibb.co/tu-enlace-aqui.jpg"
    },
    // Puedes copiar y pegar este bloque para añadir más certificados
];