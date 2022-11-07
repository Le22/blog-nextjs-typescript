import Header from "../Header"
import Footer from "../Footer"

type Props = {
    children: JSX.Element
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Header />
            <main className="main">{children}</main>
            <Footer />
        </>
    )
}
