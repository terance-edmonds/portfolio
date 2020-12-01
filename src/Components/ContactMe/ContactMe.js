import TextScramble from '@twistezo/react-text-scramble'
import React from 'react'
import './ContactMe.css'
import { IconContext } from 'react-icons'
import {HiOutlineLocationMarker} from  'react-icons/hi'
import SocialMedia from '../SocialMedia/SocialMedia'

function ContactMe() {

    const texts = [
        'Full Stack Web Developer 💻',
        'Mobile App Developer 📱',
        'Software Developer 🖥'
      ]

    return (
        <div id="contact-me" className="contact__container">
            <div className="contact__grid-item">
                <div className="contact__image"></div>
            </div>
            <div className="contact__grid-item">
                <div className="contact__profile-wrapper">
                    <div className="contact__profile-name">Terance Edmonds</div>

                    <div className="contact__profile-desc-head">
                        Discuss a project or just want to say Hi ?
                        You are welcome to drop a message to my inbox.
                    </div>

                    <div className="contact__desc-wrapper">
                        <div className="contact__profile-desc-1">I'm a</div>
                        <TextScramble className="contact__profile-desc-2" texts={texts}/>
                    </div>

                    <div className="contact__location-wrapper">
                        <IconContext.Provider value={{color: "#000"}}>
                            <div className="contact__location-icon"><HiOutlineLocationMarker/></div>
                        </IconContext.Provider>
                        <div className="contact__location">Homagama, SriLanka</div>
                    </div>
                
                    <SocialMedia/>

                </div>
            </div>
        </div>
    )
}

export default ContactMe
