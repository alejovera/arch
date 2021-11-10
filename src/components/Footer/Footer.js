import React from 'react'
import './Footer.css'

import brandLogo from '../../assets/logo.svg'
function Footer() {
    return (
        <div className="footer__container">
            <div className="footer__brand">
                <img src={brandLogo} alt="" />
            </div>
            <nav className="footer__navbar">
                <ul className="footer__ul">
                    <li className="footer__list-item">
                        Portfolio
                    </li>
                    <li className="footer__list-item">
                        About Us
                    </li>
                    <li className="footer__list-item">
                        Contact
                    </li>
                    <button className="footer__button">
                        See Our Portfolio
                    </button>
                </ul>
                
            </nav>
        </div>
    )
}

export { Footer }
