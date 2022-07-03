import React, { useEffect } from 'react'
import Layout from '../../components/layout'
import ProjectDetail from '../../components/ProjectDetail'
import { createItems, hideOverlay, importAll } from '../../helpers/globalFunction';

export default function Mbtproject() {


    var bgColor = "#121212";

    const images = importAll(require.context('../../images/mbt-project', false, /\.(png|jpe?g|svg|gif)$/));

    const itemslist = createItems(images)

    useEffect(() => {
        hideOverlay("+=2");
    });

    return (
        <Layout bgcolor={bgColor}>
            <ProjectDetail
                name='Portfolio'
                date='2021'
                type='Website'
                services='Web development'
                resume='This was the previous version of my portfolio'
                txtColor='#ffffff'
                projectTitle='Portfolio'
                link='https://www.livamoapp.com'
                nextproject='/projects/cockatoorace'
                prvsproject='/projects/bspice'
                imageSource={itemslist}
                bgcolor={bgColor}>

            </ProjectDetail>
        </Layout>
    )
}
