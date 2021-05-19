import React from 'react'
import { FaLinkedin, FaWhatsapp} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import {
    ContactContainer,
    ContactHeader,
    ContactWrapper,
    ContactCard,
    IconLink,
    ContactH2,
    ContactIconLink,
    ContactText
} from './ContactElements'

export default function Contact() {

    const iconStyle = {color: 'black', width: 100, height: 100}

    return(
        <>
        <ContactContainer>
            <ContactHeader>Contato</ContactHeader>
            <ContactText>victtorlapa1@gmail.com</ContactText>
            <ContactText>(47)99697-8360</ContactText>
            <ContactWrapper>
                <ContactCard>
                    <IconLink href="//api.whatsapp.com/send?phone=5547996978360" target="_blank">
                        <FaWhatsapp style={iconStyle} />
                        <ContactH2>WhatsApp</ContactH2>
                    </IconLink>
                </ContactCard>
                <ContactCard>
                    <IconLink href="//www.linkedin.com/in/victorlapa" target="_blank">
                        <FaLinkedin style={iconStyle} />
                        <ContactH2>Linkedin</ContactH2>
                    </IconLink>
                </ContactCard>
                <ContactCard>
                    <IconLink href="mailto:victtorlapa1@gmail.com">
                        <MdEmail style={iconStyle} />
                        <ContactH2>Email</ContactH2>
                    </IconLink>
                </ContactCard>
            </ContactWrapper>
        </ContactContainer>
        </>
    )
}