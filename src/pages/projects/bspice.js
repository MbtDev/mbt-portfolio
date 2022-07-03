import React, { useEffect } from 'react'
import Layout from '../../components/layout'
import ProjectDetail from '../../components/ProjectDetail'
import { createItems, hideOverlay, importAll } from '../../helpers/globalFunction';


export default function Bspice() {



    var bgColor = "#AF2F33";

    const images = importAll(require.context('../../images/bspice-project', false, /\.(png|jpe?g|svg|gif)$/));

    const itemslist = createItems(images)

    useEffect(() => {
        hideOverlay("+=2");
    });

    return (
        <Layout bgcolor={bgColor}>
            <ProjectDetail
                name='Bspice'
                date='2021'
                type='Wordpress Website'
                services='Wordpress Development'
                resume=''
                txtColor='#ffffff'
                projectTitle='BSpice'
                link='https://www.butcher-spice.com/'
                nextproject='/projects/mbtproject'
                prvsproject='/projects/livamo'
                imageSource={itemslist}
                bgcolor={bgColor}>

            </ProjectDetail>
        </Layout>
    )
}
