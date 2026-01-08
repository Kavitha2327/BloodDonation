import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import Donation from '../../api/donation';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';

const DonationListing = (props) => {

    const [activeFilter, setActiveFilter] = useState('all');

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    }

    const filteredDonation = activeFilter === 'all'
        ? Donation.slice(0, 9)
        : Donation.slice(0, 9).filter(donation => donation.category === activeFilter);

    const [activeIndex, setActiveIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    return (
        <Fragment>
            <Header hclass={'header--styleFour'} />
            <main className="main">
                <PageTitle pageTitle={'Events'} pagesub={'Events'} />
                <div className="about position-relative pt-125 pb-130">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="sectionTitle text-center mb-70">
                                    <span className="sectionTitle__small justify-content-center">
                                        <i className="fa-solid fa-heart btn__icon"></i>
                                        Donation Listing
                                    </span>
                                    <h2 className="sectionTitle__big">Introduce Our Campaigns</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="featureTab featureTab--style2">
                                    <div className="filter_elements_wrapper row gx-3">
                                        {filteredDonation.map((donation, index) => (
                                            <div className="col-lg-4 col-sm-6 mb-35" key={index}>
                                                <div className={`featureBlock ${activeIndex === index ? "featureBlock--active" : ""}`}
                                                    onMouseEnter={() => handleMouseEnter(index)} >
                                                    <div className="featureBlock__wrap">
                                                        <figure className="featureBlock__thumb" 
                                                            style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                                                            <Link onClick={ClickHandler} to={`/donation-details/${donation.slug}`} className="featureBlock__thumb__link">
                                                                <img 
                                                                    src={donation.sImg} 
                                                                    alt="Gainioz Featured Thumb" 
                                                                    style={{
                                                                        width: '100%',
                                                                        height: '100%',
                                                                        objectFit: 'cover',
                                                                        objectPosition: 'center'
                                                                    }}
                                                                />
                                                            </Link>
                                                            <Link onClick={ClickHandler} to={`/donation-details/${donation.slug}`} className="featureBlock__hashLink">
                                                                <span className="featureBlock__hashLink__text">{donation.thumb}</span>
                                                            </Link>
                                                        </figure>
                                                        <div className="featureBlock__content">
                                                            <h3 className="featureBlock__heading">
                                                                <Link onClick={ClickHandler} to={`/donation-details/${donation.slug}`} className="featureBlock__heading__link">
                                                                    {donation.title}
                                                                </Link>
                                                            </h3>
                                                            <p className="featureBlock__text" style={{ fontWeight: 600, color: "black", marginBottom: "0.2rem" }}>
                                                                Venue: {donation.venue}
                                                            </p>
                                                            <p className="featureBlock__text" style={{ fontWeight: 600, color: "black" }}>
                                                                Date: {donation.date}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        <div className="col-12">
                                            <div className="sectionButton text-center pt-15">
                                                <Link onClick={ClickHandler} className="btn btn--styleOne btn--primary it-btn" to="/blooddonationadmin/volunteers">
                                                    <span className="btn__text">see all Volunteers</span>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default DonationListing;
