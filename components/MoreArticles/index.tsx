import Link from "next/link"
import ItemArticle from "../ItemArticle"
import PostType from "../../interfaces/PostType"

type Props = {
    data: PostType[]
}

// More Articles
export default function MoreArticles(data: Props) {
    const articles = data.data
    return (
        <section className="more-articles">
            <h3 className="more-articles__title">Mes articles</h3>
            <div className="more-articles__list">
                {articles.map(({ id, title, author, date, imgUrl }) => {
                    return (
                        <ItemArticle
                            key={id}
                            title={title}
                            author={author}
                            date={date}
                            imgUrl={imgUrl}
                            articleUrl={id}
                        />
                    )
                })}
            </div>
            <div className="more-articles__link">
                <Link href={"/blog"}>
                    <a className="more-articles__link__content">
                        Discover more articles
                    </a>
                </Link>
            </div>
        </section>
    )
}
