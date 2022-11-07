import type { AppProps } from "next/app"
import Layout from "../components/Layout"

import "../styles/main.scss"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp
