export default function About() {
    return (
        <section id="about">
            <div className="max-w-3xl mx-auto flex flex-col gap-0">
                <h1 className="heading-lg">O mně</h1>
                <div className="about-content">
                    <p>
                        Na začátku roku 2024 jsem se poprvé začal seriózně zajímat o vývoj webu.
                        Po práci jsem se po kusech učil <span className="text-rebecca-light">HTML, PHP, a CSS</span>, a experimentoval s jednoduchými weby.
                        Objevil jsem vášeň a zábavu specificky pro front-end, bavilo mě poznávat limity CSS a vymýšlet různá řešení interakcí a responzivity pro daný design stránky.
                    </p>
                    <p>
                        Zhruba v polovině roku jsem začal sbírat zkušenosti skrz malé práce pro <br /><a href="https://www.ideacorp.sk/" target="_blank">IdeaCorp s.r.o.</a>, který dělal weby na zakázku.
                        Naučil jsem se pracovat s WordPress a Bootstrap, ale postupem času mi přestaly obě technologie vyhovovat, a hledal jsem větší kontrolu a svobodu ve svém kódu.
                    </p>
                    <p>
                        V roce 2025 jsem se začal zajímat o pokročilejší interakce na webu skrze JavaScript a TailwindCSS.
                        Podstoupil jsem rekvalifikační kurz na vývoj webových aplikací v JS od ITNetwork.cz, kde jsem se mimo jiné naučil <span className="text-rebecca-light">OOP, Node.js, REST API, MongoDB, React, UML, a GIT</span>.
                        {/* Osvědčení a jednotlivé certifikáty si můžete stáhnout <a href="#certificates">zde</a>. */}
                    </p>
                    <p>
                        Momentálně rozvíjím své znalosti v React a TailwindCSS, a učím se základy <span className="text-rebecca-light">Next.js a Typescript</span>.
                        Snažím se neustále zdokonalovat a jsem otevřený novým technologiím.
                    </p>
                </div>
            </div>
        </section>
    )
}