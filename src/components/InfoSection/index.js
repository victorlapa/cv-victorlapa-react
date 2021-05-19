import React from 'react'
import ProfileImg from '../../images/victorlapa.jfif'
import {
    InfoContainer,
    InfoWrapper,
    TextWrapper,
    InfoHeader,
    InfoImage,
    InfoP,
} from './InfoElements'

export default function Info({id, id2}) {
    return(
        <>
        <InfoContainer id={id}>
            <InfoWrapper>
                    <TextWrapper>
                        <InfoImage src={ProfileImg} />
                        <InfoHeader>Olá</InfoHeader>
                        <InfoP>
                            Estou no terceiro período de Sistemas de Informação na UTFPR.
                        </InfoP>
                        <InfoHeader>
                            Propósito
                        </InfoHeader>
                        <InfoP>Tornar a vida das pessoas mais fácil por meio da tecnologia</InfoP>
                        <InfoHeader>Experiência</InfoHeader>
                        <InfoP>Auxiliar de Desenvolvimento - ARKER(06/2020 - Presente)<br />
                                 Software de Cadastro e Inspeção de OAEs (Obras de Arte Especiais)
                            Foco em MongoDB, vueJS e Express</InfoP>
                    </TextWrapper>
            </InfoWrapper>
        </InfoContainer>
        </>
    )
}