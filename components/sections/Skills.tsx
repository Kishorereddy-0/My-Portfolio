'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassCard from '@/components/GlassCard';
import SkillIcon from '@/components/SkillIcon';

gsap.registerPlugin(ScrollTrigger);

const skills = [
    {
        category: 'Languages',
        items: ['Python', 'Java', 'JavaScript (Basics)'],
        color: 'electric',
    },
    {
        category: 'Web Development',
        items: ['HTML5', 'CSS3', 'JavaScript', 'React.js (Basics)', 'Bootstrap', 'Tailwind CSS (Basics)'],
        color: 'violet',
    },
    {
        category: 'Databases',
        items: ['MongoDB'],
        color: 'electric',
    },
    {
        category: 'Cybersecurity',
        items: [
            'Ethical Hacking (CEH v13)',
            'Web Application Security',
            'Network Security Basics',
            'Phishing Detection & Social Engineering',
            'Intrusion Monitoring',
            'Vulnerability Assessment',
            'Secure Coding Practices'
        ],
        color: 'violet',
    },
    {
        category: 'UI/UX Design',
        items: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Design Thinking', 'Figma'],
        color: 'electric',
    },
    {
        category: 'Tools & Platforms',
        items: ['Git & GitHub', 'Postman', 'VS Code', 'Google Colab', 'Canva'],
        color: 'violet',
    },
];

export default function Skills() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.skill-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                y: 80,
                autoAlpha: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                clearProps: 'all',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text">
                    Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <GlassCard
                            key={index}
                            className={`skill-card group cursor-hover ${skill.color === 'electric' ? 'hover:glow-electric' : 'hover:glow-violet'
                                }`}
                        >
                            <h3 className={`text-2xl font-bold mb-6 ${skill.color === 'electric' ? 'text-electric' : 'text-violet'
                                }`}>
                                {skill.category}
                            </h3>
                            <ul className="space-y-3">
                                {skill.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className="text-offwhite/80 flex items-center gap-3 group-hover:text-offwhite transition-colors"
                                    >
                                        <SkillIcon name={item} className="w-6 h-6" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
