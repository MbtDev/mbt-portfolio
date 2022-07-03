import React, { useEffect } from 'react'
import Layout from '../../components/layout'
import ProjectDetail from '../../components/ProjectDetail'
import { createItems, hideOverlay, importAll } from '../../helpers/globalFunction';

export default function Livamo() {


    var bgColor = "#04B8A2";


    const images = importAll(require.context('../../images/livamo-project', false, /\.(png|jpe?g|svg)$/));

    const itemslist = createItems(images)

    useEffect(() => {
        hideOverlay("+=2");
    });


    return (
        <Layout bgcolor={bgColor}>
            <ProjectDetail
                name='Livamo'
                date='2020'
                type='Mobile App & Website - Personal project'
                services='Web dev | Mobile Dev | Design | Video'
                resume='Save misunderstood words 
                as well as favorite quotes 
                from your readings.'
                txtColor='#375591'
                projectTitle='Livamo'
                link='https://www.livamoapp.com'
                nextproject='/projects/bspice'
                prvsproject='/projects/video'
                imageSource={itemslist}
                showIdentity={true}
                bgcolor={bgColor}>

            </ProjectDetail>
        </Layout>
    )
}
