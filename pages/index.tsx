import Image from "next/future/image"

import MyImg from "../public/media/louis-etienne-girard-developpeur-front-end-react.png"
import ProjetsData from "../data/projets.json"
import SoftSkillsData from "../data/softSkills.json"
import CardProjet from "../components/CardProjet"
import MoreArticles from "../components/MoreArticles"

import PostType from "../interfaces/PostType"
import { getSortedPostsData } from "../utils/posts"
import HeadSEO from "../components/HeadSEO"

type Props = {
    allPostsData: PostType[]
}

function Home({ allPostsData }: Props) {
    const frontEnd = [
        "ReactJs",
        "TypeScript",
        "Redux",
        "Jest",
        "NextJs",
        "Sass",
    ]
    const backEnd = ["NodeJs", "Express", "SQL", "MongoDB", "API REST"]
    const versionControle = ["Git", "GitHub"]
    const design = ["Figma", "Sketch", "UI/UX"]

    return (
        <>
            <HeadSEO
                title="Louis-Étienne Girard - Développeur Front-End React"
                description="Passionné de longue date pour le développement web, je ne cesse de partager mes connaissances dans le domaine digital."
                image="media/louis-etienne-girard-developpeur-front-end-react.png"
            />
            <div className="home">
                <div className="home__intro">
                    <h1 className="home__intro__title">Louis-Étienne Girard</h1>
                    <h2 className="home__intro__job">
                        Développeur Front-End React
                    </h2>
                    <Image
                        src={MyImg}
                        className="home__intro__img"
                        alt="Louis-Étienne Girard Développeur Front-End React"
                        width={200}
                        height={200}
                    />
                </div>
                <section className="home__mission">
                    <h3 className="home__mission__title">Ma mission</h3>
                    <p className="home__mission__content">
                        Transmettre le goût du code au travers de mes projets
                        comme Développeur Front-End React.
                    </p>
                </section>
                <section className="home__projects">
                    <h3 className="home__projects__title">Mes projets</h3>
                    <div className="home__projects__list">
                        {ProjetsData.map((projet) => {
                            return (
                                <CardProjet
                                    key={projet.id}
                                    title={projet.title}
                                    description={projet.description}
                                    tags={projet.tags}
                                    imgUrl={projet.imgUrl}
                                    projetUrl={projet.projetUrl}
                                />
                            )
                        })}
                    </div>
                </section>
                <MoreArticles data={allPostsData} />
                <section className="home__hard-skills">
                    <h3 className="home__hard-skills__title">
                        Mes compétences
                    </h3>
                    <div className="home__hard-skills__list">
                        <p className="home__hard-skills__list__title">
                            Front-End
                        </p>
                        <div className="home__hard-skills__list__item">
                            {frontEnd.map((tag, index) => (
                                <p
                                    key={`${tag} - ${index}`}
                                    className="home__hard-skills__list__item__tag"
                                >
                                    {tag}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="home__hard-skills__list">
                        <p className="home__hard-skills__list__title">
                            Back-End
                        </p>
                        <div className="home__hard-skills__list__item">
                            {backEnd.map((tag, index) => (
                                <p
                                    key={`${tag} - ${index}`}
                                    className="home__hard-skills__list__item__tag"
                                >
                                    {tag}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="home__hard-skills__list">
                        <p className="home__hard-skills__list__title">
                            Versionning
                        </p>
                        <div className="home__hard-skills__list__item">
                            {versionControle.map((tag, index) => (
                                <p
                                    key={`${tag} - ${index}`}
                                    className="home__hard-skills__list__item__tag"
                                >
                                    {tag}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="home__hard-skills__list">
                        <p className="home__hard-skills__list__title">Design</p>
                        <div className="home__hard-skills__list__item">
                            {design.map((tag, index) => (
                                <p
                                    key={`${tag} - ${index}`}
                                    className="home__hard-skills__list__item__tag"
                                >
                                    {tag}
                                </p>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="home__soft-skills">
                    <h3 className="home__soft-skills__title">
                        Ma personnalité
                    </h3>
                    <div className="home__soft-skills__list">
                        {SoftSkillsData.map((softSkill) => {
                            return (
                                <div
                                    key={softSkill.id}
                                    className="home__soft-skills__list__item"
                                >
                                    <p className="home__soft-skills__list__item__title">
                                        {softSkill.title}
                                    </p>
                                    <p className="home__soft-skills__list__item__content">
                                        {softSkill.content}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData,
        },
    }
}
