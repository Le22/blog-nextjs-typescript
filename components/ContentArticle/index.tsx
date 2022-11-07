import md from "markdown-it"

type Props = {
    content: string
}

export default function ContentArticle({ content }: Props) {
    return (
        <div className="content-article">
            <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </div>
    )
}
