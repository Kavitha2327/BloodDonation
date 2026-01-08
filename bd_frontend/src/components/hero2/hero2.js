import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import hero from '../../images/illus/hero-bg-thumb-2.png'

const Hero2 = (props) => {

    return (

        <section className="hero hero--style2">
            <div className="container container--custom">
                <div className="row align-items-center justify-content-between">
                    <div className="col-12">
                        <div className="hero__content text-center">
                            <span className="hero__title hero__title--small">Give your hand</span>
                            <h1 className="hero__title hero__title--big">To The homeless</h1>
                            <div className="hero__topDown">
                                <AnchorLink href='#feature' className="btn btn--styleOne btn--icon it-btn">
                                    <svg className="btn__icon" width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.869141 8.70508L1.45508 8.11914C1.60156 8.00195 1.80664 8.00195 1.95312 8.14844L4.23828 10.4922V0.414062C4.23828 0.208984 4.38477 0.0625 4.58984 0.0625H5.41016C5.58594 0.0625 5.76172 0.208984 5.76172 0.414062V10.4922L8.01758 8.14844C8.16406 8.00195 8.36914 8.00195 8.51562 8.11914L9.10156 8.70508C9.21875 8.85156 9.21875 9.05664 9.10156 9.20312L5.23438 13.0703C5.08789 13.1875 4.88281 13.1875 4.73633 13.0703L0.869141 9.20312C0.751953 9.05664 0.751953 8.85156 0.869141 8.70508Z" fill="#60646B" />
                                    </svg>
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
                                </AnchorLink>
                                <span className="hero__topDown__text">Scrool Down</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <figure className="hero__figure hero__figure--style2">
                            <img src={hero} alt="Gainioz Man" className="hero__figure__thumbs" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero2;