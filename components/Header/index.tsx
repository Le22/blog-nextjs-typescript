import Link from "next/link"

// Header
export default function Header() {
    return (
        <header className="header">
            <Link href={"/"} className="header__title">
                <a className="header__title" title="NextBlog">
                    NextBlog
                </a>
            </Link>
            <Link href={"/blog"}>
                <a className="header__link">The Blog</a>
            </Link>
        </header>
    )
}
