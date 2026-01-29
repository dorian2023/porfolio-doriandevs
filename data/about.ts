import type { WorkExperience, CounterData } from "@/types";

export const dataAboutPage: WorkExperience[] = [
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
];

export const dataCounter: CounterData[] = [
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
