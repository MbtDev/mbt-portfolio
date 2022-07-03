import React, { useEffect } from 'react'
import Layout from '../../components/layout';
import ProjectDetail from '../../components/ProjectDetail';
import { createItems, hideOverlay, importAll } from '../../helpers/globalFunction';

export default function Photo() {

    const images = importAll(require.context('../../images/photo', false, /\.(png|jpe?g|svg)$/));

    const itemslist = createItems(images)

    useEffect(() => {
        hideOverlay("+=2");
    });

    return (


        <Layout bgcolor={"dazd"}>
            <ProjectDetail
                name='Photo'
                date='2017-2022'
                type='Photo project'
                services='Photographie'
                resume='This is all my project photo that i worked on.'
                txtColor='#375591'
                projectTitle='Livamo'
                link='https://www.livamoapp.com'
                nextproject='/projects/video'
                prvsproject='/projects/cockatoobeauty'
                imageSource={itemslist}
                bgcolor={"eazfzef"}>

            </ProjectDetail>
        </Layout>

    )
}
