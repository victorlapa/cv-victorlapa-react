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
    ContactText
} from './ContactElements'

export default function Contact() {

    const linkedinStyle = {color: '#2867B2', width: 100, height: 100}
    const whatsStyle = {color: '#25d366', width: 100, height: 100}
    const mailStyle = {color: 'red', width: 100, height: 100}

    return(
        <>
        <ContactContainer id="experience">
            <ContactHeader>Contato</ContactHeader>
            <ContactText>victtorlapa1@gmail.com</ContactText>
            <ContactText>(47)99697-8360</ContactText>
            <ContactWrapper>
                <ContactCard>
                    <IconLink href="//api.whatsapp.com/send?phone=5547996978360" target="_blank">
                        <FaWhatsapp style={whatsStyle} />
                        <ContactH2>WhatsApp</ContactH2>
                    </IconLink>
                </ContactCard>
                <ContactCard>
                    <IconLink href="//www.linkedin.com/in/victorlapa" target="_blank">
                        <FaLinkedin style={linkedinStyle} />
                        <ContactH2>Linkedin</ContactH2>
                    </IconLink>
                </ContactCard>
                <ContactCard>
                    <IconLink href="mailto:victtorlapa1@gmail.com">
                        <MdEmail style={mailStyle} />
                        <ContactH2>Email</ContactH2>
                    </IconLink>
                </ContactCard>
            </ContactWrapper>
        </ContactContainer>
        </>
    )
}