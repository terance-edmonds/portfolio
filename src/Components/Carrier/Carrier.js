import React from 'react'
import './Carrier.css'
import EgoSurf from '../../images/Carrier/egosurf_logo.jpg'
import {Link} from 'react-router-dom'

function Carrer() {
    return (
        <div id="carrier" className="carrier__container">

            <div className="carrier__grid-item">
                <h1 className="carrier__heading">My Work Space</h1>
            </div>

            <div className="carrier__grid-item">
                <Link target='_blank' to="//egosurf.lk" className="carrier__card-link">
                    <div className="carrier__card">
                        <div className="carrier__card-grid">
                            <img src={EgoSurf} alt="EgoSurf" className="carrier__image"/>
                        </div>
                        <div className="carrier__card-grid">
                            <div className="carrier__card-head-wrapper">
                                <h1 className="carrier__card-head">EGOSURF</h1>
                                <p className="carrier__card-head-desc">Software and Web Development Firm.</p>
                            </div>
                            <ul className="carrier__card-desc-wrapper">
                                <li className="carrier__card-desc">Co-Founder of EGOSURF</li>
                                <li className="carrier__card-desc">Working as a Web Devloper</li>
                            </ul>
                        </div>
                    </div>
                </Link>
            </div>
            
        </div>
    )
}

export default Carrer
