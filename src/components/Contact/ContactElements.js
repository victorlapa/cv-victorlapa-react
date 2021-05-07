import styled from 'styled-components'

export const ContactContainer = styled.div`
    background: #eeeeee;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ContactWrapper = styled.div`
    font-size: 48px;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
`

export const ContactCard = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 200ms ease-in-out;

    &:hover {
        transform: scale(1.2);
        transition: 200ms ease-in-out;
    }
`

export const ContactIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 16px;
`

export const ContactH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    color: #000;
`

export const ContactHeader = styled.h1`
    font-size: 60px;
`

export const ContactIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`