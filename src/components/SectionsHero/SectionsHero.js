import React from 'react'
import './SectionsHero.css'

function SectionsHero({section, info, title}) {
    return (
        <>
        <section class="about__hero">
          <div class="about__hero--container">
            <div class="about__hero--left">
              <div class="about__hero--left--block"></div>
            </div>
            <div class="about__hero--right">
              <h1 class="about__headline--large">{section}</h1>
              <div class="about__separator"></div>
              <h2 class="about__right--headline">
                {title} <br />
              </h2>
              <p class="about__hero--right--description">
                {info}
              </p>
            </div>
          </div>
        </section>
        </>
    )
}

export {SectionsHero}
