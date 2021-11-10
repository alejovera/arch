import React from 'react'
import './Navbar.css'
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
                        <li className="navbar-mobile__list-item">Portfolio</li>
                        <li className="navbar-mobile__list-item">About us</li>
                        <li className="navbar-mobile__list-item">Contact</li>
                    </ul>
                </nav>
                <nav className="navbar-desktop">
                    <ul className="navbar-desktop__ul">
                        <li className="navbar-desktop__list-item">Portfolio</li>
                        <li className="navbar-desktop__list-item">About us</li>
                        <li className="navbar-desktop__list-item">Contact</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export { Navbar }
