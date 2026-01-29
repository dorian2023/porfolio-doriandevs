/**
 * Proyecto del Portfolio
 */
export interface Project {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
    description?: string;
    tags?: string[];
    category?: string;
}

/**
 * Card de Proyecto (formato alternativo)
 */
export interface ProjectCard {
    id: number;
    CardTitle: string;
    Button: string;
    titleHref: string;
    CardDescription: string;
    btnHref: string;
    image?: string;
}
