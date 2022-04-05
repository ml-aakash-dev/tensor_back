import axios from "axios"
import gsap from "gsap/dist/gsap"
import { useEffect, useState } from "react"
import ProjectCard from "./ProjectCard"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import styles from './styles.module.css'

const Container = () => {
    const [projects, setProjects] = useState([])

    const openFilter = () => {
        gsap.fromTo("#filter", { y: "100%" }, { y: 0 })
      
    }
   


    useEffect( () => {
        const getData = async ()=>{
            const {data} = await axios.get('http://localhost:3000/api/projects')
            // const data = await res.json()
            setProjects(data)
        }
        getData()
    }, [])

    useEffect(() => {
        gsap.utils.toArray('.' + styles.Project_Card).forEach(el => {

            ScrollTrigger.create({
                trigger: el,
                start: "top center",
                onEnter: () => el.classList.add(styles.active)

            });
        })

        let tl = gsap.timeline({ defaults: { ease: "power1.out", duration: .2 } })
        tl
            .to('.firstLayer', { y: "-100%", duration: 1, ease: "linear" })

            .to(['nav ul li'], { opacity: 1, stagger: .1 })
            .to('.' + styles.Projects_Container +' h1 > span', { y: 0, duration: .5 })

    }, [projects])



    return (
        <div className={styles.Projects_Container}>
            <h1 className={"heading   text-animation"}><span>Our Projects</span></h1>
            <div onClick={openFilter} className={styles.project_filter}><span>Type Of Project
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 330 330" style={{ enableBackground: 'new 0 0 330 330', transform: 'rotate(90deg)' }} xmlSpace="preserve">
                    <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z" />
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                </svg></span></div>
            <div className={styles.Projects_Cards_Container}>


                {
                    projects?.map((project,index) => <ProjectCard key={index} project={project} />)
                }


            </div>
        </div>
    )
}

export default Container
