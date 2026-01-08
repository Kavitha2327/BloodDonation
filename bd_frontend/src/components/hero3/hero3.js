import React from 'react';
import { Link } from 'react-router-dom'
import hero from '../../images/man/home3-hero-boy1.jpg'
import map from '../../images/man/home3-hero-map.jpg'
import vlntr2 from '../../images/users/volunteer-user1.jpg'
import vlntr3 from '../../images/users/volunteer-user2.jpg'
import vlntr4 from '../../images/users/volunteer-user3.jpg'
import vlntr5 from '../../images/users/volunteer-user4.jpg'
import vlntr6 from '../../images/users/volunteer-user5.jpg'
import vlntr7 from '../../images/users/volunteer-user6.jpg'

const Hero3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="hero hero--style3">
            <div className="hero__map">
                <img src={map} alt="Gainioz Map" />
            </div>
            <div className="container container--custom">
                <div className="row align-items-center justify-content-between">
                    <div className="col-xl-5 col-lg-8 mb-30">
                        <div className="hero__content">
                            <span className="hero__title hero__title--small">Hope for</span>
                            <h1 className="hero__title hero__title--big">Humanity</h1>
                            <p className="hero__text">We help nonprofits from Afghanistan to Zimbabwe (and hundreds of places in between)
                                access the
                                tools, training,</p>
                            <Link className="btn btn--styleOne btn--primary it-btn" to="/donation-listing">
                                <span className="btn__text">join the journey</span>
                                <i className="fa-solid fa-heart btn__icon"></i>
                                <span className="it-btn__inner">
                                    <span className="it-btn__blobs">
                                        <span className="it-btn__blob"></span>
                                        <span className="it-btn__blob"></span>
                                        <span className="it-btn__blob"></span>
                                        <span className="it-btn__blob"></span>
                                    </span>
                                </span>
                                <svg className="it-btn__animation" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    <defs>
                                        <filter>
                                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo">
                                            </feColorMatrix>
                                            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                        </filter>
                                    </defs>
                                </svg>
                            </Link>
                            <div className="volunteerUser__profile hero__profile">
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} to="/home-3"><img src={vlntr2} alt="Gainioz" /></Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/home-3"><img src={vlntr3} alt="Gainioz" /></Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/home-3"><img src={vlntr4} alt="Gainioz" /></Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/home-3"><img src={vlntr5} alt="Gainioz" /></Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/home-3"><img src={vlntr6} alt="Gainioz" /></Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/home-3"><img src={vlntr7} alt="Gainioz" /></Link>
                                    </li>
                                </ul>
                            </div>
                            <span className="hero__instaTitle"><span>#</span> More than 2000+ People alreyday donate us</span>
                        </div>
                    </div>
                    <div className="col-xl-6 mb-30">
                        <figure className="hero__figure">
                            <img src={hero} alt="Gainioz Man" className="hero__figure__thumbs" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero3;