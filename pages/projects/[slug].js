import gsap from "gsap"
import { useEffect, useState } from "react"
import Layout from "../../components/layout/Layout"
import Image from "next/image"
import khansortium_banner from '../../assets/imgs/portfolios/khansortium/khansortium_banner.jpg'
import khansortium_mob_banner from '../../assets/imgs/portfolios/khansortium/khansortium_mobile_banner.jpg'
import khansortium_portfolio_img1 from '../../assets/imgs/portfolios/khansortium/khansortium_portfolio_img1.jpg'
import khansortium_portfolio_img11 from '../../assets/imgs/portfolios/khansortium/khansortium_portfolio_img11.jpg'
import khansortium_portfolio_img2 from '../../assets/imgs/portfolios/khansortium/khansortium_portfolio_img2.jpg'
import khansortium_portfolio_img3 from '../../assets/imgs/portfolios/khansortium/khansortium_portfolio_img3.jpg'
import khansortium_portfolio_img4 from '../../assets/imgs/portfolios/khansortium/khansortium_portfolio_img4.jpg'
import khansortium_portfolio_img5 from '../../assets/imgs/portfolios/khansortium/khansortium_portfolio_img5.jpg'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import portfolio from '../../assets/imgs/portfolio.jpg'
import portrait from '../../assets/imgs/portrait.jpg'
import styles from '../../components/Projects/styles.module.css'

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail =({slug})=>{
    const [isMobile,setIsMobile]=useState(false)
    const [bannerImg,setBannerImg] = useState(khansortium_banner)
    console.log(slug)

    useEffect(()=>{

        const handleResize =()=>{
            setIsMobile(window.innerWidth < 768)
        }
        setBannerImg(()=>isMobile? khansortium_mob_banner: khansortium_banner)
            window.addEventListener('resize',handleResize)
        return ()=> window.removeEventListener('resize',handleResize)
    },[isMobile])
    useEffect(()=>{
        const moveBanner =()=>{
            let banner = document.querySelector("."+styles.project_banner)
            let sdb = document.querySelector("."+styles.scroll_down_btn)
            if(window.scrollY>100){
                banner?.classList.add(styles.active)
                sdb?.classList.remove(styles.active)
                
            }else{
                banner?.classList.remove(styles.active)
                sdb?.classList.add(styles.active)
                
            }
        }
      window.addEventListener('scroll',moveBanner)
          gsap.utils.toArray("."+styles.portfolio_image).forEach(el=>{
            
            ScrollTrigger.create({
              trigger: el,
                start:"top center",              
                onEnter:()=> el.classList.add(styles.active)
             
            });
          })
   
        let tl = gsap.timeline({defaults:{ease:"power1.out",duration:.2}})
       tl
       .to('.firstLayer',{y:"-100%",duration:1,ease:"linear"})
       
       .to(['nav ul li'],{opacity:1,stagger:.1})
       .to(`.${styles.project_details_first_section_container}  h1 > span`,{y:0,duration:.5})
       .to(`.${styles.project_details_first_section_container} h4 > span`,{y:0,duration:.5})
       .to(`.${styles.project_category }  > span`,{y:0})
       .to(`.${styles.project_category}`,{overflow:'visible'})
       .to(`.${styles.project_banner} > span`,{y:'0',opacity:1,duration:.7})
       .to(`.${styles.project_banner} .${styles.scroll_down_btn}`,{scale:'1'})

    },[])
 /*    const scrollDown =()=>{
        window.scrollTo(0,window.innerHeight/1.2)
    } */
    return <Layout>
        <div className={styles.Project_Details}>
            <div className={styles.project_details_first_section}>
                <div className={styles.project_details_first_section_container}>
                
                <h1 className='heading text-animation'><span>Khansortium</span></h1>
                <h4 className='text-animation'><span>Webiste Design</span></h4>
                <div className={`${styles.project_category} text-animation`}><span>Full Stack Development</span></div>
                </div>
                <div className={styles.project_banner} id='banner_img'>
                    <a href="#banner_img">

                <span className={styles.scroll_down_btn  +  " "+styles.active} /* onClick={scrollDown} */>
                    
                    <svg width='35' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 330 330" style={{enableBackground: 'new 0 0 330 330', transform: 'rotate(90deg)'}} xmlSpace="preserve">
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
        </svg>
                    </span>
                    </a>
              <a href="">
              <span className={styles.visit_site_btn} /* onClick={scrollDown} */>
                    
                    Visit Site
                </span>
              </a>
                    <Image alt='baad me'  src={bannerImg}/>
                </div>
            


            </div>
            <div className={styles.portfolio_images}>
                
                <div className={styles.portfolio_image}>
                    <Image alt='baad me' src={khansortium_portfolio_img1}/>
                </div>
                <div className={styles.portfolio_image}>
                    <Image alt='baad me' src={khansortium_portfolio_img11}/>
                </div>
                <div className={styles.portfolio_image}>
                    <div className="portfolio_half displaySmallNone">
                    

                    </div>
                    <div className={styles.portfolio_half}>

                    <Image alt='baad me'  src={portrait}/>
                    </div>
                </div>
                <div className={styles.portfolio_image}>
                    <Image alt='baad me' src={khansortium_portfolio_img2}/>
                </div>
                {/* <div className={styles.portfolio_image}></div> */}
                <div className={styles.portfolio_image} >
                    <Image alt='baad me' src={khansortium_portfolio_img3}/>
                </div>
                <div className={styles.portfolio_image}>
                    <Image alt='baad me' src={khansortium_portfolio_img4}/>
                </div>
                <div className={styles.portfolio_image}>
                    <div className={styles.portfolio_half}>
                    <Image alt='baad me' src={portrait}/> 

                    </div>
                    <div className={styles.portfolio_half}>

                    <Image alt='baad me'  src={portrait}/>
                    </div>
                </div>
                <div className={styles.portfolio_image}>
                    <Image alt='baad me' src={khansortium_portfolio_img5}/>
                </div>
                <div className={styles.portfolio_image}>
                    <Image alt='baad me' src={portfolio}/>
                </div>
                <div className={styles.portfolio_image}>
                    <div className={styles.portfolio_half}>
                    <Image alt='baad me' src={portrait}/> 

                    </div>
                    <div className="portfolio_half displaySmallNone">

           
                    </div>
                </div>
            </div>
        </div>
      <div className="firstLayer"></div>
    </Layout>
}
export default ProjectDetail

export async function getServerSideProps(ctx){
    const  {slug} =  await ctx.query

    return{
        props:{
            slug
        }
    }
}