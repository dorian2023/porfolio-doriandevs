import { BookText, CodeSquare, HomeIcon, UserRound, Speech } from "lucide-react";
import type { NavItem, ButtonLink } from "@/types";

export const itemsNavbar: NavItem[] = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={ 25} color = "#fff" strokeWidth = { 1} />,
    link: "/",
  },
{
    id: 2,
        title: "User",
            icon: <UserRound size={ 25 } color = "#fff" strokeWidth = { 1} />,
                link: "/about-me",
  },
{
    id: 3,
        title: "Book",
            icon: <BookText size={ 25 } color = "#fff" strokeWidth = { 1} />,
                link: "/services",
  },
{
    id: 4,
        title: "Target",
            icon: <CodeSquare size={ 25 } color = "#fff" strokeWidth = { 1} />,
                link: "/portfolio",
  },
{
    id: 5,
        title: "Testomionials",
            icon: <Speech size={ 25 } color = "#fff" strokeWidth = { 1} />,
                link: "/testimonials",
  },
];

export const verProyectos: ButtonLink[] = [
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
