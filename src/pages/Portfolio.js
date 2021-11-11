import React from 'react'
import { Card } from '../components/Card/Card'

import portfolioImg1 from '../assets/portfolio/desktop/image-eebox.jpg'

import './styles/Portfolio.css'

function Portfolio() {
    return (
        <>
            <div className="portfolio__container">
                <Card title="Seraph Station" detail="September 2019" img="../../assets/portfolio/desktop/image-del-sol.jpg" />
                <Card title="Eebox building" detail="August 2017"  />
                <Card title="Seraph Station" detail="March 2017" />
                <Card title="Seraph Station" detail="March 2017" />
                <Card title="Seraph Station" detail="March 2017" />
                <Card title="Seraph Station" detail="March 2017" />
                <Card title="Seraph Station" detail="March 2017" />
                <Card title="Seraph Station" detail="March 2017" />
                <Card title="Seraph Station" detail="March 2017" />
                <Card title="Seraph Station" detail="March 2017" />
                <Card title="Seraph Station" detail="March 2017" />
                <Card title="Seraph Station" detail="March 2017" />

            </div>
        </>
    )
}

export default Portfolio
