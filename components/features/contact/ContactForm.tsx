"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import Card from "@/components/ui/Card";
import { Send, CheckCircle2 } from "lucide-react";

const ContactForm = () => {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    if (status === "success") {
        return (
            <FadeIn direction="up">
                <Card className="text-center py-16 space-y-6 bg-secondary-900/40 border-terciaro/30 backdrop-blur-md">
                    <div className="flex justify-center">
                        <CheckCircle2 className="w-16 h-16 text-terciaro animate-bounce" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">¡Mensaje Enviado!</h3>
                    <p className="text-gray-400 max-w-sm mx-auto">
                        Gracias por contactarme. Te responderé lo antes posible para empezar a trabajar en tu proyecto.
                    </p>
                    <Button variant="outline" onClick={() => setStatus("idle")}>
                        Enviar otro mensaje
                    </Button>
                </Card>
            </FadeIn>
        );
    }

    return (
        <FadeIn direction="up">
            <Card className="p-8 md:p-12 bg-secondary-900/40 border-white/5 backdrop-blur-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 ml-1">Nombre</label>
                            <Input
                                required
                                placeholder="Juan Pérez"
                                className="bg-black/20 border-white/10"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 ml-1">Email</label>
                            <Input
                                required
                                type="email"
                                placeholder="juan@ejemplo.com"
                                className="bg-black/20 border-white/10"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">Asunto</label>
                        <Input
                            required
                            placeholder="Desarrollo de Aplicación Web"
                            className="bg-black/20 border-white/10"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">Mensaje</label>
                        <Textarea
                            required
                            placeholder="Cuéntame un poco más sobre tu proyecto..."
                            className="bg-black/20 border-white/10 min-h-[150px]"
                        />
                    </div>

                    <Button
                        variant="tertiary"
                        type="submit"
                        className="w-full md:w-auto"
                        disabled={status === "loading"}
                    >
                        {status === "loading" ? "Enviando..." : (
                            <>
                                Enviar Mensaje <Send className="ml-2 w-4 h-4" />
                            </>
                        )}
                    </Button>
                </form>
            </Card>
        </FadeIn>
    );
};

export default ContactForm;
