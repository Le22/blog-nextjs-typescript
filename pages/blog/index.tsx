import Image from "next/future/image"
import CardArticle from "../../components/CardArticle"
import HeadSEO from "../../components/HeadSEO"

import PostType from "../../interfaces/PostType"
import { getSortedPostsData } from "../../utils/posts"

type Props = {
    allPostsData: PostType[]
}
export default function Blog({ allPostsData }: Props) {
    return (
        <>
            <HeadSEO
                title="NextBlog"
                description="NextBlog"
                image="media/logo.png"
            />
            <div className="blog">
                <Image
                    className="blog__img"
                    src={"/media/blog-presentation.jpg"}
                    width={500}
                    height={200}
                    alt="NextBlog"
                />
                <h1 className="blog__title">The Blog</h1>
                <h2 className="blog__info">
                    Find the list of the latest articles that talk about your
                    favorite subject.
                </h2>
                <div className="blog__articles">
                    <div className="blog__articles__list">
                        {allPostsData.map(
                            ({ id, title, author, date, imgUrl }) => {
                                return (
                                    <CardArticle
                                        key={id}
                                        articleUrl={id}
                                        title={title}
                                        date={date}
                                        imgUrl={imgUrl}
                                        author={author}
                                    />
                                )
                            }
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData,
        },
    }
}
