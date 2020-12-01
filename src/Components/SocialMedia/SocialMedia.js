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
                <Link target="_blank" to='//github.com/terance-edmonds'> <div className="socialMedia__github socialMedia__social-media"></div> </Link>
                <Link target="_blank" to='//instagram.com/t.a.edmonds/'> <div className="socialMedia__instagram socialMedia__social-media"></div> </Link>
                <Link><Popup position='bottom left' style={style} trigger={<div className="socialMedia__gmail socialMedia__social-media" onClick={() => {navigator.clipboard.writeText('teranceedmonds20@gmail.com')}}/>} content="teranceedmonds20@gmail.com"/></Link>
            </div>
        </div>
    )
}

export default SocialMedia
