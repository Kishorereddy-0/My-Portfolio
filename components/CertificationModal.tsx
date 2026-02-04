'use client';

import { useEffect, useRef } from 'react';
import { X, Award, Calendar, CheckCircle, ExternalLink } from 'lucide-react';

interface CertificationModalProps {
    isOpen: boolean;
    onClose: () => void;
    certification: {
        name: string;
        issuer: string;
        year: string;
        highlight: boolean;
        image?: string;
        logo?: string;
        description?: string;
        skills?: string[];
        credentialId?: string;
        credentialUrl?: string;
    };
}

export default function CertificationModal({ isOpen, onClose, certification }: CertificationModalProps) {
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

            {/* Modal Content */}
            <div
                ref={modalContentRef}
                className="relative w-full max-w-2xl bg-graphite-light/95 backdrop-blur-xl border border-electric/20 rounded-3xl shadow-2xl animate-scaleIn overflow-y-auto custom-scrollbar"
                style={{ maxHeight: '85vh' }}
                onClick={(e) => e.stopPropagation()}
                onWheel={(e) => {
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

                    {/* Header Section */}
                    <div className="text-center mb-8">
                        {/* Badge and Logo Container */}
                        <div className="flex items-center justify-center gap-6 mb-6">
                            {/* Badge */}
                            <div className="w-24 h-24 rounded-full glass flex items-center justify-center border-2 border-electric/30 shadow-[0_0_30px_rgba(91,124,255,0.2)]">
                                {certification.image ? (
                                    <img
                                        src={certification.image}
                                        alt={certification.name}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                ) : (
                                    <Award className="w-10 h-10 text-electric" />
                                )}
                            </div>

                            {/* Issuer Logo */}
                            {certification.logo && (
                                <div className="w-24 h-24 glass rounded-xl flex items-center justify-center p-3 border border-white/10">
                                    <img
                                        src={certification.logo}
                                        alt={`${certification.issuer} logo`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            )}
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-offwhite leading-tight">
                            {certification.name}
                        </h2>

                        <div className="flex items-center justify-center gap-2 text-electric font-medium text-lg">
                            <span>{certification.issuer}</span>
                            <span className="text-mutedgray">•</span>
                            <span className="text-mutedgray flex items-center gap-1">
                                <Calendar className="w-4 h-4" /> {certification.year}
                            </span>
                        </div>
                    </div>

                    {/* Description */}
                    {certification.description && (
                        <div className="mb-8 p-6 glass rounded-2xl border border-white/5">
                            <h3 className="text-xl font-bold mb-3 text-violet">About Certification</h3>
                            <p className="text-mutedgray leading-relaxed">
                                {certification.description}
                            </p>
                        </div>
                    )}

                    {/* Skills Learned */}
                    {certification.skills && certification.skills.length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-4 text-electric">Skills Mastered</h3>
                            <div className="flex flex-wrap gap-2">
                                {certification.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1.5 glass rounded-lg text-sm text-offwhite border border-white/10 flex items-center gap-2"
                                    >
                                        <CheckCircle className="w-3.5 h-3.5 text-electric" />
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Verification Button */}
                    {certification.credentialUrl && (
                        <div className="text-center pt-4 border-t border-white/10">
                            <a
                                href={certification.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-electric text-white rounded-full font-semibold hover:bg-electric-light transition-all duration-300 glow-electric cursor-hover"
                            >
                                Verify Credential <ExternalLink className="w-4 h-4" />
                            </a>
                            {certification.credentialId && (
                                <p className="mt-3 text-sm text-mutedgray font-mono">
                                    ID: {certification.credentialId}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
