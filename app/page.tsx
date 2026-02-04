import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="relative">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Certifications />
                <Contact />
            </main>
        </>
    );
}
