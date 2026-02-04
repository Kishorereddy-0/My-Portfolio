'use client';

import { useRef, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    href?: string;
    onClick?: () => void;
    target?: string;
    rel?: string;
    download?: string;
}

export default function MagneticButton({
    children,
    className = '',
    href,
    onClick,
    target,
    rel,
    download,
}: MagneticButtonProps) {
    const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current!.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    if (href) {
        return (
            <motion.a
                ref={ref as React.RefObject<HTMLAnchorElement>}
                href={href}
                target={target}
                rel={rel}
                download={download}
                onMouseMove={handleMouse}
                onMouseLeave={reset}
                animate={{ x, y }}
                transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
                className={`cursor-hover inline-block ${className}`}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            ref={ref as React.RefObject<HTMLButtonElement>}
            onClick={onClick}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
            className={`cursor-hover inline-block ${className}`}
        >
            {children}
        </motion.button>
    );
}
