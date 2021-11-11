import React from 'react'
import './ContactDetails.css'

import blackArrow from '../../assets/black__arrow.png'

function ContactDetails({office, mail, phone, adress}) {
    return (
        <div class="contact__details--list main">
            <div class="contact__details--text">
                <p class="location">{office}</p>
                <p class="mail">Mail: {mail}</p>
                <p class="address">Address: {adress}</p>
                <p class="phone">Phone: {phone}</p>
            </div>
            <div class="view__container">
                <span class="view">View on Map</span>
                <span class="arrow__black">
                    <img src={blackArrow} alt=""/>
                </span>
            </div>
        </div>
    )
}

export {ContactDetails}
