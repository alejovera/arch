import React from 'react'
import './LeadersCard.css'

import avatarJake from '../../assets/about/desktop/avatar-jake.jpg';

function LeadersCard({name, position}) {
    return (
        <div className="leaders__card">
            <img
                src={avatarJake}
                alt=""
                className="leaders__image"
            />
            <h3 className="leaders__name">{name}</h3>
            <p className="leaders__title">{position}</p>
            <i className="fab fa-instagram fa-2x"></i>
            <i className="fab fa-twitter fa-2x twit"></i>
        </div>
    )
}

export {LeadersCard}
