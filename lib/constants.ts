/**
 * Design system constants and animation configurations.
 */

export const TRANSITIONS = {
    DURATION: 0.3,
    EASE: [0.25, 0.1, 0.25, 1],
    VARIANTS: {
        up: { y: 20, opacity: 0 },
        down: { y: -20, opacity: 0 },
        left: { x: 20, opacity: 0 },
        right: { x: -20, opacity: 0 },
    }
};

export const COLORS = {
    PRIMARY: '#f5741c',
    SECONDARY: '#131424',
    ACCENT: 'rgb(194, 4, 28)',
    DARK: '#09070f',
};

export const BREAKPOINTS = {
    SM: '640px',
    MD: '768px',
    LG: '1024px',
    XL: '1280px',
    '2XL': '1536px',
};

export const SHADOWS = {
    GLASS: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    PREMIUM: '0 0 50px -12px rgba(245, 116, 28, 0.25)',
};
