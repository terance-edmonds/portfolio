import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'
import DTS from '../../images/Card-Logo/DTS.png'

function Projects() {
    return (
        <div id="projects" className="projects__container">
            <div className="projects__grid-item">

                <div className="projects__projects-head-wrapper" data-aos="zoom-in-up">
                    <h1 className="projects__projects-head">Projects</h1>
                    <p className="projects__projects-desc">Some awsome projects i helped with</p>
                </div>

                <div className="projects__web-projects" data-aos="zoom-in-up">
                    <Link target='_blank' to='//dts.chords.org.lk' className="projects__card-link">
                        <div className="projects__card">
                            <img src={DTS} alt="DTS" className="projects__big-card-image"/>
                        </div>
                    </Link>
                </div>

            </div>

            <div className="projects__grid-item">

                <div className="projects__projects-head-wrapper" data-aos="zoom-in-up">
                        <h1 className="projects__projects-head">Open Source Projects</h1>
                        <p className="projects__projects-desc">Some open source projects i created</p>
                </div>

                <div className="projects__open-web-projects">

                    <div className="projects__open-web-projects-grid" data-aos="zoom-in-up">
                        <Link className="projects__card-link">
                            <div className="projects__card projects__open-source"></div>
                        </Link>
                    </div>

                    <div className="projects__open-web-projects-grid" data-aos="zoom-in-up">
                        <Link className="projects__card-link">
                            <div className="projects__card projects__open-source"></div>
                        </Link>
                    </div>

                    <div className="projects__open-web-projects-grid">
                        <Link className="projects__card-link">
                            <div className="projects__card projects__open-source"></div>
                        </Link>
                    </div>
                        
                </div>
                
            </div>
        </div>
    )
}

export default Projects
