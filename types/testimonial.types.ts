/**
 * Testimonio de cliente
 */
export interface Testimonial {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    position?: string;
    company?: string;
    rating?: number;
}
