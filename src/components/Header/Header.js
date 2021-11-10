import React from 'react'
import './Header.css'
import arrowIcon from '../../assets/icons/icon-arrow.svg'

function Header() {
    return (
        <div className="header__container">
            <div className="header__content">
                <h1 className="header__title">Project</h1>
                <h1 className="header__title">Paramour</h1>
                <p className="header__info">Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture</p>
                <button className="header__button">See Our Portfolio</button>
            </div>
            <div className="header__icon-container">
                <div className="arrow__container">
                    <i className="fas fa-arrow-left arrow" aria-hidden="true"></i>
                </div>
                <div className="arrow__container">
                    <i className="fas fa-arrow-right arrow" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}

export { Header }
