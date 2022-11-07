import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html lang="fr">
            <Head>
                <meta name="robots" content="follow, index" />
                <link rel="icon" href="favicon.ico" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@GirardLouisEt" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
