"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { dataPortfolio } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Github, ExternalLink } from "lucide-react";

const ProjectList = () => {
    // Determine unique categories from projects (tags)
    const allTags = Array.from(new Set(dataPortfolio.flatMap(project => project.tags || [])));
    const categories = ["Todos", ...allTags];

    const [filter, setFilter] = useState("Todos");

    const filteredProjects = filter === "Todos"
        ? dataPortfolio
        : dataPortfolio.filter(project => project.tags?.includes(filter));

    return (
        <section className="py-12 space-y-12">
            <FadeIn direction="up">
                <div className="flex flex-col items-center space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-white">
                        Mis <span className="text-terciaro">Proyectos</span>
                    </h2>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
                        {categories.map((cat) => (
                            <Button
                                key={cat}
                                variant={filter === cat ? "tertiary" : "ghost"}
                                size="sm"
                                onClick={() => setFilter(cat)}
                                className={cn(
                                    "rounded-full px-4 py-1 text-xs md:text-sm",
                                    filter !== cat && "text-gray-400 hover:text-white"
                                )}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                    <FadeIn
                        key={project.id}
                        direction="up"
                        delay={index * 0.1}
                    >
                        <Card className="group p-0 overflow-hidden bg-secondary-900/40 border-white/5 hover:border-terciaro/30 transition-all">
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <Link href={project.urlGithub} target="_blank" passHref>
                                        <Button variant="outline" size="sm" className="rounded-full bg-black/50 backdrop-blur-md">
                                            <Github size={18} className="mr-2" /> Code
                                        </Button>
                                    </Link>
                                    <Link href={project.urlDemo} target="_blank" passHref>
                                        <Button variant="tertiary" size="sm" className="rounded-full">
                                            <ExternalLink size={18} className="mr-2" /> Demo
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="p-6 space-y-3">
                                <h3 className="text-xl font-bold text-white group-hover:text-terciaro transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-400 line-clamp-2">
                                    {project.description || "Desarrollo de aplicación web moderna con enfoque en UX/UI y performance."}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tags?.map(tag => (
                                        <Badge key={tag} variant="outline" className="bg-white/5 border-white/10 text-[10px]">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </FadeIn>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <FadeIn className="text-center py-20 text-gray-500">
                    No se encontraron proyectos en esta categoría.
                </FadeIn>
            )}
        </section>
    );
};

export default ProjectList;
