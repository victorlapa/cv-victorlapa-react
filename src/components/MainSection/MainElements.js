import styled from 'styled-components'

export const MainContainer = styled.div`

    display: flex;
    background: #393e46;
    height: 800px;
    position: relative;
    z-index: 1;
    justify-content: center;
    align-items: center;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 100%);
        z-index: 2;
    }
`

export const MainBackground = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBackground = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const MainContent = styled.div`
    display: flex;
    position: absolute;
    max-width: 1200px;
    flex-direction: column;
    z-index: 3;

    &:hover {
        transform: scale(1.5);
        transition: all 300ms ease-in-out; 
    }
`

export const MainH1 = styled.h1`
    color: #fff;
    font-size: 60px;
    text-align: center;
    
`

export const MainP = styled.p`
    color: #fff;
    font-size: xx-la;
    margin-top: 50px;
    text-align: center;
`