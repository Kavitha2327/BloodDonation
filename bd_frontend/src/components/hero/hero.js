import React from 'react';
import { Link } from 'react-router-dom'
import hero from '../../images/man/man1.jpg'
import shape1 from '../../images/shapes/shapes1.svg'
import shape2 from '../../images/shapes/love-shape1.svg'
import shape3 from '../../images/shapes/love-shape2.svg'
import shape4 from '../../images/shapes/shapes3.svg'
import { Fade, Zoom } from "react-awesome-reveal";


const Hero = () => {

    return (
        <section className="hero hero--style1 overflow-hidden">
            <img src={shape1} alt="Gainioz" className="hero__shape" />
            <img src={shape2} alt="Gainioz" className="hero__shape hero__shape--one" />
            <img src={shape3} alt="Gainioz" className="hero__shape hero__shape--two" />
            <div className="container container--custom">
                <div className="row align-items-center justify-content-between">
                    <div className="col-xl-5 col-lg-8 mb-30">
                        <div className="hero__content">
                            <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                                <div>
                                    <span className="hero__title hero__title--small wow animate__fadeInUp animate__animated"
                                        data-wow-duration="1200ms" data-wow-delay="200ms">
                                        <i className="fa-solid fa-heart btn__icon"></i>We Beleve That
                                    </span>
                                </div>
                                <div>
                                    <h1 className="hero__title hero__title--big wow animate__fadeInUp animate__animated" data-wow-duration="1200ms" data-wow-delay="300ms">Do good For Others</h1>
                                </div>
                                <div>
                                    <p className="hero__text wow animate__fadeInUp animate__animated" data-wow-duration="1200ms" data-wow-delay="400ms">We help nonprofits from Afghanistan to Zimbabwe (and hundreds of places in between)
                                        access the
                                        tools, training,</p>
                                </div>
                                <div>
                                    <Link className="btn btn--styleOne btn--primary it-btn wow animate__fadeInUp animate__animated" data-wow-duration="1200ms" data-wow-delay="500ms" to="/donation-listing">
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
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="col-xl-6 mb-30">
                        <Zoom triggerOnce={'false'}>
                            <div>
                                <figure className="hero__figure wow animate__zoomIn animate__animated" data-wow-duration="1200ms" data-wow-delay="600ms">
                                    <img src={hero} alt="Gainioz Man" className="hero__figure__thumbs" />
                                    <img className="hero__figure__overlay" src={shape4} alt="Gainioz" />
                                </figure>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;