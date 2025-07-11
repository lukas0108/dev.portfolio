import { useEffect } from 'react';
import ContentDownload from './ContentDownload';
import Options from './Options';
import Exit from './Exit';

export default function Header() {
    useEffect(() => {
        const sections = document.querySelectorAll('main > section');
        const navItems = document.querySelectorAll('nav li[data-section]');

        function onScroll() {
            let activeSection = null;
        
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const id = section.getAttribute('id');
                const navItem = document.querySelector(`nav li[data-section="${id}"]`);
                const threshold = parseFloat(navItem?.dataset.threshold || '0.5');
                const thresholdPosition = window.innerHeight * threshold;
                
                if (rect.top <= thresholdPosition && rect.bottom >= thresholdPosition) {
                    activeSection = section;
                }
            });
        
            if (activeSection) {
                const id = activeSection.getAttribute('id');
                navItems.forEach((li) => {
                    li.classList.remove('active');
                    if (li.dataset.section === id) {
                        li.classList.add('active');
                    }
                });
            }
        }

        window.addEventListener('scroll', onScroll);
        onScroll(); // Run once on load

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const sectionOffsets = {
        home: 0,
        projects: 0.1, 
        about: 0.3,
        contact: 0
    };

    function scrollToSection(id) {
        const section = document.getElementById(id);
        if (section) {
            const customOffset = sectionOffsets[id] || 0;
            const offset = window.innerHeight * customOffset;
            const top = section.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }

    return (
        <header className="fixed flex flex-col justify-center top-0 left-0 h-screen w-[425px] bg-transparent text-gray-500 header-2">
            <div className="flex flex-col font-[1000] text-8xl uppercase leading-[69px] tracking-tight text-gray-800 ml-16 mb-10">
                <h1>main</h1>
                <h1 className="ml-[50.5px] tracking-tight text-gray-400">menu</h1>
            </div>
            <nav className="nav h-fit ml-16 mr-4">
                <ul className="flex flex-col justify-center h-full w-full gap-1 [&>li]:relative">
                    <li data-section="home" data-threshold="0">
                        <a onClick={() => scrollToSection('home')} className="nav-game hover:cursor-pointer">
                            <p>NEW STORY</p>
                        </a>
                    </li>
                    <li data-section="projects" data-threshold="0.2">
                        <a onClick={() => scrollToSection('projects')} className="nav-game hover:cursor-pointer">
                            <p>SHOWCASE</p>
                        </a>
                    </li>
                    <li data-section="about" data-threshold="0.6">
                        <a onClick={() => scrollToSection('about')} className="nav-game hover:cursor-pointer">
                            <p>EXTRAS</p>
                        </a>
                    </li>
                    <li data-section="contact" data-threshold="0.9">
                        <a onClick={() => scrollToSection('contact')} className="nav-game hover:cursor-pointer">
                            <p>CREDITS</p>
                        </a>
                    </li>
                    <ContentDownload />
                    <Options />
                    <Exit />
                </ul>
            </nav>
        </header>
    );
}