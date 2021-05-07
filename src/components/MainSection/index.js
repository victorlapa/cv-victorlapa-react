import React from 'react'
import Video from '../../videos/video.mp4'
import {
    MainContainer,
    MainBackground,
    MainContent,
    MainH1,
    MainP,
    VideoBackground,
} from './MainElements'
export default function MainSection() {
    return(
        <>
        <MainContainer id="main">
            <MainBackground>
                <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
            </MainBackground>
            <MainContent>
                <MainH1>Victor Lapa</MainH1>
                <MainP>desenvolvedor web</MainP>
            </MainContent>
        </MainContainer>
        </>
    )
}