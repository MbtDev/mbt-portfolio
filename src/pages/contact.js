import React, { useEffect } from 'react'
import Layout from '../components/layout'
import ticon from "../images/icon/telegram.png"
import wicon from "../images/icon/Whatsapp.png"
import eicon from "../images/icon/Mail.png"
import TitleContentLayout from '../components/titleContentLayout'
import { hideOverlay } from '../helpers/globalFunction'
import { Link } from 'gatsby'




export default function Contact() {

    useEffect(() => {
        hideOverlay("-=0.5")
    });


    return (
        <Layout>
            {/**<section className='contact'>
                <h1>Contact</h1>
                <div className="contact-section">
                    <p className="pic-title">CONTACT</p>

                    <p className="text feelfree">
                        Feel free to contact me
                        if your project respects peoples,
                        animals and our beautiful planet.</p>


                    <div className="icons-section">
                        <a className='icon-section' href='mailto:mbt7.dev@gmail.com'>
                            <img className="icon" src={eicon} alt="" />
                            <p className='text icon-label'>Email me</p>
                        </a>
                        <a className='icon-section' href='https://t.me/mohamedmbt'>
                            <img className="icon" src={ticon} alt="" />
                            <p className='text icon-label'>Telegram me</p>
                        </a>
                        <a className='icon-section' href='https://api.whatsapp.com/send?phone=32486281075'>
                            <img className="icon" src={wicon} alt="" />
                            <p className='text icon-label'>Whatsapp me</p>
                        </a>

                    </div>
                </div>
            </section> */}



            <TitleContentLayout
                title="CONTACT"
                info="Feel free to contact me if your project respects people and our beautiful earth.">
                <div className="contact-section">
                    <div className="icons-section">
                        <a className='icon-section' href='https://api.whatsapp.com/send?phone=32486281075'>
                            <img className="icon" src={wicon} alt="" />
                            <p className='icon-label'>Whatsapp me</p>
                        </a>
                        <a className='icon-section' href='https://t.me/mohamedmbt'>
                            <img className="icon" src={ticon} alt="" />
                            <p className='icon-label'>Telegram me</p>
                        </a>
                        <a className='icon-section' href='mailto:mbt7.dev@gmail.com'>
                            <img className="icon" src={eicon} alt="" />
                            <p className='icon-label'>Email me</p>
                        </a>
                    </div>
                    <p className='based'>Based in Belgium, Brussels.</p>
                    <Link className='recheck' to="/projects">Re-check my projects</Link>
                </div>
            </TitleContentLayout>

        </Layout>
    )
}
