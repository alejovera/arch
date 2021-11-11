import React from 'react'
import './AboutHero.css'

import {Navbar} from '../Navbar/Navbar';
import { SectionsHero } from '../SectionsHero/SectionsHero';
import { LeadersCard } from '../LeadersCard/LeadersCard';
import {Footer} from '../Footer/Footer'

// import avatarJake from '../../assets/about/desktop/avatar-jake.jpg';
// import avatarThompson from '../../assets/about/desktop/avatar-thompson.jpg'
// import avatarJackson from '../../assets/about/desktop/avatar-jackson.jpg'
// import avatarMaria from '../../assets/about/desktop/avatar-maria.jpg'


function AboutHero() {
    return (
        <>
        <Navbar />
        <SectionsHero section="About" title="Your teams of proffesionals"
          info="Our small team of world-class professionals will work with you
          every step of the way. Strong relationships are at the core of
          everything we do. This extends to the relationship our projects
          have with their surroundings."
        />
        <section className="heritage">
          <div className="heritage__container">
            <div className="heritage__left">
              <div className="heritage__divider"></div>
              <h2 className="heritage__headline">Our <br />Heritage</h2>
              <div className="heritage__description">
                Founded in 2007, we started as a trio of architects. Our
                complimentary skills and relentless attention to detail turned
                Arch into one of the most sought after boutique firms in the
                country. <br className="dh1" />
                Speciliazing in Urban Design allowed us to focus on creating
                exceptional structures that live in harmony with their
                surroundings. We consider every detail from every surrounding
                element to inform our designs. <br className="dh1" />
                Our small team of world-className professionals provides input on
                every project.
              </div>
            </div>
            <div className="heritage__right"></div>
          </div>
        </section>
        <section className="leaders">
          <div className="leaders__container">
            <h2 className="leaders__left">The <br />Leaders</h2>
            <div className="leaders__right">
              <LeadersCard name="Jake Richards" position="Chief Architect" />
              <LeadersCard name="Thompson Smith" position="Head of Finance" />
              <LeadersCard name="Jackson Rourke" position="Lead Designer" />
              <LeadersCard name="Maria Simpson" position="Senior Architect" />
            </div>
          </div>
        </section>
        <Footer />
        </>
    )
}

export { AboutHero }
