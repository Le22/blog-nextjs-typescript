import { Linkedin, Github } from "react-bootstrap-icons"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__contact">
                <a
                    href="mailto:contact@louisetiennegirard.fr"
                    className="footer__contact__link"
                >
                    Restons en contact
                </a>
            </div>
            <div className="footer__info">
                <a
                    href="mailto:contact@louisetiennegirard.fr"
                    className="footer__info__email"
                >
                    contact@louisetiennegirard.fr
                </a>
                <p className="footer__info__place">Bretagne, France</p>
            </div>
            <div className="footer__social">
                <Linkedin className="footer__social__icon" />
                <Github className="footer__social__icon" />
            </div>
        </footer>
    )
}
