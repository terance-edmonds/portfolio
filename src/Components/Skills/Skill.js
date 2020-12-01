import React from 'react'
import './Skill.css'
import WokingMan from '../../images/vector-images/WokingMan.svg'
import html5 from '../../images/programming-languages/html-5.png'
import css3 from '../../images/programming-languages/css3.png'
import javascript from '../../images/programming-languages/javascript.png'
import reactjs from '../../images/programming-languages/react-native.png'
import nodejs from '../../images/programming-languages/nodejs.png'
import mongoDb from '../../images/programming-languages/mongodb.png'
import Csharp from '../../images/programming-languages/c#.png'
import python from '../../images/programming-languages/python.png'
import java from '../../images/programming-languages/java.png'
import mysql from '../../images/programming-languages/mysql.png'
import firebase from '../../images/programming-languages/firebase.png'
import php from '../../images/programming-languages/php.png'

function Skill() {
    return (
        <div id="skills" className="skills__container">

            <div className="skills__grid-item">
                <img src={WokingMan} alt="Woking Man" className="skills__WorkingMan"/>
            </div>

            <div className="skills__grid-item">
                <div className="skills__head-wrapper">
                    <h1 className="skills__head-text">What I Do</h1>
                    <p className="skills__head-desc">I'm a Developer who wants to explore every tech and experiment new stuff.</p>
                </div>

                <div className="skills__language-wrapper">

                    <div className="skills__language-grid-item">

                        <div className="skills__single-language-wrapper">
                            <img src={html5} alt="language" className="skills__language"/>
                            <p className="skills__language-text">HTML-5</p>
                        </div>

                        <div className="skills__single-language-wrapper">
                            <img src={css3} alt="language" className="skills__language"/>
                            <p className="skills__language-text">CSS-3</p>
                        </div>

                        <div className="skills__single-language-wrapper">
                            <img src={javascript} alt="language" className="skills__language"/>
                            <p className="skills__language-text">Javascript</p>
                        </div>

                        <div className="skills__single-language-wrapper">
                            <img src={reactjs} alt="language" className="skills__language"/>
                            <p className="skills__language-text">ReactJs</p>
                        </div>

                        <div className="skills__single-language-wrapper">
                            <img src={nodejs} alt="language" className="skills__language"/>
                            <p className="skills__language-text">NodeJs</p>
                        </div>

                        <div className="skills__single-language-wrapper">
                            <img src={mongoDb} alt="language" className="skills__language"/>
                            <p className="skills__language-text">MongoDB</p>
                        </div>

                        <div className="skills__single-language-wrapper">
                            <img src={Csharp} alt="language" className="skills__language"/>
                            <p className="skills__language-text">C#</p>
                        </div> 

                    </div>

                    <div className="skills__language-grid-item">

                        <div className="skills__single-language-wrapper">
                            <img src={python} alt="language" className="skills__language"/>
                            <p className="skills__language-text">python</p>
                        </div>
                        {/* <div className="skills__single-language-wrapper">
                            <img src={java} alt="language" className="skills__language"/>
                            <p className="skills__language-text">Java</p>
                        </div> */}
                        <div className="skills__single-language-wrapper">
                            <img src={php} alt="language" className="skills__language"/>
                            <p className="skills__language-text">php</p>
                        </div>
                        <div className="skills__single-language-wrapper">
                            <img src={mysql} alt="language" className="skills__language"/>
                            <p className="skills__language-text">MySql</p>
                        </div>
                        <div className="skills__single-language-wrapper">
                            <img src={firebase} alt="language" className="skills__language"/>
                            <p className="skills__language-text">Firebase</p>
                        </div>

                    </div>

                </div>

                <div className="skills__points-wrapper">
                        <p className="skills__points">
                            🔥 Highly interactive and responsive Front-End web and mobile applications.
                        </p>
                        <p className="skills__points">
                            🔥 Progressive Web Applications ( PWA ) in normal and SPA Stacks.
                        </p>
                        <p className="skills__points">
                            🔥 Highly functional and efficient Rest Apis with NodeJs for Back-End development.
                        </p>
                        <p className="skills__points">
                            🔥 Integration of third party services such as MongoDB / Firebase.
                        </p>
                </div>

            </div>

        </div>
    )
}

export default Skill
