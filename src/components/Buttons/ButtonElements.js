import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
border-radius: 50px;
background: ${({primary}) => (primary ? '#00adb5' : '#000')};
/*white-space: nowrap*/
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 200ms ease-in-out;

&:hover {
    transition: all 200ms ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#000')};
}
`