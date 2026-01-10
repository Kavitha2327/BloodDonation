import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';

// import './gallery.css';

import { useEffect } from 'react';
import axios from 'axios';

const DonationListing = (props) => {
    const port = process.env.REACT_APP_SERVER_PORT;
    

    const [activeFilter, setActiveFilter] = useState('all');

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    }

    const [filteredDonation, setFilteredDonation] = useState([]);

    useEffect(() => {
        const getEventData = async () => {
            try {
                const resultData = await axios.get(port + "gallery-images");
                // console.log(resultData.data);
    
                setFilteredDonation(resultData.data);
            } catch (error) {
                console.error("Error fetching event data: ", error);
            }
        };
        getEventData();
    }, []);

    const [activeIndex, setActiveIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    return (
        <Fragment>
            <Header hclass={'header--styleFour'} />
            <main className="main"> 
                <PageTitle pageTitle={'Our Gallery'} pagesub={'Gallery'} />
                <div className="about position-relative pt-125 pb-130">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="sectionTitle text-center mb-70">
                                    <span className="sectionTitle__small justify-content-center">
                                        <i className="fa-solid fa-heart btn__icon"></i>
                                        Moments of Impact
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
                                                    <div className="featureBlock__wrap rounded">
                                                        <figure className="featureBlock__thumb rounded overflow-hidden"
                                                        style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                                                            <img width={"400px"} height={"225px"} src={port + "Gallery/" + donation.filename} alt="" className='galleryImgMyClass'  style={{
                                                                width: '100%',
                                                                height: '100%',
                                                                objectFit: 'cover',
                                                                objectPosition: 'center',
                                                                cursor:"pointer"
                                                            }} />
                                                            <span className="featureBlock__hashLink__text">{donation.thumb}</span>
                                                        </figure>


                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        <div className="col-12">
                                            <div className="sectionButton text-center pt-15">
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
