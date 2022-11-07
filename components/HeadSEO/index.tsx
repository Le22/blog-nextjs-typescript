import Head from "next/head"

type Props = {
    title: string
    description: string
    image: string
}

export default function HeadSEO({ title, description, image }: Props) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />

            <meta property="og:site_name" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:image" content={image} />

            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Head>
    )
}
