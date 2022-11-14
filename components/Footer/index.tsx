import Link from "next/link"

// Footer
export default function Footer() {
    return (
        <footer className="footer">
            <Link href="/">
                <a className="footer__link" title="NextBlog">
                    NextBlog
                </a>
            </Link>
            <a href="https://louisetiennegirard.fr" className="footer__author">
                Made by Louis-Étienne
            </a>
        </footer>
    )
}
