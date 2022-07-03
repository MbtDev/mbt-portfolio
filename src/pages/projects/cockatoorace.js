import React, { useEffect } from 'react'
import Layout from '../../components/layout'
import ProjectDetail from '../../components/ProjectDetail'
import { createItems, hideOverlay, importAll } from '../../helpers/globalFunction';


export default function Cockatoorace() {

    var bgColor = "#ED1C24";

    const images = importAll(require.context('../../images/cockatoorace-project', false, /\.(png|jpe?g|svg|gif)$/));

    const itemslist = createItems(images)

    useEffect(() => {
        hideOverlay("+=2");
    });

    return (
        <Layout bgcolor={bgColor}>
            <ProjectDetail
                name='Cockatoo race'
                date='2022'
                type='Design challenge'
                services='UI Design'
                resume=''
                txtColor='#ffffff'
                projectTitle='Cockatoo'
                link='https://www.figma.com/proto/65xdXOO9GP4ALBSBD7Uc4p/Formule-cacato%C3%A8s?page-id=15%3A2&node-id=16%3A3&viewport=81%2C369%2C0.34&scaling=scale-down&starting-point-node-id=16%3A3'
                nextproject='/projects/cockatoobeauty'
                prvsproject='/projects/mbtproject'
                imageSource={itemslist}
                bgcolor={bgColor}
            >
            </ProjectDetail>
        </Layout>
    )
}
