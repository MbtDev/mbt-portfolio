import React, { useEffect } from 'react'
import YoutubeEmbed from '../../components/YoutubeEmbed'
import Layout from '../../components/layout';
import ProjectDetail from '../../components/ProjectDetail';
import { hideOverlay } from '../../helpers/globalFunction';

export default function Video() {

    var videos = [];


    videos.push(<YoutubeEmbed id="video1" className="video" embedId="0uxUdXqIHrk" />)
    videos.push(<YoutubeEmbed id="video2" className="video" embedId="vegpxh2_reg" />)
    videos.push(<YoutubeEmbed id="video3" className="video" embedId="x__spLurkT4" />)

    useEffect(() => {
        hideOverlay("+=2");
    });

    return (



        <Layout bgcolor={"dazd"}>
            <ProjectDetail
                name='Video'
                date='2020-2021'
                type='Video project'
                services='Videographie'
                resume='This is all my projects video that i worked on.'
                txtColor='#375591'
                projectTitle='Video'
                link='https://www.livamoapp.com'
                nextproject='/projects/livamo'
                prvsproject='/projects/cockatoobeauty'
                imageSource={videos}
                bgcolor={"eazfzef"}>

            </ProjectDetail>
        </Layout>

    )
}
