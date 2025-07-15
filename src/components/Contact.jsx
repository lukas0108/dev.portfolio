import { ArrowUp } from "lucide-react"

export default function Contact () {
    return (
        <section id="contact">
            <div className="max-w-3xl mx-auto">
                <h1 className="heading-lg">Kontakt</h1>
                <div className="contact-content">
                    <p>email: <a className="!underline underline-offset-4" href="mailto:binek.dev@email.cz">
                        binek.dev@email.cz
                    </a></p>
                    <p>tel: +420 602 961 537</p>
                    <a href="#home" className="my-10 mx-auto btn-primary !rounded-full !p-2 arrow-up">
                        <ArrowUp />
                    </a>
                </div>
            </div>
        </section>
    )
}