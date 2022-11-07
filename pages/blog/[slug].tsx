import fs from "fs"
import matter from "gray-matter"

import Image from "next/future/image"
import ContentArticle from "../../components/ContentArticle"
import HeadSEO from "../../components/HeadSEO"
import MoreArticles from "../../components/MoreArticles"

import PostType from "../../interfaces/PostType"
import { getSortedPostsData } from "../../utils/posts"

type Props = {
    allPostsData: PostType[]
    content: string
    frontmatter: {
        title: string
        imgUrl: string
        author: string
        date: string
        metaDesc: string
    }
}

export default function Article({ allPostsData, frontmatter, content }: Props) {
    return (
        <>
            <HeadSEO
                title={frontmatter.title}
                description={frontmatter.metaDesc}
                image={frontmatter.imgUrl}
            />
            <div className="article">
                <h1 className="article__title">{frontmatter.title}</h1>
                <Image
                    width={400}
                    height={400}
                    alt={frontmatter.title}
                    src={frontmatter.imgUrl}
                    className="article__img"
                />
                <ContentArticle content={content} />
                <div className="article__info">
                    <p className="article__info__author">
                        {frontmatter.author}
                    </p>
                    <p className="article__info__date">{frontmatter.date}</p>
                </div>
                <MoreArticles data={allPostsData} />
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync("posts")
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace(".md", ""),
        },
    }))
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const allPostsData = getSortedPostsData()
    const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8")
    const { data: frontmatter, content } = matter(fileName)
    return {
        props: {
            allPostsData,
            frontmatter,
            content,
        },
    }
}
