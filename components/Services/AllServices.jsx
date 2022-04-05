import { useEffect, useRef } from 'react'
import styles from './services.module.css'
import Image from 'next/image'
import img from '../../assets/imgs/1.svg'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const AllServices = () => {

    const line = useRef(null)
    const circle = useRef(null)

    useEffect(() => {
        const updateHeight = (scroll) => {
            let line = document.querySelector(`.${styles.LINE}`)
            let circle = document.querySelector(`.${styles.CIRCLE}`)
            if (line && circle) {
                line.style.height = scroll - (window.innerHeight / 2) + 100 + 'px'
                circle.style.top = scroll - (window.innerHeight / 2) + 100 + 'px'
            }
        }
        ScrollTrigger.create({
            trigger: `.${styles.servicesSect}`,

            onUpdate: () => {
                let y = self.scrollY
                updateHeight(y)
            }
        })

        gsap.utils.toArray(`.${styles.service_card}`).forEach(el => {

            ScrollTrigger.create({
                trigger: el,
                start: "top center",
                onEnter: () => el.classList.add(styles.active)

            });
        })
    }, [])

    return (
        <section className={styles.servicesSect}>
        <div className={styles.servicesCenterLine}>
            <span ref={line} className={styles.LINE}>

            </span>
            <span ref={circle} className={styles.CIRCLE}></span>
        </div>
        <div className={`container ${styles.ServicesContainer}`}>

            <div className={styles.service_card}>
                <div className={styles.service_card_content}>
                    <h4 className= {`${styles.heading} heading text-animation ${styles.textAnimation}`}>
                        <span>
                            01
                        </span>
                    </h4>
                    <Link href='services/front-end-development' >
                        <a>
                            <h2 className= {`${styles.heading} heading text-animation ${styles.textAnimation}`}>
                                <span>
                                    Front End Development
                                </span>
                            </h2>
                        </a>
                    </Link>
                    <div className={styles.service_img}>
                        <Image alt='baad me' src={img} />
                    </div>
                    <p className={`text-animation ${styles.textAnimation}`}>
                        <span>

                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus et, doloribus culpa similique quam excepturi nobis eveniet atque ut tenetur ipsam, eligendi libero velit, ducimus necessitatibus rerum nam explicabo aspernatur facere magnam officiis consequatur? Voluptatem voluptas ut molestiae quae iusto.
                        </span>
                    </p>
                    <ul className={`mt2 ${styles.sub_services_list}`}>
                        <Link href='services/website-design'>
                            <a>
                                <li className={`text-animation ${styles.textAnimation}`}> <span>
                                    Website Design
                                </span>
                                </li>
                            </a>
                        </Link>
                        <Link href='services/website-redesign'>
                            <a>
                                <li className={`text-animation ${styles.textAnimation}`}> <span>
                                    Website Redesign
                                </span>
                                </li>
                            </a>
                        </Link>
                        <Link href='services/react-js'>
                            <a>
                                <li className={`text-animation ${styles.textAnimation}`}> <span>
                                    React Js Development
                                </span>
                                </li>
                            </a>
                        </Link>
                        <Link href='services/vue-js'>
                            <a>
                                <li className={`text-animation ${styles.textAnimation}`}> <span>
                                    Vue Js Development
                                </span>
                                </li>
                            </a>
                        </Link>

                    </ul>


                </div>
                <div className={styles.service_card_img}>
                    <Image alt='baad me' src={img} />
                </div>
            </div>
            <div className={styles.service_card}>
                <div className={styles.service_card_content}>
                    <h4 className= {`${styles.heading} heading text-animation ${styles.textAnimation}`}>

                        <span>
                            02
                        </span>
                    </h4>
                    <Link href='services/back-end-development'>
                        <a>
                            <h2 className= {`${styles.heading} heading text-animation ${styles.textAnimation}`}>
                                <span>
                                    Back End Development
                                </span>
                            </h2>
                        </a>
                    </Link>
                    <div className={styles.service_img}>
                        <Image alt='baad me' src={img} />
                    </div>
                    <p className={`text-animation ${styles.textAnimation}`}>
                        <span>

                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus et, doloribus culpa similique quam excepturi nobis eveniet atque ut tenetur ipsam, eligendi libero velit, ducimus necessitatibus rerum nam explicabo aspernatur facere magnam officiis consequatur? Voluptatem voluptas ut molestiae quae iusto.
                        </span>
                    </p>
                    <ul className={`mt2 ${styles.sub_services_list}`}>
                        <Link href='services/node-js-development'>
                            <a>
                                <li className={`text-animation ${styles.textAnimation}`}> <span>
                                    Node Js Development
                                </span>
                                </li>
                            </a>
                        </Link>
                        <Link href='services/ecommerce-development'>
                            <a>
                                <li className={`text-animation ${styles.textAnimation}`}> <span>
                                    eCommerce Development
                                </span>
                                </li>
                            </a>
                        </Link>

                        <Link href='services/laravel-development'>
                            <a>
                                <li className={`text-animation ${styles.textAnimation}`}> <span>
                                    Laravel Development
                                </span>
                                </li>
                            </a>
                        </Link>
                        <Link href='services/php-development'>
                            <a>
                            <li className={`text-animation ${styles.textAnimation}`}> <span>
                                PHP Development
                            </span>
                            </li>
                            </a>
                        </Link>

                    </ul>
                </div>
                <div className={styles.service_card_img}>
                    <Image alt='baad me' src={img} />
                </div>
            </div>
            <div className={styles.service_card}>
                <div className={styles.service_card_content}>
                    <h4 className= {`${styles.heading} heading text-animation ${styles.textAnimation}`}>
                        <span>
                            03
                        </span>
                    </h4>

                    <Link href='services/full-stack-development'>
                        <a>
                        <h2 className= {`${styles.heading} heading text-animation ${styles.textAnimation}`}>
                            <span>
                                Full Stack Development
                            </span>
                        </h2>
                        </a>
                    </Link>
                    <div className={styles.service_img}>
                        <Image alt='baad me' src={img} />
                    </div>
                    <p className={`text-animation ${styles.textAnimation}`}>
                        <span>

                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus et, doloribus culpa similique quam excepturi nobis eveniet atque ut tenetur ipsam, eligendi libero velit, ducimus necessitatibus rerum nam explicabo aspernatur facere magnam officiis consequatur? Voluptatem voluptas ut molestiae quae iusto.
                        </span>
                    </p>
                    <ul className={`mt2 ${styles.sub_services_list}`}>
                        <Link href='services/mern-stack-development'>
                            <a>
                            <li className={`text-animation ${styles.textAnimation}`}> <span>
                                MERN Stack Development
                            </span>
                            </li>
                            </a>
                        </Link>
                        <Link href='services/jam-stack-development'>
                            <a>
                            <li className={`text-animation ${styles.textAnimation}`}> <span>
                                JAM Stack Development
                            </span>
                            </li>
                            </a>
                        </Link>
                        <Link href='services/react-django-develoment'>
                            <a>
                            <li className={`text-animation ${styles.textAnimation}`}> <span>
                                React & Django Development
                            </span>
                            </li>
                            </a>
                        </Link>


                    </ul>

                </div>
                <div className={styles.service_card_img}>
                    <Image alt='baad me' src={img} />
                </div>
            </div>
            <div className={styles.service_card}>
                <div className={styles.service_card_content}>
                   
                    <h4 className= {`${styles.heading} heading text-animation ${styles.textAnimation}`}>
                        <span>
                            04
                        </span>
                    </h4>
                    <Link href='services/ecommerce-development'>
                      <a>
                        <h2 className= {`${styles.heading} heading text-animation ${styles.textAnimation}`}>
                            <span>
                                eCommerce Website Development
                            </span>
                        </h2>
                        </a>
                    </Link>
                    <div className={styles.service_img}>
                        <Image alt='baad me' src={img} />
                    </div>
                    <p className={`text-animation ${styles.textAnimation}`}>
                        <span>

                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus et, doloribus culpa similique quam excepturi nobis eveniet atque ut tenetur ipsam, eligendi libero velit, ducimus necessitatibus rerum nam explicabo aspernatur facere magnam officiis consequatur? Voluptatem voluptas ut molestiae quae iusto.
                        </span>
                    </p>
                    <ul className={`mt2 ${styles.sub_services_list}`}>
                        <Link href='services/custom-ecommerce-development'>
                           <a>
                            <li className={`text-animation ${styles.textAnimation}`}> <span>
                                Custom eCommerce Development
                            </span>
                            </li>
                            </a>
                        </Link>
                        <Link href='services/magento-development'>
                            <a>
                            <li className={`text-animation ${styles.textAnimation}`}> <span>
                                Magento Development
                            </span>
                            </li>
                            </a>
                        </Link>
                        <Link href='services/shopify-development'>
                            <a>

                            <li className={`text-animation ${styles.textAnimation}`}> <span>
                                Shopify Development
                            </span>
                            </li>
                            </a>
                        </Link>
                        <Link href='services/woocommerce-development'>
                            <a>
                            <li className={`text-animation ${styles.textAnimation}`}> <span>
                                WooCommerce Development
                            </span>
                            </li>
                            </a>
                        </Link>


                    </ul>
                </div>
                <div className={styles.service_card_img}>
                    <Image alt='baad me' src={img} />
                </div>
            </div>
            <div className={styles.service_card}>
                <div className={styles.service_card_content}>
                    <h4 className= {`${styles.heading} heading text-animation ${styles.textAnimation}`}>
                        <span>
                            05
                        </span>
                    </h4>
                    <Link href='services/wordpress-development'>
                        <a>
                        <h2 className= {`${styles.heading} heading text-animation ${styles.textAnimation}`}>
                            <span>
                                WordPress Development
                            </span>
                        </h2>
                        </a>
                    </Link>
                    <div className={styles.service_img}>
                        <Image alt='baad me' src={img} />
                    </div>
                    <p className={`text-animation ${styles.textAnimation}`}>
                        <span>

                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus et, doloribus culpa similique quam excepturi nobis eveniet atque ut tenetur ipsam, eligendi libero velit, ducimus necessitatibus rerum nam explicabo aspernatur facere magnam officiis consequatur? Voluptatem voluptas ut molestiae quae iusto.
                        </span>
                    </p>
                    <ul className={`mt2 ${styles.sub_services_list}`}>
                        <Link href='services/custom-ecommerce-development'>
                            <a>
                            <li className={`text-animation ${styles.textAnimation}`}> <span>
                                Custom eCommerce Development
                            </span>
                            </li>
                            </a>
                        </Link>
                        <Link href='services/magento-development'>
                            <a>
                            <li className={`text-animation ${styles.textAnimation}`}> <span>
                                Magento Development
                            </span>
                            </li>
                            </a>
                        </Link>
                        <Link href='services/shopify-development'>
<a>
                            <li className={`text-animation ${styles.textAnimation}`}> <span>
                                Shopify Development
                            </span>
                            </li>
</a>
                        </Link>
                        <Link href='services/woocommerce-development'>
<a>
                            <li className={`text-animation ${styles.textAnimation}`}> <span>
                                WooCommerce Development
                            </span>
                            </li>
</a>
                        </Link>



                    </ul>
                </div>
                <div className={styles.service_card_img}>
                    <Image alt='baad me' src={img} />
                </div>
            </div>

        </div>
    </section>
    )
}

export default AllServices
