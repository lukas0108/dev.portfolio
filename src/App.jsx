import { useEffect, useState } from 'react'
import Home from './components/Home'
import Header from './components/Header'
import HeaderMobile from './components/HeaderMobile'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import DotGrid from './components/DotGrid'

export default function App() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkViewport = () => {
            setIsMobile(window.innerWidth <= 820);
        };

        checkViewport();
        window.addEventListener('resize', checkViewport);
        return () => window.removeEventListener('resize', checkViewport);
    }, []);

    return (
        <div className="h-full w-full text-gray-200 overflow-x-hidden">
            {/* Conditional Header Rendering */}
            {isMobile ? <HeaderMobile /> : <Header />}
            
            <main className={`p-0 space-y-20 bg-transparent *:bg-transparent overflow-x-hidden flex flex-col gap-12 ${
                isMobile ? 'ml-0' : 'ml-[425px]'
            }`}>
                {/* Conditional DotGrid Background */}
                {!isMobile && (
                    <div className='w-full h-full fixed -z-10'>
                        <DotGrid
                            dotSize={3}
                            gap={15}
                            baseColor="#000000"
                            activeColor="#663399"
                            proximity={111}
                            shockRadius={155}
                            shockStrength={15}
                            resistance={500}
                            returnDuration={1}
                        />
                    </div>
                )}
                <Home />
                <Projects />
                <About />
                <Contact />
            </main>
        </div>
    );
}