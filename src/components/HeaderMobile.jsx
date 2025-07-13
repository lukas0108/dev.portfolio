import { useEffect, useState } from 'react';
import ContentDownload from './ContentDownload';
import Options from './Options';
import Exit from './Exit';

export default function HeaderMobile() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const sectionOffsets = {
        home: 0,
        projects: 0.1, 
        about: 0.2,
        contact: 0
    };

    function scrollToSection(id) {
        const section = document.getElementById(id);
        if (section) {
            const customOffset = sectionOffsets[id] || 0;
            const offset = window.innerHeight * customOffset;
            const top = section.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
            setIsOpen(false);
        }
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (isOpen && !event.target.closest('.mobile-header')) {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen]);

    // Scroll detection for auto-hide
    useEffect(() => {
        function handleScroll() {
            const currentScrollY = window.scrollY;
            
            // Don't hide if at the very top
            if (currentScrollY < 10) {
                setIsVisible(true);
                setLastScrollY(currentScrollY);
                return;
            }

            // Don't hide if menu is open
            if (isOpen) {
                setLastScrollY(currentScrollY);
                return;
            }

            // Hide when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        }

        // Throttle scroll events for better performance
        let ticking = false;
        function throttledScroll() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        }

        window.addEventListener('scroll', throttledScroll);
        return () => window.removeEventListener('scroll', throttledScroll);
    }, [lastScrollY, isOpen]);

    return (
        <header className={`mobile-header fixed top-0 left-0 z-50 w-full h-16 flex items-center bg-black border-b border-rebecca-light transition-transform duration-300 ease-in-out ${
            isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}>
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-col justify-center items-center w-12 h-12 rounded-lg shadow-2xl transition-colors duration-200 group z-40 ml-4"
                aria-label="Toggle menu"
            >
                <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 my-1 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>

            {/* Mobile Menu */}
            <div className={`absolute top-16 left-0 w-max bg-black border-b border-r border-rebecca-light rounded-br-lg shadow-2xl transition-all duration-300 -z-10 ${
                isOpen ? 'opacity-100 visible transform translate-x-0' : 'opacity-0 invisible transform -translate-x-4'
            }`}>
                <div className="p-6">
                    {/* Navigation */}
                    <nav className="nav">
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a 
                                    onClick={() => scrollToSection('home')} 
                                    className="nav-game"
                                >
                                    <p>NEW STORY</p>
                                </a>
                            </li>
                            <li>
                                <a 
                                    onClick={() => scrollToSection('projects')} 
                                    className="nav-game"
                                >
                                    <p>SHOWCASE</p>
                                </a>
                            </li>
                            <li>
                                <a 
                                    onClick={() => scrollToSection('about')} 
                                    className="nav-game"
                                >
                                    <p>EXTRAS</p>
                                </a>
                            </li>
                            <li>
                                <a 
                                    onClick={() => scrollToSection('contact')} 
                                    className="nav-game"
                                >
                                    <p>CREDITS</p>
                                </a>
                            </li>
                            <ContentDownload />
                            <Options />
                            <Exit />
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}