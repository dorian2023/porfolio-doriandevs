"use client";

import { useState, useEffect } from "react";

/**
 * Hook to track horizontal scroll progress of the page.
 * Useful for reading progress bars.
 */
export const useScrollProgress = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                setCompletion(
                    Number((currentProgress / scrollHeight).toFixed(2)) * 100
                );
            }
        };

        window.addEventListener("scroll", updateScrollCompletion);

        return () => {
            window.removeEventListener("scroll", updateScrollCompletion);
        };
    }, []);

    return completion;
};
