import React, { useEffect } from 'react'
import Layout from '../../components/layout'
import ProjectDetail from '../../components/ProjectDetail'
import { createItems, hideOverlay, importAll } from '../../helpers/globalFunction';


export default function Cockatoobeauty() {


    var bgColor = "#27BD3F";

    const images = importAll(require.context('../../images/cockatoobeauty-project', false, /\.(png|jpe?g|svg|gif)$/));

    const itemslist = createItems(images)

    useEffect(() => {
        hideOverlay("+=2");
    });

    return (
        <Layout bgcolor={bgColor}>
            <ProjectDetail
                name='Cockatoo Beauty'
                date='2022'
                type='Design challenge'
                services='UI Design'
                resume=''
                txtColor='#ffffff'
                projectTitle='Cockatoo'
                link='https://www.figma.com/proto/AL0t4NtcVxtBWhhFYuQTRG/Cockatoo-Beauty?page-id=4%3A3&node-id=4%3A4&viewport=527%2C187%2C0.26&scaling=scale-down&starting-point-node-id=4%3A4'
                nextproject='/projects/photo'
                prvsproject='/projects/cockatoorace'
                imageSource={itemslist}
                bgcolor={bgColor}
            >
            </ProjectDetail>
        </Layout>
    )
}
