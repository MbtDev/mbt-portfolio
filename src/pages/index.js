import { Link } from "gatsby"
import gsap, { Linear } from "gsap"
import React, { useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import { hideOverlay } from "../helpers/globalFunction"


export default function Index() {

  /*let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);*/


  useEffect(() => {

    hideOverlay("+=1");

    gsap.timeline().fromTo(".layout", { opacity: 0 }, { opacity: 1 }, "+=2.5")
  });


  const onEnter = () => {

    var animation = gsap.timeline()

    animation.to(".block",
      {
        backgroundColor: "#0a9396",
        //stagger: 0.30,
        yoyo: true,
        //duration: 5,
        ease: Linear.easeInOut
      })
      .to(".label",
        {
          color: "black"
        }, "-=2")
  };

  const onLeave = () => {
    var animation = gsap.timeline()

    animation.to(".block",
      {
        backgroundColor: "#000b1b",
      })
      .to(".label",
        {
          color: "white"
        });
  };



  return (
    <Layout>

      <Seo />

      <section className="home-section">


        <p className="title">MULTIPOTENTIAL</p>

        <div className="function-section">
          <p className="developer">Developer</p>
          <p className="uidesigner">UI Designer</p>
          <p className="photovideo">Photo & Video</p>
        </div>

        <p className="keep">Keep learning, keep creating.</p>




        <Link to="/projects" className="button-section">
          <div className="blocks" onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
          </div>
          <div className="label">VIEW MY PROJECTS RIGHT NOW</div>
        </Link>

      </section>
    </Layout>
  )
}
