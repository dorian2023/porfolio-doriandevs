// // Definimos el contrato de datos
export interface Certificate {
    id: number;
    title: string;
    issuer: string;
    imageUrl: string;      // Miniatura para la tarjeta
    fullImageUrl: string;  // Imagen para el modal
}

// Exportamos la lista de certificados
export const certificados: Certificate[] = [
    {
        id: 1,
        title: "Full Stack Developer",
        issuer: "Udemy",
        imageUrl: "https://dorian-gonzalez2.imgbb.com/",
        fullImageUrl: "https://dorian-gonzalez2.imgbb.com/"
    },
    {
        id: 2,
        title: "Especialista en IA con Python",
        issuer: "Google",
        imageUrl: "https://i.ibb.co/tu-imagen-2.jpg",
        fullImageUrl: "https://i.ibb.co/tu-imagen-grande-2.jpg"
    }
];