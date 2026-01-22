import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import Donation from '../../api/donation'
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import { useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

import bloodImage from './BloodImage.png'


const DonationListing = (props) => {

    const port = process.env.REACT_APP_SERVER_PORT;

    const [activeFilter, setActiveFilter] = useState('all');

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    }

    const [filteredDonation, setFilteredDonation] = useState([]); // initialize as an array

    useEffect(() => {
        const getEventData = async () => {
            try {
                const resultData = await axios.get(port + "get-events");
                console.log(resultData.data);
    
                setFilteredDonation(resultData.data);
            } catch (error) {
                console.error("Error fetching event data: ", error);
            }
        };
        getEventData();
    }, []);
    

    // const filteredDonation = activeFilter === 'all'
    //     ? Donation.slice(0, 9)
    //     : Donation.slice(0, 9).filter(donation => donation.category === activeFilter);


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
                                        Our Mission in Action
                                    </span>
                                    <h2 className="sectionTitle__big">Introducing Our Campaigns</h2>
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
                                                    <div className="featureBlock__wrap hoverEffect2">
                                                        <figure className="featureBlock__thumb" style = {{ height: '200px', width: '100%', overflow: 'hidden' }}>
                                                            <Link  to={`/blooddonation/register`} className="featureBlock__thumb__link">
                                                                <img src={ bloodImage /*port + "Events/" + donation.filename*/} alt="" style={{
                                                                width: '100%',
                                                                height: '100%',
                                                                objectFit: 'cover',
                                                                objectPosition: 'center',
                                                                cursor:"pointer"
                                                            }}  />
                                                            </Link>
                                                            <Link to={`#`} className="featureBlock__hashLink">
                                                                <span className="featureBlock__hashLink__text">{donation.thumb}</span>
                                                            </Link>
                                                        </figure>



                                                        <div className="featureBlock__content">
                                                            <h3 className="featureBlock__heading">
                                                                <Link  to={`/blooddonation/register`} className="featureBlock__heading__link">
                                                                    {donation.EventName}
                                                                </Link>
                                                            </h3>
                                                            <p className="featureBlock__text" style={{fontWeight: 600, color: "black", marginBottom: "0.2rem"}}>
                                                                Venue: {donation.Colleges[0].bloodBanks[0].Venue}
                                                            </p>
                                                            <p className="featureBlock__text" style={{fontWeight: 600, color: "black"}}>
                                                                Date:{moment(donation.Date).format("DD-MM-YYYY")}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    
                                    
                                                </div>
                                            </div>
                                        ))}

                                        <div className="col-12">
                                            <div className="sectionButton text-center pt-15">
                                                <Link onClick={ClickHandler} className="btn btn--styleOne btn--primary it-btn" to="/blooddonation/gallery">
                                                    <span className="btn__text">Visit our gallery</span>
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
    )
};

export default DonationListing;
