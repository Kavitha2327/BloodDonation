import React from 'react'
import { Link } from 'react-router-dom'
import about1 from '../../images/man/about-thumb-1.jpg'

const About2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="about">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6 mb-30">
                        <div className="aboutContent aboutContent--style2">
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
                            <div className="aboutContent__buttons">
                                <Link onClick={ClickHandler} to="/donation-listing" className="btn btn--styleOne btn--secondary it-btn">
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
                                <Link onClick={ClickHandler} to="/volunteers" className="btn btn--styleOne btn--primary it-btn">
                                    <span className="btn__text">became a volenteer</span>
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
                    <div className="col-lg-5">
                        <div className="aboutThumb">
                            <div className="aboutThumb__text">
                                <span className="aboutThumb__text__title">..Since..</span>
                                <span className="aboutThumb__text__year">1998</span>
                            </div>
                            <figure className="aboutThumb__figure m-0">
                                <img src={about1} alt="Gainioz About" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;