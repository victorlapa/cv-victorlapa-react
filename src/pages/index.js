import React from 'react'
import MainSection from '../components/MainSection'
import InfoSection from '../components/InfoSection'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import { objOne, objTwo } from '../components/InfoSection/Data'

export default function Home() {
    return (
        <>
        <Navbar />
        <MainSection />
        <InfoSection {...objOne} />
        <Contact  {...objTwo} />
        </>
    )
}