import { useEffect, useState } from 'react';
import ContentDownload from './ContentDownload';
import Options from './Options';
import Exit from './Exit';

export default function HeaderMobile() {
    const [isOpen, setIsOpen] = useState(false);

    const sectionOffsets = {
        home: 0,
        projects: 0.1, 
        about: 0.4,
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

    return (
        <header className="mobile-header fixed top-0 left-0 z-50">
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-col justify-center items-center bg-black/30 backdrop-blur-md border border-rebecca-light w-12 h-12 rounded-lg shadow-2xl transition-colors duration-200 group z-40 m-4"
                aria-label="Toggle menu"
            >
                <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 my-1 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>

            {/* Mobile Menu */}
            <div className={`absolute top-16 left-4 w-max bg-rebecca/20 hover:bg-rebecca/50 border border-rebecca-light backdrop-filter backdrop-blur-md rounded-lg shadow-2xl transition-all duration-300 ${
                isOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-4'
            }`}>
                <div className="p-6">
                    {/* Menu Title */}
                    <div className="flex flex-col font-[1000] text-2xl uppercase leading-none tracking-tight text-gray-500 mb-6">
                        <h1>main</h1>
                        <h1 className="ml-2 tracking-tight text-gray-300">menu</h1>
                    </div>

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