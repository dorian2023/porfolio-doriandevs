"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Button from "./Button";
import { cn } from "@/lib/utils";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    className?: string;
}

const Modal = ({ isOpen, onClose, title, children, className }: ModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className={cn(
                            "relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-secondary-900 p-6 shadow-2xl",
                            className
                        )}
                    >
                        <div className="flex items-center justify-between mb-4">
                            {title && <h3 className="text-xl font-bold text-white">{title}</h3>}
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={onClose}
                                className="p-1 h-auto rounded-full"
                            >
                                <X size={20} />
                            </Button>
                        </div>
                        <div className="text-white/80">{children}</div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
