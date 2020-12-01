import React, { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaTimes , FaBars } from 'react-icons/fa'
import './Navbar.css'


function Navbar() {
    const name = "< T.A.Edmonds />";

    const [ click , setClick ] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(!click)

    const toggle_home = () => {
        scroll.scrollToTop();
    }
    
    return (
        <div className="navbar__container">
            
            <div className="navbar__grid-item">
                <h2 className="navbar__text" onClick={toggle_home}> {name} </h2>
            </div>

            
            <div className="navbar__menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </div>

            <div className="navbar__grid-item">
                <ul className={ click ? 'navbar__links-wrapper navbar__active' : 'navbar__links-wrapper'}>
                    <li className="navbar__link-item">
                        <Link to='skills' spy={true} smooth={true} offset={-50} duration={1000} className="navbar__link" onClick={closeMobileMenu}>
                                Skills
                        </Link>
                    </li>
                    <li className="navbar__link-item">
                        <Link to='carrier' spy={true} smooth={true} duration={1000} className="navbar__link" onClick={closeMobileMenu}>
                            Carrier
                        </Link>
                    </li>
                    <li className="navbar__link-item">
                        <Link to='projects' offset={-70} spy={true} smooth={true} duration={1000} className="navbar__link" onClick={closeMobileMenu}>
                            Projects 
                        </Link>
                    </li>
                    <li className="navbar__link-item">
                        <Link to='contact-me' spy={true} smooth={true} duration={1000} className="navbar__link" onClick={closeMobileMenu}>
                            Contact Me 
                        </Link>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar
