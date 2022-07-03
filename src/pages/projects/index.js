import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Card from '../../components/Card'
import Layout from '../../components/layout'
import livamocard from "../../images/card/livamo-card.png"
import bspicecard from "../../images/card/bspice-card.png"
import mbtcard from "../../images/card/mbt-card.png"
import cockatooracecard from "../../images/card/cockatoorace-card.png"
import cockatoobeautycard from "../../images/card/cockatoobeauty-card.png"
import photocard from "../../images/card/photo-card.png"
import videocard from "../../images/card/video-card.png"
import gsap, { Circ } from 'gsap'
import TitleContentLayout from '../../components/titleContentLayout'
import { hideOverlay } from '../../helpers/globalFunction'



export default function Projects() {

    var webTag = "Web devevelopment";
    var mobileTag = "Mobile devevelopment";
    var designTag = "UI Design";
    var videoTag = "Video";
    var photoTag = "Photo ";

    var tagsLivamo = [webTag, mobileTag, designTag, videoTag];
    var tagsButcher = ["Wordpress development"];
    var tagsMbt = [webTag, designTag];
    var tagsCockatoo = [designTag];
    var tagsPhoto = [photoTag];
    var tagsVideo = [videoTag];

    var cards = [];

    cards.push(<div className="card"></div>)
    cards.push(<div className="card"></div>)
    cards.push(<div className="card"></div>)
    cards.push(<div className="card"></div>)
    cards.push(<div className="card"></div>)
    cards.push(<div className="card"></div>)
    cards.push(<div className="card"></div>)
    cards.push(<div className="card"></div>)

    useEffect(() => {

        hideOverlay("-=0.5");

        var animation = gsap.timeline()

        animation
            .fromTo(".card",
                { opacity: 0 },
                {
                    opacity: 1,
                    stagger: 0.10,
                    yoyo: true,
                    ease: Circ.easeOut,
                }, "+=1")

    });

    return (
        <Layout>


            {/**<div className="projects-section">
                    

                    <div className="pic-title">Projects</div>

                    <div className="cards">
                        <Link className='card' to="livamo"><Card minia={livamocard} tags={tagsLivamo}></Card></Link>
                        <Link className='card' to="bspice"><Card minia={bspicecard} tags={tagsButcher}></Card></Link>
                        <Link className='card' to="mbtproject"><Card minia={mbtcard} tags={tagsMbt}></Card></Link>
                        <Link className='card' to="cockatoorace"><Card minia={cockatooracecard} tags={tagsCockatoo}></Card></Link>
                        <Link className='card' to="cockatoobeauty"><Card minia={cockatoobeautycard} tags={tagsCockatoo}></Card></Link>
                        <Link className='card' to="photo"><Card minia={photocard} tags={tagsPhoto}></Card></Link>
                        <Link className='card' to="video"><Card minia={videocard} tags={tagsVideo}></Card></Link>
                    </div>
                </div> */}


            <TitleContentLayout
                title="PROJECT"
                info="Check out my latest projects that i worked on.">

                <div className="projects">

                    <Link className='card' to="livamo"><Card minia={livamocard} tags={tagsLivamo}></Card></Link>
                    <Link className='card' to="bspice"><Card minia={bspicecard} tags={tagsButcher}></Card></Link>
                    <Link className='card' to="mbtproject"><Card minia={mbtcard} tags={tagsMbt}></Card></Link>
                    <Link className='card' to="cockatoorace"><Card minia={cockatooracecard} tags={tagsCockatoo}></Card></Link>
                    <Link className='card' to="cockatoobeauty"><Card minia={cockatoobeautycard} tags={tagsCockatoo}></Card></Link>
                    <Link className='card' to="photo"><Card minia={photocard} tags={tagsPhoto}></Card></Link>
                    <Link className='card' to="video"><Card minia={videocard} tags={tagsVideo}></Card></Link>

                </div>


            </TitleContentLayout>



        </Layout>
    )
}
