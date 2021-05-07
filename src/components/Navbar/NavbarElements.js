import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? 'transparent' : '#000')};
    height: 80px;
    position: sticky;
    top: 0;
    justify-content: space-between;
    z-index: 999;
    align-items: center;
    display: flex;
`
export const Icon = styled.div`
    position: relative;
    cursor: pointer;
    color: #fff;
    left: -300px;

    &:hover {
        transform: scale(1.4);
        transition: all 200ms ease-out;
    }
`

export const NavbarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    position: relative;
    z-index: 3;
`
export const NavbarItem = styled.li`
    align-self: center;
    justify-content: center;
    margin-left: 50px;

    &:hover {
        transform: scale(1.2);
        transition: all 300ms;
    }
`

export const NavLink = styled(LinkS)`
    font-size: 1rem;
    color: #fff;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        border-bottom: 3px solid #01adb5;
    }
`

export const NavbarMenu = styled.ul`
    display: flex;
    justify-content: flex-end;
    list-style: none;
    align-items: center;
`

export const NavbarText = styled.h1`
    color: #fff;
    font-size: 2rem;
    position: relative;
    right: 600px;
`



