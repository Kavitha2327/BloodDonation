import React from 'react'
import { Link } from 'react-router-dom'
import about1 from '../../images/girls/girls1.jpg'
import mask from '../../images/shapes/mask-shape2.svg'

import shape1 from '../../images/shapes/love-shape3.svg'
import shape2 from '../../images/shapes/love-shape4.svg'
import shape3 from '../../images/shapes/love-shape5.svg'
import shape4 from '../../images/shapes/mask-shape3.svg'

import FeaturesSection from '../FeaturesSection/FeaturesSection';

const About = (props) => {


    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="about">
            <img className="about__shape about__shape--one" src={shape1} alt="Gainioz Shape" />
            <img className="about__shape about__shape--two" src={shape2} alt="Gainioz Shape" />
            <img className="about__shape about__shape--three" src={shape3} alt="Gainioz Shape" />
            <div className="aboutArea aboutArea--padding position-relative">
                <img className="mask-aboutBack wow animate__fadeInLeft animate__animated" data-wow-duration="1200ms" data-wow-delay="300ms" src={shape4} alt="Gainioz Shape" />
                <div className="mask mask--about wow animate__fadeInLeft animate__animated" data-wow-duration="1200ms" data-wow-delay="200ms">
                    <img src={about1} alt="Gainioz Shape" className="mask__thumb" />
                    <img className="mask__overlay" src={mask} alt="Gainioz Shape" />
                </div>
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-6 mb-30">
                            <div className="aboutContent">
                                <div className="sectionTitle mb-20">
                                    <span className="sectionTitle__small">
                                        <i className="fa-solid fa-heart btn__icon"></i>
                                        about foundation
                                    </span>
                                    <h2 className="sectionTitle__big">what have we done with
                                        your help</h2>
                                </div>
                                <p className="aboutContent__text">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                    alteration in some form,
                                    by injected humour, or randomised words which don't look even slightly believable. If you are going to
                                    use a passage Lorem of
                                    Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle There are many
                                    variations of
                                    passages
                                </p>
                                <span className="aboutContent__quote">join our Action and everyone can help</span>
                                <Link onClick={ClickHandler} className="btn btn--styleOne btn--secondary it-btn" to="/donation-listing">
                                    <span className="btn__text">donate now</span>
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
                                                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10">
                                                </feGaussianBlur>
                                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo">
                                                </feColorMatrix>
                                                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                            </filter>
                                        </defs>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FeaturesSection/>

        </section>
    )
}

export default About;