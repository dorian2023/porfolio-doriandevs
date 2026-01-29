import { Crop, Pencil, Computer, Book, Rocket, FileSliders } from "lucide-react";
import type { Service } from "@/types";

export const serviceData: Service[] = [
    {
        icon: <Crop size={ 30} strokeWidth = { 2} />,
    title: "Branding",
    description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
  },
{
    icon: <Pencil size={ 30 } strokeWidth = { 2} />,
        title: "Diseño web",
            description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
{
    icon: <Computer size={ 30 } strokeWidth = { 2} />,
        title: "Desarrollo web",
            description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  },
{
    icon: <Book size={ 30 } strokeWidth = { 2} />,
        title: "Copywriting",
            description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
  },
{
    icon: <Rocket size={ 30 } strokeWidth = { 2} />,
        title: "SEO",
            description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
  },
{
    icon: <FileSliders size={ 30 } strokeWidth = { 2} />,
        title: "ADMINISTRATION",
            description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
  },
];
