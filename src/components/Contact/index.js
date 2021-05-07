import React from 'react'
import { FaLinkedin, FaWhatsapp} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import {
    ContactContainer,
    ContactHeader,
    ContactWrapper,
    ContactCard,
    ContactIcon,
    ContactH2,
    ContactIconLink
} from './ContactElements'

export default function Contact() {

    const iconStyle = {color: 'black'}

    return(
        <>
        <ContactContainer>
            <ContactHeader>Contato</ContactHeader>
                <ContactWrapper>
                    <ContactCard>
                        <ContactIcon />
                        <ContactIconLink>
                            <FaWhatsapp style={iconStyle} />
                        </ContactIconLink>
                        <ContactH2>WhatsApp</ContactH2>
                    </ContactCard>
                    <ContactCard>
                        <ContactIcon />
                        <ContactIconLink>
                            <FaLinkedin style={iconStyle}/>
                        </ContactIconLink>
                        <ContactH2>Linkedin</ContactH2>
                    </ContactCard>
                    <ContactCard>
                        <ContactIcon />
                        <ContactIconLink>
                            <MdEmail style={iconStyle}/>
                        </ContactIconLink>
                        <ContactH2>Email</ContactH2>
                    </ContactCard>
                </ContactWrapper>
        </ContactContainer>
        </>
    )
}