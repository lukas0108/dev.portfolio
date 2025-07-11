import { useState, useEffect } from 'react';

export default function ContentDownload() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleDownloads = (e) => {
        e.preventDefault();
        setIsOpen((prev) => !prev);
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
            <a href="#" onClick={toggleDownloads} className="nav-game">
                <p>DOWNLOADABLE CONTENT</p>
            </a>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <ul className={`my-2 ${
                    isMobile ? 'ml-4 flex flex-col gap-2' : 'ml-16'
                }`}>
                    <li>
                        <a 
                            href="/documents/CV-Lukáš-Bínek.pdf"
                            download="CV-Lukáš-Bínek.pdf" 
                            className="nav-dl"
                        >
                            <p>CV.PDF</p>
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/documents/Certificate-JavaScript-Basic-Lukáš-Bínek.pdf"
                            download="Certificate-JavaScript-Basic-Lukáš-Bínek.pdf" 
                            className="nav-dl"
                        >
                            <p>Certifikát rekvalifikace</p>
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/documents/ITNetwork-certificates.zip"
                            download="ITNetwork-certificates.zip" 
                            className="nav-dl"
                        >
                            <p>Certifikáty jednotlivých témat</p>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
    );
}