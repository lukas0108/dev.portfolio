import { useState, useEffect } from 'react';
import { ToggleLeft } from 'lucide-react'

export default function Options() {
    const [isOpen, setIsOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleOptions = (e) => {
        e.preventDefault();
        setIsOpen((prev) => !prev);
    };

    const toggleLightMode = (e) => {
        e.preventDefault();
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 2000);
    };

    useEffect(() => {
        const checkViewport = () => {
            setIsMobile(window.innerWidth <= 820);
        };

        checkViewport();
        window.addEventListener('resize', checkViewport);
        return () => window.removeEventListener('resize', checkViewport);
    }, []);

    return (
        <li>
            <a href="#" onClick={toggleOptions} className="nav-game">
                <p>OPTIONS</p>
            </a>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div className={`flex gap-20 w-fit mt-2 mb-1 uppercase !text-gray-300 ${
                    isMobile ? 'pl-4 pr-4' : 'ml-12 pl-5 pr-5 border-y border-gray-800'
                }`}>
                    <p>Light Mode</p>
                    <a href="#" onClick={toggleLightMode}><ToggleLeft /></a>
                    <div className={`absolute mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-10 transition-opacity duration-200 
                    ${
                        isMobile ? 'right-2 bottom-22' : 'left-1/3 bottom-1/3'
                    }
                    ${
                        showTooltip ? 
                            'opacity-100':'opacity-0 pointer-events-none'
                    }`}>
                        <p className='lowercase'>sorry, light attracts bugs :)</p>
                    </div>
                </div>
            </div>
        </li>
    );
}