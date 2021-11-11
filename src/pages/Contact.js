import React from 'react'
import { SectionsHero } from '../components/SectionsHero/SectionsHero'

import './styles/Contact.css'
import { ContactDetails } from '../components/ContactDetails/ContactDetails'

import whiteArrow from '../assets/white__arrow.png'
function Contact() {
    return (
        <>
            <SectionsHero section="Contact" title="Tell us about your project"
                info="We’d love to hear more about your project. Please, leave a
                message below or give us a call. We have two offices, one in
                Texas and one in Tennessee. If you find yourself nearby, come
                say hello!" 
            />
            <section className="contact__details">
                <div className="heritage__divider"></div>
                <div className="contact__details--container">
                    <div className="contact__details--left">
                    <h2 className="contact__details--left--title">
                        Contact <br />
                        Details
                    </h2>
                    </div>

                    <ContactDetails office="Main Office" mail="archone@mail.com" adress="1892 Chenoweth Drive TN"
                        phone="802-456-3451"
                    />
                    <ContactDetails
                        office="Office II"
                        mail="archtwo@mail.com"
                        adress="3399 Wines Lane TX"
                        phone="832-145-4321"
                    />
                </div>
            </section>
            <section className="contact__map"></section>
            <section className="contact__form">
            <h2 className="contact__form--headline">
                Connect <br />
                with us
            </h2>
            <div className="form__container">
                <form action="#" id="connect__form">
                <div className="form__input">
                    <input type="text" placeholder="Name" id="Name" />
                    <p className="form__error name">Can't be empty</p>
                </div>
                <div className="form__input">
                    <input type="email" placeholder="Email" id="email" />
                    <p className="form__error email">Can't be empty</p>
                </div>
                <div className="form__input">
                    <textarea
                    name="message"
                    id="Message"
                    placeholder="Message"
                    cols="30"
                    rows="10"
                    ></textarea>
                    <p className="form__error message">Can't be empty</p>
                </div>
                <div className="button__container">
                    <button type="submit" className="form__button">
                    <img
                        src={whiteArrow}
                        alt=""
                        className="form__arrow"
                    />
                    </button>
                </div>
                </form>
            </div>
            </section>
        </>
    )
}

export default Contact
