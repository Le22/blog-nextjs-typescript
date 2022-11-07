import Link from "next/link"

export default function Error() {
    return (
        <div className="page-error">
            <h1 className="page-error__title">La page est introuvable</h1>
            <Link href={"/"}>
                <a className="page-error__link">
                    Revenir à la page d&apos;accueil
                </a>
            </Link>
        </div>
    )
}
