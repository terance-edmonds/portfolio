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
        setClick(false)
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
                    <Link to='skills' spy={true} smooth={true} offset={-50} duration={1000} className="navbar__link" onClick={closeMobileMenu}>
                        <li className="navbar__link-item">
                                    Skills
                        </li>
                    </Link>
                    <Link to='carrier' offset={-60} spy={true} smooth={true} duration={1000} className="navbar__link" onClick={closeMobileMenu}>
                        <li className="navbar__link-item">
                                Carrier
                        </li>
                    </Link>
                    <Link to='projects' offset={-50} spy={true} smooth={true} duration={1000} className="navbar__link" onClick={closeMobileMenu}>
                        <li className="navbar__link-item">
                                Projects 
                        </li>
                    </Link>
                    <Link to='contact-me' spy={true} smooth={true} duration={1000} className="navbar__link" onClick={closeMobileMenu}>
                        <li className="navbar__link-item">
                                Contact Me 
                        </li>
                    </Link>
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar
