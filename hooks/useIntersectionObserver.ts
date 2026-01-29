"use client";

import { useEffect, useState, useRef, RefObject } from "react";

interface IntersectionObserverOptions extends IntersectionObserverInit {
    freezeOnceVisible?: boolean;
}

/**
 * Hook to track visibility of an element using IntersectionObserver.
 * Useful for triggering animations when elements enter the view.
 */
export function useIntersectionObserver<T extends Element>(
    elementRef: RefObject<T | null>,
    {
        threshold = 0,
        root = null,
        rootMargin = "0%",
        freezeOnceVisible = false,
    }: IntersectionObserverOptions
): IntersectionObserverEntry | undefined {
    const [entry, setEntry] = useState<IntersectionObserverEntry>();

    const frozen = entry?.isIntersecting && freezeOnceVisible;

    const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
        setEntry(entry);
    };

    useEffect(() => {
        const node = elementRef?.current;
        const hasIOSupport = !!window.IntersectionObserver;

        if (!hasIOSupport || frozen || !node) return;

        const observerParams = { threshold, root, rootMargin };
        const observer = new IntersectionObserver(updateEntry, observerParams);

        observer.observe(node);

        return () => observer.disconnect();
    }, [elementRef, threshold, root, rootMargin, frozen]);

    return entry;
}
