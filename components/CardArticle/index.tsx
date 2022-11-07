import Image from "next/future/image"
import Link from "next/link"

type Props = {
    articleUrl: string
    title: string
    imgUrl: string
    author: string
    date: string
}

export default function CardArticle({
    title,
    author,
    date,
    articleUrl,
    imgUrl,
}: Props) {
    return (
        <Link href={`/blog/${articleUrl}`}>
            <a className="card-article" title={title}>
                <div>
                    <Image
                        height={400}
                        width={400}
                        src={`${imgUrl}`}
                        alt={title}
                        className="card-article__img"
                    />
                    <p className="card-article__title">{title}</p>
                    <div className="card-article__info">
                        <p className="card-article__info__author">{author}</p>
                        <p className="card-article__info__date">{date}</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}
