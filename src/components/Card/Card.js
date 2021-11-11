import React from 'react'
import './Card.css'
import imgCard from '../../assets/portfolio/desktop/image-del-sol.jpg'

function Card({title, detail, img}) {
    return (
        <div className="card" style={{backgroundImage: `url(${imgCard})`}}>
            <div className="card__number">2</div>
            <div className="card__text">
                <h3>{title}</h3>
                <p className="card__parag">{detail}</p>
            </div>
        </div>
    )
}

export { Card }
