
import gsap from "gsap/dist/gsap"
import { useEffect, useRef } from "react"
import ProjectFilter from "./ProjectFilter"
import styles from './styles.module.css'


const ProjectFilters = () => {
    const filter = useRef()
  
    const closeFilter = () => {
        gsap.to(filter.current, { y: "-100%" })
    }

    const filters=[
        {
            dataValue:'logo-design',
            innerText:'Logo Design'
        },
        {
            dataValue:'web-design',
            innerText:'Web Design'
        },
        {
            dataValue:'ecommerce-development',
            innerText:'eCommerce Development'
        },
        {
            dataValue:'front-end-development',
            innerText:'Front-End-Development'
        },
        {
            dataValue:'back-end-development',
            innerText:'Back-End-Development'
        },
        {
            dataValue:'wordpress-development',
            innerText:'WordPress-Development'
        },
    ]
    useEffect(() => {
        const filterProjects = (e) => {
            let selectedValue = e.target.dataset.value
            let cards = document.querySelectorAll('.Project_Card')
            let filtered = []
            cards.forEach(card => { if (card.dataset.category == selectedValue) filtered.push(card) })
            // .forEach(item=>console.log(item.dataset.category))
            cards.forEach((card) => {
                card.classList.add('displayNone')
            })
            filtered.forEach(item => item.classList.remove('displayNone'))
        }
        document.querySelectorAll('.filter_list li').forEach(item => item.addEventListener('click', filterProjects))
    }, [])
    return (
        <div id='filter' ref={filter} className={styles.project_filter_list}>
            <div onClick={closeFilter} className={styles.times}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" /></svg>
            </div>
            <div className={styles.filter_list}>

                <h4>Select Project Type</h4>
                <ul>
                {filters.map((filter,index)=><ProjectFilter key={filter.dataValue} onClick={closeFilter} dataValue={filter.dataValue} innerText={filter.innerText} />)
                        
                    }

                    
                </ul>
            </div>
        </div>
    )
}

export default ProjectFilters
