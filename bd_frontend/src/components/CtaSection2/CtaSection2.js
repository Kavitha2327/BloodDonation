import React from 'react';
import { Link } from "react-router-dom";

const CtaSection2 = (props) => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  return (
    <section className="donation pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="liveDonation">
              <div className="liveDonation__wrapper">
                <div className="row align-items-end">
                  <div className="col-lg-8">
                    <div className="liveDonationTitle">
                      <span className="liveDonationTitle__small"><span></span>LIve Donation</span>
                      <h2 className="liveDonationTitle__heading">Donation For Food</h2>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="liveDonation__button">
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
                <div className="row">
                  <div className="col-12">
                    <div className="featureBlock__donation">
                      <div className="featureBlock__donation__progress">
                        <div className="featureBlock__donation__bar">
                          <span className="featureBlock__donation__text skill-bar" data-width="80%"
                            style={{ width: '80%' }}>80%</span>
                          <div className="featureBlock__donation__line">
                            <span className="skill-bars">
                              <span className="skill-bars__line skill-bar" data-width="80%" style={{ width: '80%' }}></span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="featureBlock__eqn">
                        <div className="featureBlock__eqn__block">
                          <span className="featureBlock__eqn__title">our goal</span>
                          <span className="featureBlock__eqn__price">$13.0000</span>
                        </div>
                        <div className="featureBlock__eqn__block">
                          <span className="featureBlock__eqn__title">Raised</span>
                          <span className="featureBlock__eqn__price">$22.9098</span>
                        </div>
                        <div className="featureBlock__eqn__block">
                          <span className="featureBlock__eqn__title">to go</span>
                          <span className="featureBlock__eqn__price">$38,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection2;