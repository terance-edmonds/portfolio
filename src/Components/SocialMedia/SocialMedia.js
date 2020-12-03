import React from 'react'
import './SocialMedia.css'
import {Link} from 'react-router-dom'
import { Popup } from 'semantic-ui-react'

function SocialMedia() {

    const style = {
        borderRadius: '0.5rem',
        opacity: 1,
        padding: '0.5rem',
        background: '#fff',
        color: '#000',
      }

    return (
        <div>
            <div className="socialMedia__social-media-wrapper" data-aos="zoom-in-up">
                <Link target="_blank" to='//fiverr.com/terance-edmonds'> <div className="socialMedia__fiverr socialMedia__social-media"></div> </Link>
                <Link target="_blank" to='//linkedin.com/in/terance-edmonds-6ab3bb201'> <div className="socialMedia__linkedin socialMedia__social-media"></div> </Link>
                <Link target="_blank" to='//github.com/terance-edmonds'> <div className="socialMedia__github socialMedia__social-media"></div> </Link>
                <Link target="_blank" to='//instagram.com/t.a.edmonds/'> <div className="socialMedia__instagram socialMedia__social-media"></div> </Link>
                <a href="mailto:teranceedmonds20@gmail.com"><div className="socialMedia__gmail socialMedia__social-media" /></a>
            </div>
        </div>
    )
}

export default SocialMedia
