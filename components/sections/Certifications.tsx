'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CertificationModal from '@/components/CertificationModal';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
    {
        name: 'Certified Ethical Hacker (CEH)',
        issuer: 'EC-Council',
        year: 'Dec 2025',
        highlight: true,
        image: '/CEH_2E345519D3F7.png',
        logo: '/CEA-logo.gif',
        description: 'A comprehensive certification covering the latest ethical hacking tools, techniques, and methodologies used by information security professionals to lawfully hack an organization.',
        skills: ['Penetration Testing', 'Network Scanning', 'Vulnerability Assessment', 'System Hacking', 'Social Engineering', 'Web App Security'],
        credentialUrl: 'https://aspen.eccouncil.org/Verify',
        credentialId: 'ECC7920413586'
    },
    {
        name: 'Ethical Hacker',
        issuer: 'Cisco Networking Academy',
        year: 'Dec 2024',
        highlight: false,
        image: '/cisco-ethical-hacker-badge.png',
        logo: '/cisco-logo.png',
        description: 'Validates skills in offensive security, including understanding vectors of attack, using hacking tools, and implementing countermeasures to secure systems.',
        skills: ['Network Security', 'Linux', 'Python for Security', 'Cryptography', 'Cyber Threats'],
        credentialUrl: 'https://www.credly.com/badges/dbb1f538-116b-47c6-aea0-205543732198/public_url',
    },
    {
        name: 'Introduction to Cybersecurity',
        issuer: 'Cisco Networking Academy',
        year: 'May 2024',
        highlight: false,
        image: '/cisco-intro-cybersecurity-badge.png',
        logo: '/cisco-logo.png',
        description: 'Foundational certification covering the basics of cybersecurity trends, threats, and staying safe in cyberspace, as well as protecting personal and company data.',
        skills: ['Data Privacy', 'Network Protection', 'Security Policies', 'Threat Landscape', 'Digital Safety'],
        credentialUrl: 'https://www.credly.com/badges/293995d3-b76c-4306-afcc-f48a7ab041f5/public_url',
    },
];

export default function Certifications() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.cert-item', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                x: -50,
                autoAlpha: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                clearProps: 'all',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleCertClick = (cert: typeof certifications[0]) => {
        setSelectedCert(cert);
        setIsModalOpen(true);
    };

    return (
        <section id="certifications" ref={sectionRef} className="py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text">
                    Certifications
                </h2>

                <div className="space-y-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            onClick={() => handleCertClick(cert)}
                            className={`cert-item group cursor-hover p-6 rounded-xl border transition-all duration-300 cursor-pointer ${cert.highlight
                                ? 'border-electric bg-electric/5 hover:bg-electric/10 hover:glow-electric'
                                : 'border-mutedgray/20 hover:border-electric/50 hover:bg-electric/5'
                                }`}
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-offwhite group-hover:text-electric transition-colors">
                                        {cert.name}
                                    </h3>
                                    <p className="text-mutedgray mt-1">{cert.issuer}</p>
                                </div>
                                <div className="text-electric font-semibold text-lg">{cert.year}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certification Modal */}
            {selectedCert && (
                <CertificationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    certification={selectedCert}
                />
            )}
        </section>
    );
}
