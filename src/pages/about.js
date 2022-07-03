import { Link } from 'gatsby';
import gsap, { Linear } from 'gsap';
import React, { useEffect } from 'react'
import Layout from '../components/layout'
import TitleContentLayout from '../components/titleContentLayout';
import { hideOverlay } from '../helpers/globalFunction';

export default function About() {



    useEffect(() => {

        hideOverlay("-=0.5")

        var animation = gsap.timeline()

        animation
            .fromTo(".pic-title", { scale: "1" }, { scale: 1.1, reapeat: 1, ease: "bounce", yoyoEase: "power3" })

            .to(".about-me-text", { opacity: 1 })
            .to(".skills-title", { opacity: 1 })
            .to(".text", { opacity: 1 })
            .to("span", { y: "0%", duration: 0.7, stagger: 0.2 })
            .to(".skills-icons", {
                opacity: 1,
                stagger: 0.30,
                yoyo: true,
                duration: 1,
                ease: Linear.easeInOut
            })
            .fromTo(".navlink", { scale: "0" }, { scale: 1.1, reapeat: 1, ease: "bounce", yoyoEase: "power3" });
    });

    return (
        <Layout>
            <TitleContentLayout title="ABOUT ME" info="Just to know a little bit more about me.">
                <div className="about-section">
                    <div className="story">

                        <p>
                            Presentation text coming
                        </p>


                        <p>
                            
                        </p>
                    </div>

                    <div className="skills-services">
                        <div className="skills">
                            <span className='bold'>SKILLS</span>  HTML <span className='separator' > | </span>  CSS<span className='separator' > | </span>JAVASCRIPT<span className='separator' > | </span>REACT<span className='separator' > | </span>GATSBY<span className='separator' > | </span>WORDPRESS<span className='separator' > | </span>FIGMA<span className='separator' > | </span>PHOTOSHOP<span className='separator' > | </span>ILLUSTRATOR<span className='separator' > | </span>PREMIER PRO <span className='bold'>SKILLS</span>
                        </div>

                        <div className="services">
                            <span className='bold'>SERVICES</span> FRONT END DEVELOPMENT<span className='separator' > | </span>UI DESIGN FOR MOBILE AND WEB<span className='separator' > | </span>PHOTO & VIDEO <span className='bold'>SERVICES</span>
                        </div>
                    </div>

                    <div className="contact">
                        <Link to="/contact">Contact Me</Link>
                        <Link to="/contact">My Projects</Link>
                    </div>

                </div>
            </TitleContentLayout>

        </Layout >
    )
}
