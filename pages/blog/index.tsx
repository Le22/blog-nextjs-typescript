import Image from "next/future/image"
import { useEffect, useState } from "react"
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
                title="Blog  - Louis-Étienne Girard - Développeur Front-End React"
                description="Passionné de longue date pour le développement web, je ne cesse de partager mes connaissances dans le domaine digital."
                image="media/louis-etienne-girard-developpeur-front-end-react.png"
            />
            <div className="blog">
                <Image
                    className="blog__img"
                    src={"/media/blog-presentation.jpg"}
                    width={500}
                    height={200}
                    alt="Le Blog de Louis-Étienne Girard"
                />
                <h1 className="blog__title">Le Blog</h1>
                <h2 className="blog__info">
                    Retrouvez des articles sur le Développement Front-End
                    notamment ReactJs, NextJS ou encore Sass.
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
