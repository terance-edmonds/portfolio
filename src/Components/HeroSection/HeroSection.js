import React from 'react'
import './HeroSection.css'
import ManOnTheDesk from '../../images/vector-images/manOnTable.svg'
import SocialMedia from '../SocialMedia/SocialMedia'

function HeroSection() {
    return (
        <div className="heroSection__container">

            <div className="heroSection__grid-item">

                <div className="heroSection__head-wrapper">
                    <h1 className="heroSection__hero-text">Hey There, I'm Terance</h1>
                    <div className="heroSection__hero-emoji">👋</div> 
                </div>

                <p className="heroSection__hero-description">
                    A Passionate Web Developer.
                    I'm experienced in building web and mobile applications with Javascript, ReactJs, NodeJs and React Native and some other languages, cool libraries
                    and frameworks
                </p>

                <SocialMedia/>

            </div>

            <div className="heroSection__grid-item">
                <img src={ManOnTheDesk} alt="Man on Desk" className="heroSection__image"/>
            </div>
        </div>
    )
}

export default HeroSection