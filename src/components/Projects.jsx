import { JavascriptIcon, ReactIcon, TailwindIcon, ViteIcon, WPIcon, JQuerryIcon, BootstrapIcon } from "./Icons"
import { Github, ExternalLink } from "lucide-react"
import ProjectCarousel from "./ProjectCarousel"



export default function Projects() {
    const devToolsImages = [
        "images/devtools-colors.webp",
        "images/devtools-json.webp"
    ];

    const authenticSurfaceImages = [
        "images/authSurf-desktop.webp",
        "images/authSurf-mobile-1.webp",
        "images/authSurf-mobile-2.webp"
    ]

    const devPortfolioImage = ["images/dev.webp"]

    return (
        <section id="projects">
            <div className="max-w-3xl mx-auto">
                <h1 className="heading-lg">Portfolio</h1>
                <div className="flex flex-col justify-center gap-6 h-full w-full">
                    {/* devtools */}
                    <div className="project-card">
                        <ProjectCarousel 
                            images={devToolsImages} 
                            alt="DevTools Suite screenshots" 
                        />
                        <h1 className="heading-md">
                            DevTools Suite
                        </h1>
                        <p className="project-desc">
                            Cílem projektu je vytvořit různé pomůcky pro developery
                            s jednoduchým ux/ui a zpřístupnit je pro všechny na jednom místě.
                            Momentálně obsahuje <span className="text-rebecca-light">formatting a validaci JSON</span> a
                            generátor barev s možností exportu do <span className="text-rebecca-light">JSON, CSS, a SCSS</span>.
                            Ve volném čase plánuji přidávat další.
                            <span className="hidden">
                                Spousta jednodlivých pomůcek sice již existuje, ale často je program
                                po pár použití zpoplatněn, obsahuje milion potenciálně nebezpečných
                                reklam, nebo má otřesnou použitelnost.
                            </span>
                        </p>
                        <div className="flex flex-wrap gap-3 stack-wrapper">
                            <div className="skill-tag">
                                <JavascriptIcon className="w-5 h-5 text-white" />
                                <p>JS</p>
                            </div>
                            <div className="skill-tag">
                                <ReactIcon className="w-5 h-5 text-white" />
                                <p>React</p>
                            </div>
                            <div className="skill-tag">
                                <ViteIcon className="w-5 h-5 text-white" />
                                <p>Vite</p>
                            </div>
                            <div className="skill-tag">
                                <TailwindIcon className="w-5 h-5 text-white" />
                                <p>Tailwind</p>
                            </div>
                        </div>
                        <div className="flex gap-3 btn-wrapper">
                            <a href="https://github.com/lukas0108/dev_tools_suite" target="_blank" className="btn-primary">
                                <Github />
                                Zobrazit na GitHub
                            </a>
                        </div>
                    </div>

                    {/* Authentic Surface */}
                    <div className="project-card">
                        <ProjectCarousel 
                            images={authenticSurfaceImages} 
                            alt="Authentic Surface screenshots" 
                        />
                        <h1 className="heading-md">
                            Authentic Surface
                        </h1>
                        <p className="project-desc">
                            Zakázkový web v kolaboraci s <a href="https://www.ideacorp.sk/" target="_blank">IdeaCorp</a>. 
                            Převážně práce na front-endu mobilní verze a responzivitě podle <span className="text-rebecca-light">Figma</span> designu.
                        </p>
                        <div className="flex flex-wrap gap-3 stack-wrapper">
                            <div className="skill-tag">
                                <WPIcon className="w-5 h-5 text-white" />
                                <p>WordPress</p>
                            </div>
                            <div className="skill-tag">
                                <JQuerryIcon className="w-5 h-5 text-white" />
                                <p>jQuerry</p>
                            </div>
                            <div className="skill-tag">
                                <BootstrapIcon className="w-5 h-5 text-white" />
                                <p>Bootstrap</p>
                            </div>
                        </div>
                        <div className="flex gap-3 btn-wrapper">
                            <a href="https://www.authenticsurface.eu/" target="_blank" className="btn-primary">
                                <ExternalLink />
                                Zobrazit web
                            </a>
                        </div>
                    </div>

                    {/* inception, bitch */}
                    <div className="project-card">
                        <ProjectCarousel 
                            images={devPortfolioImage} 
                            alt="Why are we still here? Just to suffer? Every night, I can feel my leg, and my arm, even my fingers. The body I've lost, the comrades I've lost, won't stop hurting. It's like they're still there. You feel it, too, don't you? I'm gonna make them give back our past." 
                        />
                        <h1 className="heading-md">
                            Portfolio
                        </h1>
                        <p className="project-desc">
                            Prtfolio web s navbarem inspirovaným hlavními nabídkami videoher. Nejprve vyvýjený v PHP, po dokončení rekvalifikace předělán do JavaScript + React.
                        </p>
                        <div className="flex flex-wrap gap-3 stack-wrapper">
                            <div className="skill-tag">
                                <JavascriptIcon className="w-5 h-5 text-white" />
                                <p>JS</p>
                            </div>
                            <div className="skill-tag">
                                <ReactIcon className="w-5 h-5 text-white" />
                                <p>React</p>
                            </div>
                            <div className="skill-tag">
                                <ViteIcon className="w-5 h-5 text-white" />
                                <p>Vite</p>
                            </div>
                            <div className="skill-tag">
                                <TailwindIcon className="w-5 h-5 text-white" />
                                <p>Tailwind</p>
                            </div>
                        </div>
                        <div className="flex gap-3 btn-wrapper">
                            <a href="https://github.com/lukas0108/dev.portfolio" target="_blank" className="btn-primary">
                                <Github />
                                Zobrazit na GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}