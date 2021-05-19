import React, { useEffect, useState } from 'react'
import { FaHome } from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'

import {
    NavbarContainer,
    NavbarItem,
    NavLink,
    NavbarMenu,
    Nav,
    Icon
} from './NavbarElements'


export default function Navbar() {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = function() {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = function() {
        scroll.scrollToTop();
    }

 
    return(
        <>
        <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <Icon>
                <FaHome size={32} onClick={toggleHome}>Icone Home</FaHome>
            </Icon>
            <NavbarMenu>
            <NavbarItem>
                <NavLink to="about" 
                smooth={true} duration={500} spy={true} exact='true'>
                Sobre mim
                </NavLink>
            </NavbarItem>
            <NavbarItem>
                <NavLink to="experience"
                smooth={true} duration={500} spy={true} exact='true'>
                Contato 
                </NavLink>
            </NavbarItem>
            </NavbarMenu>
        </NavbarContainer>
        </Nav>
        </>
    )
}