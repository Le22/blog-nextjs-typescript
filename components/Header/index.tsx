import Link from "next/link"

export default function Header() {
    return (
        <header className="header">
            <Link href={"/"} className="header__title">
                <a
                    className="header__title"
                    title="Louis-Étienne Girard Développeur Front-End React"
                >
                    Louis-Étienne Girard
                </a>
            </Link>
            <Link href={"/blog"}>
                <a className="header__link">Le Blog</a>
            </Link>
        </header>
    )
}
