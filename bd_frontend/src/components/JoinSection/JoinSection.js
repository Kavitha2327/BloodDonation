import React from 'react';
import { Link } from "react-router-dom";
import man from '../../images/man/joinMan.jpg'

const JoinSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="joinSection position-relative overflow-hidden">
            <div className="joinSectionThumb">
                <img src={man} alt="Gainioz" />
            </div>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-6">
                        <div className="joinContent">
                            <div className="row justify-content-end">
                                <div className="col-10">
                                    <div className="sectionTitle mb-20">
                                        <span className="sectionTitle__small justify-content-end">
                                            <i className="fa-solid fa-heart btn__icon"></i>
                                            join with us
                                        </span>
                                        <h2 className="sectionTitle__big">They are wait for your Help</h2>
                                    </div>
                                </div>
                            </div>
                            <p className="joinContent__text">The Charnyy Global aid network envisions a thriving and connected community,
                                one in which all of its
                                members have
                                dependable access to resources that enrich and empower lives.The Charnyy Global aid network envisions a
                                thriving and
                                connected community, one in which all of its members have dependable access to resources that enrich and
                                empower lives.</p>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default JoinSection;