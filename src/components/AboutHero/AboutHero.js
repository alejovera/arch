import React from 'react'
import './AboutHero.css'

import { SectionsHero } from '../SectionsHero/SectionsHero';

import avatarJake from '../../assets/about/desktop/avatar-jake.jpg';
import avatarThompson from '../../assets/about/desktop/avatar-thompson.jpg'
import avatarJackson from '../../assets/about/desktop/avatar-jackson.jpg'
import avatarMaria from '../../assets/about/desktop/avatar-maria.jpg'

function AboutHero() {
    return (
        <>
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
              <div className="leaders__card">
                <img
                  src={avatarJake}
                  alt=""
                  className="leaders__image"
                />
                <h3 className="leaders__name">Jake Richards</h3>
                <p className="leaders__title">Chief Architect</p>
                <i className="fab fa-instagram fa-2x"></i>
                <i className="fab fa-twitter fa-2x twit"></i>
              </div>
              <div className="leaders__card">
                <img
                  src={avatarThompson}
                  alt=""
                  className="leaders__image"
                />
                <h3 className="leaders__name">Thompson Smith</h3>
                <p className="leaders__title">Head of Finance</p>
                <i className="fab fa-instagram fa-2x" id="insta"></i>
                <i className="fab fa-twitter fa-2x twit" id="twitter"></i>
              </div>
              <div className="leaders__card">
                <img
                  src={avatarJackson}
                  alt=""
                  className="leaders__image"
                />
                <h3 className="leaders__name">Jackson Rourke</h3>
                <p className="leaders__title">Lead Designer</p>
                <i className="fab fa-instagram fa-2x"></i>
                <i className="fab fa-twitter fa-2x twit"></i>
              </div>
              <div className="leaders__card">
                <img
                  src={avatarMaria}
                  alt=""
                  className="leaders__image"
                />
                <h3 className="leaders__name">Maria Simpson</h3>
                <p className="leaders__title">Senior Architect</p>
                <i className="fab fa-instagram fa-2x insta"></i>
                <i className="fab fa-twitter fa-2x twit"></i>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export { AboutHero }
