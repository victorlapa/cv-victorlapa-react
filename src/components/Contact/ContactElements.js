import styled from 'styled-components'

export const ContactContainer = styled.div`
    background: #222831;
    height: 800px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const ContactWrapper = styled.div`
    font-size: 48px;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 70px;
    padding: 0 50px;
    flex-direction: row;
    justify-content: center;
    max-width: 1000px;
    display: grid;
    padding-top: 40px;
`

export const ContactCard = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 200ms ease-in-out;
    height: 400px;
    width: 400px;

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
    justify-content: center;
    text-align: center;
`

export const ContactHeader = styled.h1`
    font-size: 80px;
    padding-bottom: 100px;
    color: #fff;
`

export const IconLink = styled.a`
    color: #fff;
    font-size: 24px;
`

export const ContactText = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #fff;
    justify-content: center;
    text-align: center;
    padding-bottom: 10px;
`