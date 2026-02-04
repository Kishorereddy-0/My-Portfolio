'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Line-by-line text reveal
            gsap.from('.about-line', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    end: 'bottom 80%',
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
            });

            // Glow animation
            gsap.to('.about-glow', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                },
                opacity: 0.6,
                duration: 2,
                ease: 'power2.inOut',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center py-32 px-6"
        >
            {/* Background glow */}
            <div className="about-glow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet/10 rounded-full blur-3xl opacity-0" />

            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="about-line text-5xl md:text-6xl font-bold mb-12 gradient-text">
                    About
                </h2>

                <div className="space-y-6 text-lg md:text-xl text-offwhite/90 leading-relaxed">
                    <p className="about-line">
                        Cybersecurity-focused{' '}
                        <span className="text-electric font-semibold">B.Tech Computer Science & Engineering (Cyber Security)</span>{' '}
                        final-year student with{' '}
                        <span className="text-violet font-semibold">CEH v13 certification</span>{' '}
                        and hands-on experience in secure application development and cybersecurity-driven projects. Possesses a strong foundation in{' '}
                        <span className="text-electric font-semibold">ethical hacking</span>,{' '}
                        <span className="text-electric font-semibold">web application security</span>,{' '}
                        <span className="text-violet font-semibold">network security fundamentals</span>, and{' '}
                        <span className="text-violet font-semibold">defensive security practices</span>, with practical exposure to identifying and mitigating real-world cyber threats.
                    </p>
                    <p className="about-line">
                        Skilled in web development using{' '}
                        <span className="text-electric font-semibold">HTML, CSS, JavaScript</span>, and{' '}
                        <span className="text-electric font-semibold">React.js (Basics)</span>, along with{' '}
                        <span className="text-violet font-semibold">Python-based backend logic</span>{' '}
                        and{' '}
                        <span className="text-violet font-semibold">MongoDB</span>{' '}
                        for data handling. Experienced in designing user-friendly and secure digital interfaces through{' '}
                        <span className="text-electric font-semibold">UI/UX principles</span>,{' '}
                        <span className="text-electric font-semibold">wireframing</span>, and{' '}
                        <span className="text-electric font-semibold">prototyping using Figma</span>, ensuring both usability and security are integrated into applications.
                    </p>
                    <p className="about-line">
                        Worked on{' '}
                        <span className="text-violet font-semibold">AI-driven phishing simulation and detection systems</span>, analyzing user behavior, phishing patterns, and intrusion indicators to improve security awareness and threat detection. Demonstrated strong{' '}
                        <span className="text-electric font-semibold">analytical, problem-solving, and reporting skills</span>{' '}
                        through dashboards, monitoring systems, and security logs. Actively seeking entry-level roles in{' '}
                        <span className="text-violet font-semibold">cybersecurity, SOC operations, IT security, or secure web application development</span>, where technical skills and a security-first mindset can contribute to organizational resilience.
                    </p>
                </div>

                {/* Abstract visual element */}
                <div className="about-line mt-16 flex gap-4">
                    <div className="w-20 h-1 bg-electric rounded-full" />
                    <div className="w-32 h-1 bg-violet rounded-full" />
                    <div className="w-16 h-1 bg-electric rounded-full" />
                </div>
            </div>
        </section>
    );
}
