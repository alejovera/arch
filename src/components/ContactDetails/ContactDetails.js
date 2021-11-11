import React from 'react'
import './ContactDetails.css'

import blackArrow from '../../assets/black__arrow.png'

function ContactDetails({office, mail, phone, adress}) {
    return (
        <div className="contact__details--list main">
            <div className="contact__details--text">
                <p className="location">{office}</p>
                <p className="mail">Mail: {mail}</p>
                <p className="address">Address: {adress}</p>
                <p className="phone">Phone: {phone}</p>
            </div>
            <div className="view__container">
                <span className="view">View on Map</span>
                <span className="arrow__black">
                    <img src={blackArrow} alt=""/>
                </span>
            </div>
        </div>
    )
}

export {ContactDetails}
