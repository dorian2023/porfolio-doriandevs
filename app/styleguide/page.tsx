"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideIn } from "@/components/animations/SlideIn";
import ContainerPage from "@/components/layout/ContainerPage";

export default function StyleGuide() {
    return (
        <ContainerPage>
            <div className="space-y-12 py-12">
                <FadeIn>
                    <h1 className="text-5xl font-bold text-white mb-8">Style Guide - Fase 2</h1>
                </FadeIn>

                {/* Buttons Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b border-white/10 pb-2">Buttons</h2>
                    <div className="flex flex-wrap gap-4">
                        <Button variant="primary">Primary Button</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="tertiary">Tertiary (Accento)</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Button size="sm">Small</Button>
                        <Button size="md">Medium</Button>
                        <Button size="lg">Large</Button>
                    </div>
                </section>

                {/* Cards Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b border-white/10 pb-2">Cards (Glassmorphism)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card>
                            <h3 className="text-xl font-bold mb-2">Premium Card</h3>
                            <p className="text-white/60">Este es un ejemplo de card con efecto de vidrio y desenfoque.</p>
                        </Card>
                        <Card className="border-primary-500/30">
                            <h3 className="text-xl font-bold mb-2">Border Accent</h3>
                            <div className="flex gap-2 mt-4">
                                <Badge>React</Badge>
                                <Badge variant="secondary">Next.js</Badge>
                            </div>
                        </Card>
                        <Card isHoverable={false}>
                            <h3 className="text-xl font-bold mb-2">Static Card</h3>
                            <p className="text-white/60">Sin efecto de elevación en hover.</p>
                        </Card>
                    </div>
                </section>

                {/* Badges Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b border-white/10 pb-2">Badges</h2>
                    <div className="flex flex-wrap gap-3">
                        <Badge variant="primary">Primary</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="tertiary">Tertiary</Badge>
                        <Badge variant="outline">Outline</Badge>
                    </div>
                </section>

                {/* Forms Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b border-white/10 pb-2">Forms</h2>
                    <div className="max-w-md space-y-4">
                        <Input placeholder="Tu nombre" />
                        <Input type="email" placeholder="email@ejemplo.com" />
                        <Textarea placeholder="Cuéntame sobre tu proyecto..." />
                    </div>
                </section>

                {/* Animations Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b border-white/10 pb-2">Animations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FadeIn direction="up" delay={0.2}>
                            <div className="bg-white/5 p-8 rounded-2xl text-center">Fade In Up</div>
                        </FadeIn>
                        <SlideIn direction="right" delay={0.4}>
                            <div className="bg-white/5 p-8 rounded-2xl text-center">Slide In Right</div>
                        </SlideIn>
                    </div>
                </section>
            </div>
        </ContainerPage>
    );
}
