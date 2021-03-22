import React from 'react'
import ContactMe from './ContactMe/ContactMe'
import Footer from './Footer/Footer'
import HeroSection from './HeroSection/HeroSection'
import Projects from './Projects/Projects'
import Skill from './Skills/Skill'
import Carrier from './Carrier/Carrier'

function Home() {
    return (
        <>
            <HeroSection/>
            <Skill/>
            <Carrier/>
            <Projects/>
            <ContactMe/>
            <Footer/>
        </>
    )
}

export default Home
