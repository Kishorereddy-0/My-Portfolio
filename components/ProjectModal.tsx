'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        impact: string;
        tech: string[];
        gradient: string;
        image?: string;
        description?: string;
        features?: string[];
        challenges?: string[];
        results?: string[];
        github?: string;
        demo?: string;
    };
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
    const modalContentRef = useRef<HTMLDivElement>(null);

    // Close modal on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-darkbg/90 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal Content - Simplified Structure */}
            <div
                ref={modalContentRef}
                className="relative w-full max-w-4xl bg-graphite-light/95 backdrop-blur-xl border border-electric/20 rounded-3xl shadow-2xl animate-scaleIn overflow-y-auto custom-scrollbar"
                style={{ maxHeight: '85vh' }}
                onClick={(e) => e.stopPropagation()}
                onWheel={(e) => {
                    // Prevent scroll from propagating to background
                    e.stopPropagation();
                }}
            >
                <div className="p-8 pb-12">
                    {/* Close Button - Sticky at top */}
                    <button
                        onClick={onClose}
                        className="sticky top-0 float-right w-10 h-10 flex items-center justify-center rounded-full glass border border-electric/30 hover:border-electric hover:bg-electric/10 transition-all duration-300 cursor-hover group z-50 -mr-2 -mt-2 mb-4"
                        aria-label="Close modal"
                    >
                        <X className="w-5 h-5 text-offwhite group-hover:text-electric transition-colors" />
                    </button>

                    {/* Project Header */}
                    <div className="mb-8">
                        <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} mb-4`}>
                            <span className="text-sm font-semibold text-white">
                                Project Details
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-offwhite">
                            {project.title}
                        </h2>
                        <p className="text-xl text-electric font-semibold mb-6">
                            {project.impact}
                        </p>
                    </div>

                    {/* Project Image */}
                    {project.image && (
                        <div className="mb-8 rounded-xl overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    )}

                    {/* Description */}
                    {project.description && (
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-violet">Overview</h3>
                            <p className="text-mutedgray leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    )}

                    {/* Key Features */}
                    {project.features && project.features.length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-electric">Key Features</h3>
                            <ul className="space-y-3">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-electric mt-1">▸</span>
                                        <span className="text-mutedgray">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Technical Challenges */}
                    {project.challenges && project.challenges.length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-violet">Technical Challenges</h3>
                            <ul className="space-y-3">
                                {project.challenges.map((challenge, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-violet mt-1">▸</span>
                                        <span className="text-mutedgray">{challenge}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Results & Impact */}
                    {project.results && project.results.length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-electric">Results & Impact</h3>
                            <ul className="space-y-3">
                                {project.results.map((result, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-electric mt-1">✓</span>
                                        <span className="text-mutedgray">{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Technologies */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-4 text-violet">Technologies Used</h3>
                        <div className="flex flex-wrap gap-3">
                            {project.tech.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 glass rounded-full text-offwhite border border-electric/30 hover:border-electric transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-6 border-t border-electric/20">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-electric text-white rounded-full font-semibold hover:bg-electric-light transition-all duration-300 glow-electric cursor-hover"
                            >
                                View on GitHub
                            </a>
                        )}
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 glass border-2 border-electric/50 text-offwhite rounded-full font-semibold hover:border-electric hover:bg-electric/10 transition-all duration-300 cursor-hover"
                            >
                                Live Demo
                            </a>
                        )}
                        <a
                            href="https://drive.google.com/uc?export=download&id=18Yno5XsjbLHDYpB-atTD3NiEn6W_gWkD"
                            download
                            className="px-6 py-3 glass border-2 border-violet/50 text-offwhite rounded-full font-semibold hover:border-violet hover:bg-violet/10 transition-all duration-300 cursor-hover flex items-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
