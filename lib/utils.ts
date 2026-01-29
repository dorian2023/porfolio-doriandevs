import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility to merge tailwind classes safely.
 * Combines clsx for conditional classes and twMerge for overriding conflicts.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
