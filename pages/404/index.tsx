import Link from "next/link"

// Error Page
export default function Error() {
    return (
        <div className="page-error">
            <h1 className="page-error__title">The page cannot be found.</h1>
            <Link href={"/"}>
                <a className="page-error__link">Back to home</a>
            </Link>
        </div>
    )
}
