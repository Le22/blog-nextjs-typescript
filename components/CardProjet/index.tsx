import Image from "next/future/image"

type Props = {
    title: string
    description: string
    tags: Array<string>
    imgUrl: string
    projetUrl: string
}

export default function CardProjet({
    title,
    description,
    tags,
    imgUrl,
    projetUrl,
}: Props) {
    return (
        <a href={projetUrl} className="card-projet__link">
            <div className="card-projet">
                <Image
                    className="card-projet__img"
                    alt={title}
                    width={300}
                    height={300}
                    src={imgUrl}
                />
                <p className="card-projet__title">
                    {title},<br />
                    {description}
                </p>
                <div className="card-projet__tags">
                    {tags.map((tag, index) => {
                        return (
                            <p
                                className="card-projet__tags__content"
                                key={`${index} - ${tag}`}
                            >
                                {tag}
                            </p>
                        )
                    })}
                </div>
            </div>
        </a>
    )
}
