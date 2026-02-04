import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                graphite: {
                    DEFAULT: '#0B0D10',
                    light: '#1A1D23',
                },
                electric: {
                    DEFAULT: '#5B7CFF',
                    light: '#7A95FF',
                    dark: '#3D5FE6',
                },
                violet: {
                    DEFAULT: '#9B5CFF',
                    light: '#B47FFF',
                    dark: '#7D3FE6',
                },
                offwhite: '#EDEDED',
                mutedgray: '#9AA0A6',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
            },
            animation: {
                'gradient': 'gradient 8s ease infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': {
                        'background-position': '0% 50%',
                    },
                    '50%': {
                        'background-position': '100% 50%',
                    },
                },
                glow: {
                    '0%': {
                        'box-shadow': '0 0 20px rgba(91, 124, 255, 0.3), 0 0 40px rgba(155, 92, 255, 0.2)',
                    },
                    '100%': {
                        'box-shadow': '0 0 30px rgba(91, 124, 255, 0.5), 0 0 60px rgba(155, 92, 255, 0.3)',
                    },
                },
                float: {
                    '0%, 100%': {
                        transform: 'translateY(0px)',
                    },
                    '50%': {
                        transform: 'translateY(-20px)',
                    },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
};

export default config;
