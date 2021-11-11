import React from 'react'

import arrowButton from '../../assets/icons/icon-arrow.svg'
import imgCard1 from '../../assets/portfolio/desktop/image-del-sol.jpg'

import {Card} from '../../components/Card/Card';
import './Projects.css'

function Projects() {
    return (
        <>
            <div className="projects__nav">
                <h2 className="projects__title">Featured</h2>
                <button className="projects__button">See All
                    <img src={arrowButton} alt="" />
                </button>
            </div>
            <div className="projects__card-container"
            >
                <Card title="Project Del Sol" detail="View All Projects" img='../../assets/portfolio/desktop/image-del-sol.jpg' />
                <Card title="228B Tower" detail="View All Projects" />
                <Card title="La Prototype" detail="View All Projects" />
            </div>
            
        </>
    )
}

export { Projects }
