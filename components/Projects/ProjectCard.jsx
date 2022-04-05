import khansortium from '../../assets/imgs/portfolios/khansortium/khansortium.jpeg'
import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'

const ProjectCard = ({project}) => {
    return (
        <div data-category={project.category} className={styles.Project_Card}>
                            <Link href={'projects/' + project.id}>
                                <a></a>
                            </Link>
                            <div className={styles.Project_Image}>
                                <Image alt={project.title} src={project.thumbnail_image } width='800' height='800' />


                            </div>
                            <div className={styles.Project_Content}>
                                <h4 className={'heading text-animation '+ styles.ta}><span>{project.title}</span></h4>
                                <span className={'text-animation '+ styles.ta}><span>{project.categoryTitle}</span></span>
                            </div>
                        </div>
    )
}

export default ProjectCard
