import React from 'react'
import arrowButton from '../../assets/icons/icon-arrow.svg'
import './AboutUs.css'

function AboutUs() {
    return (
        <section className="aboutUs__container">
            <h3 className="aboutUs__title">Welcome to Arch Studio</h3>
            <p className="aboutUs__info">
                Welcome to Arch Studio We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results. <br />
                Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight. <br />
                We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
            </p>
            <div className="aboutUs__banner">
                <h3 className="aboutUs__banner-title">Small team, big ideas</h3>
                <button className="aboutUs__banner-button">
                    About Us
                    <img src={arrowButton} />
                </button>
            </div>
        </section>
    )
}

export {AboutUs}
