import React from 'react'
import './SectionsHero.css'

function SectionsHero({section, info, title}) {
    return (
        <>
        <section className="about__hero">
          <div className="about__hero--container">
            <div className="about__hero--left">
              <div className="about__hero--left--block"></div>
            </div>
            <div className="about__hero--right">
              <h1 className="about__headline--large">{section}</h1>
              <div className="about__separator"></div>
              <h2 className="about__right--headline">
                {title} <br />
              </h2>
              <p className="about__hero--right--description">
                {info}
              </p>
            </div>
          </div>
        </section>
        </>
    )
}

export {SectionsHero}
