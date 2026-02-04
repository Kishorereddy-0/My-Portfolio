'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedGradient() {
    const gradientRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const gradient = gradientRef.current;
        if (!gradient) return;

        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            // Smooth follow
            currentX += (mouseX - currentX) * 0.05;
            currentY += (mouseY - currentY) * 0.05;

            if (gradient) {
                gradient.style.background = `
          radial-gradient(circle at ${currentX}px ${currentY}px, rgba(91, 124, 255, 0.15), transparent 50%),
          radial-gradient(circle at ${window.innerWidth - currentX}px ${currentY}px, rgba(155, 92, 255, 0.15), transparent 50%),
          radial-gradient(circle at ${currentX}px ${window.innerHeight - currentY}px, rgba(91, 124, 255, 0.1), transparent 50%)
        `;
            }

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={gradientRef}
            className="fixed inset-0 pointer-events-none z-0 transition-all duration-300"
        />
    );
}
