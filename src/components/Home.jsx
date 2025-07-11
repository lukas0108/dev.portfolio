import { HtmlIcon, CssIcon, JavascriptIcon, ReactIcon, ReactRouterIcon, TailwindIcon, NodeIcon, NextIcon, MongoIcon, PhpIcon, ViteIcon, TypescriptIcon } from "./Icons"
import { Download } from "lucide-react"

export default function Home() {
    return (
        <section id="home" className="mt-36">
            <div className="max-w-3xl mx-auto flex flex-col gap-6">
                <div>
                    <h1 className="mt-10 ml-0.5 text-xl bg-transparent uppercase">Lukáš Bínek</h1>
                    <h1 className="text-5xl uppercase">Front-end developer</h1>
                </div>
                <div className="home-desc">
                    <p>
                        Ahoj! Jsem software developer z <span className="text-rebecca-light">Českých Budějovic</span> se specializací na front-end a ux/ui. 
                        Nejraději pracuji s <span className="text-rebecca-light">React</span> a <span className="text-rebecca-light">TailwindCSS</span>.
                    </p>
                </div>
                <div className="flex gap-3">
                    <a 
                        href="/documents/CV-Lukáš-Bínek.pdf"
                        download="CV-Lukáš-Bínek.pdf" 
                        className="btn-primary"
                    >
                        <Download className="w-5 h-5"/>
                        <p>CV</p>
                    </a>
                </div>
                <div className="mt-9" id="certificates">
                    <h1 className="heading-lg">Certifikáty</h1>
                    <div className="flex flex-wrap gap-3">
                        <a 
                            href="/documents/Certificate-JavaScript-Basic-Lukáš-Bínek.pdf"
                            download="Certificate-JavaScript-Basic-Lukáš-Bínek.pdf" 
                            className="btn-primary"
                        >
                            <Download className="w-5 h-5"/>
                            <p>Vývoj www. aplikací JavaScript</p>
                        </a>
                        <a 
                            href="/documents/Certifikat_Zaklady_React.pdf"
                            download="Certifikat_Zaklady_React.pdf" 
                            className="btn-md"
                        >
                            <Download className="w-5 h-5"/>
                            <p>React</p>
                        </a>
                        <a 
                            href="/documents/Certifikat_Node.js_-_Serverovy_JavaScript.pdf"
                            download="Certifikat_Node.js_-_Serverovy_JavaScript.pdf" 
                            className="btn-md"
                        >
                            <Download className="w-5 h-5"/>
                            <p>Node.js</p>
                        </a>
                        <a 
                            href="/documents/Certifikat_REST_API_klient_v_React_-_Filmova_databaze.pdf"
                            download="Certifikat_REST_API_klient_v_React_-_Filmova_databaze.pdf" 
                            className="btn-md"
                        >
                            <Download className="w-5 h-5"/>
                            <p>REST API</p>
                        </a>
                    </div>
                </div>
                <div id="stack" className="mt-9">
                    <h1 className="heading-lg">Tech Stack</h1>
                    <div className="flex flex-wrap gap-3">
                        <div className="skill-tag">
                            <HtmlIcon className="w-5 h-5 text-white" />
                            <p>HTML</p>
                        </div>
                        <div className="skill-tag">
                            <CssIcon className="w-5 h-5 text-white" />           
                            <p>CSS</p>
                        </div>
                        <div className="skill-tag">
                            <JavascriptIcon className="w-5 h-5 text-white" />  
                            <p>JavaScript</p>
                        </div>
                        <div className="skill-tag">
                            <TailwindIcon className="w-5 h-5 text-white" />
                            <p>Tailwind</p>
                        </div>
                        <div className="skill-tag">
                            <ReactIcon className="w-5 h-5 text-white" />
                            <p>React</p>
                        </div>
                        <div className="skill-tag">
                            <ReactRouterIcon className="w-5 h-5 text-white" />           
                            <p>React Router</p>
                        </div>
                        <div className="skill-tag">
                            <NodeIcon className="w-5 h-5 text-white" />  
                            <p>Node.js</p>
                        </div>
                        <div className="skill-tag">
                            <ViteIcon className="w-5 h-5 text-white" />           
                            <p>Vite</p>
                        </div>
                        <div className="skill-tag">
                            <MongoIcon className="w-5 h-5 text-white" />  
                            <p>MongoDB</p>
                        </div>
                        <div className="skill-tag">
                            <PhpIcon className="w-5 h-5 text-white" />  
                            <p>PHP</p>
                        </div>
                        <div className="skill-tag wip">
                            <TypescriptIcon className="w-5 h-5 text-white" />
                            <p>TypeScript</p>
                        </div>
                        <div className="skill-tag wip">
                            <NextIcon className="w-5 h-5 text-white" />
                            <p>Next.js</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}