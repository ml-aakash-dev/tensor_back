import { gsap } from 'gsap';
import { useEffect, useState } from 'react'

import Link from 'next/link'
import { Power1 } from 'gsap/dist/gsap';
import styles from './hero.module.css'


const bannerContent= {
    heading: ["Tensor","Solutions" ],
    subHeading:["If you can", "Think it, ", "We" ,"can Web It"],
     btn1:{
         text:'Our Projects'
     },
     btn2:{
         text:'Hire Experts'
     }

}

const Hero = () => {
    const {heading,subHeading,btn1,btn2} = bannerContent

const [rightColored, setRightColored] = useState(true)
    const [isMobile,setIsMobile] = useState(false)

    useEffect(()=>{
        setIsMobile(window.innerWidth < 600)
const handleResize =()=>{
    console.log(isMobile)
    setIsMobile(window.innerWidth <  600)
}
        window.addEventListener('resize',handleResize)
        return () => {
           
        window.removeEventListener('resize',handleResize)}
    },[isMobile])
    useEffect(() => {
        
        const handleMouseMove =(e)=>{

            const circle = document.getElementById('circle')
            circle?.classList.add('opa1')
            if(circle){
            if(e?.target?.classList?.contains('no-circle')){
                circle.style.opacity =0
            }else{
                circle.style.opacity =1
                
            }
            if(e.target.classList.contains('big-circle')){
                circle?.classList.add('big-circle')  
                 circle.style.top=e.clientY -30 +"px"
                circle.style.left=e.clientX -30+ "px"
            }else{
                circle?.classList.remove('big-circle') 
                circle.style.top=e.clientY -12.5 +"px"
                circle.style.left=e.clientX -12.5+ "px"
            }
            
            }
          
         }
        window.addEventListener('mousemove',handleMouseMove)
        return () => {
           
        window.removeEventListener('mousemove',handleMouseMove)
        }
    }, [])

useEffect(() => {
    let tl = gsap.timeline({ defaults: {  ease: Power1.easeInOut, duration: .2 } })
    tl
        .to('.firstLayer', { y: "-100%", duration: 1, ease: "linear" })
        .to(`.${styles.banner} h1 > span`, { y: 0, duration: .5 })
        .to(`.${styles.banner} h4 > span`, { y: 0, duration: .5 })
        .to([`.${styles.banner} .btn`, 'nav ul li'], { opacity: 1, stagger: .1 })
        // .to('.banner_navigators', { y: 0 })
        // .to('.banner_navigators h5', { opacity: 1 })
        // .to('.banner_navigators .nav-arr-img', { scale: 1, opacity: 1 })
        .to(`.${styles.header_tagline_number}`, { scale: 1, opacity: 1 })
        .to(`.${styles.header_tagline_slogan} span`, { y: 1,opacity:1 })
        .to(`.${styles.stat_seprator}`, { y: 1,stagger:.2,opacity:1 })
        .to(`.${styles.stat}`, { stagger:.2,opacity:1 })
    
        
}, [])
    return (
        <section className={ styles.banner}>
         { !isMobile && 
        <div id="circle">

        </div>}
        <div className="firstLayer">

        </div>
        <div className={styles.container}>
        <svg className={styles.blob + " " +  styles.blob1} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#D0E2FF" d="M23.9,-19.4C31.1,-1.3,37.3,11.9,33.1,22.9C28.9,33.9,14.5,42.7,-3,44.4C-20.6,46.2,-41.1,40.9,-52.3,25.9C-63.5,10.8,-65.3,-14,-55,-33.9C-44.7,-53.8,-22.4,-68.8,-7,-64.7C8.3,-60.7,16.7,-37.6,23.9,-19.4Z" transform="translate(100 100)" />
</svg>

<svg className={styles.blob + " " +  styles.blob2} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#D0E2FF" d="M31.3,-22.2C35.3,-11.2,29.5,1.2,22.7,16.8C15.8,32.3,7.9,50.9,-1.9,52.1C-11.8,53.2,-23.5,36.8,-36.3,17.8C-49.1,-1.2,-62.9,-22.8,-57.1,-34.8C-51.2,-46.8,-25.6,-49.3,-6,-45.9C13.7,-42.4,27.4,-33.1,31.3,-22.2Z" transform="translate(100 100)" />
</svg>
             <div className={styles.header_tagline}>
                    <span className={styles.header_tagline_number}>01</span>
                    <span className={styles.header_tagline_slogan + "  text-animation"}> <span> No 1 <span className={styles.colored}>Web Development</span> Agency <br/>
                     All Around The World </span></span>
             </div>
            <h1 className={"heading " + styles.landingbannerheading}>
                <span>
                    <span className={!rightColored && styles.colored}>
                        {heading[0]} </span>
                    <span className={rightColored && styles.colored}>
                        {heading[1]}
                    </span>
                </span>
            </h1>
            <h4 className='mb1  mt1'>
                <span>
                    {subHeading[0]} <span className={styles.colored}>  {subHeading[1]} </span> {subHeading[2]} <span className={styles.colored}> {subHeading[3]} </span>
                </span>
            </h4>
            <div className={styles.banner_btns}>
                <Link href='projects'>
                <a>
                    <button className='btn btnPrimaryOutlined btnLg  mr1 no-circle'>{btn1.text} </button>
                </a>

                </Link>
                 
                <button className='btn btnPrimary btnLg   no-circle'>{btn2.text} </button>
            </div>
        <div className={styles.statistics}>
            <div className={styles.stat + " big-circle"}>
                <span className={"heading " + styles.stat_number +"  pointerEventNone"}>100+</span>
                <span className={styles.stat_title +" pointerEventNone"}  >{isMobile?"Projects":"Projects Done"}</span>
            </div>
            <span className={styles.stat_seprator + " pointerEventNone"}></span>
            <div className={styles.stat+" big-circle"}>
                <span className={`heading ${styles.stat_number}   pointerEventNone`}>30+</span>
                <span className={`${styles.stat_title}   pointerEventNone`}>{isMobile?"Services":"Services Providing"}</span>
            </div>
            <span className={styles.stat_seprator+ " pointerEventNone"}></span>
            <div className={styles.stat + " big-circle"}>
                <span className={`heading ${styles.stat_number}   pointerEventNone`}>10+</span>
                <span className={styles.stat_title   + ' pointerEventNone'}>{isMobile? "Years":"Years Experience"}</span>
            </div>
           
                
        </div>

         </div>
    </section>
    )
}

export default Hero
