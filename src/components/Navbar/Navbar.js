import React from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'

import navbarLogo from '../../assets/logo.svg'
import iconHamburguer from '../../assets/icons/icon-hamburger.svg'

function Navbar() {
    return (
        <>
            <div className="navbar__wrapper">
                <img src={navbarLogo} alt="" className="navbar__logo" />
                <input type="checkbox" id="menu" />
                <label htmlFor="menu">
                    <img className="navbar__img" src={iconHamburguer} alt="" />
                </label>
                <nav id="items_navbar" className="navbar-mobile">
                    <ul className="navbar-mobile__ul">
                        <Link className="navbar__links" to='/portfolio'>
                            <li className="navbar-mobile__list-item">Portfolio</li>
                        </Link>
                        <Link className="navbar__links" to="/about-us">
                            <li className="navbar-mobile__list-item">About us</li>
                        </Link>
                        <Link className="navbar__links" to='/contact'>
                            <li className="navbar-mobile__list-item">Contact</li>
                        </Link>
                    </ul>
                </nav>
                <nav className="navbar-desktop">
                    <ul className="navbar-desktop__ul">
                        <Link className="navbar__links">
                            <li className="navbar-desktop__list-item">Portfolio</li>
                        </Link>
                        <Link className="navbar__links" to="/about-us">
                            <li className="navbar-desktop__list-item">About us</li>
                        </Link>
                        <Link className="navbar__links" to="/contact">
                            <li className="navbar-desktop__list-item">Contact</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export { Navbar }
