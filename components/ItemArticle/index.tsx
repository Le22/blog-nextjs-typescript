import Image from "next/future/image"
import Link from "next/link"

type Props = {
    title: string
    articleUrl: string
    imgUrl: string
    date: string
    author: string
}

export default function ItemArticle({
    title,
    articleUrl,
    imgUrl,
    date,
    author,
}: Props) {
    return (
        <Link href={`/blog/${articleUrl}`}>
            <a className="item-article" title={title}>
                <div className="item-article__img">
                    <Image
                        width={75}
                        height={75}
                        src={imgUrl}
                        alt={title}
                        className="item-article__img__content"
                    />
                </div>
                <div className="item-article__content">
                    <p className="item-article__content__title">{title}</p>
                    <div className="item-article__content__info">
                        <p className="item-article__content__info__author">
                            {author}
                        </p>
                        <p className="item-article__content__info__date">
                            {date}
                        </p>
                    </div>
                </div>
            </a>
        </Link>
    )
}
