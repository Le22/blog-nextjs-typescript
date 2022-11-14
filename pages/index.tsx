import HeadSEO from "../components/HeadSEO"

// Home
function Home() {
    return (
        <>
            <HeadSEO
                title="NextBlog"
                description="NextBlog | Create an SEO optimized blog"
                image="media/logo.png"
            />
            <div className="home">
                <h1 className="home__title">
                    My <span className="home__title__name">NextBlog</span>
                </h1>
                <h2 className="home__subTitle">Create an SEO optimized blog</h2>
                <a
                    className="home__btn"
                    href="https://github.com/Le22/blog-nextjs-typescript"
                >
                    View on GitHub
                </a>
            </div>
        </>
    )
}

export default Home
