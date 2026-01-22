import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import Donation from '../../api/donation'
import { Link } from 'react-router-dom'
import FeaturesSection3 from '../FeaturesSection3/FeaturesSection3';

import bloodImage from './BloodImage.png'


import axios from 'axios';
import moment from 'moment';

const DonationListSection2 = (props) => {

    const port = process.env.REACT_APP_SERVER_PORT;


    const [Donation, SetDonation] = useState([]);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }


        const fun = async () => {
            try {
                const response = await axios.get(port + "get-events");
                //console.log(response.data);
                console.log(response.data[0].Colleges[0].bloodBanks[0].Venue)
                SetDonation(response.data);
            }
            catch (error) {
                console.error('Error fetching event data: ', error);
            }
        }
        fun();



    }, []);

    const [activeIndex, setActiveIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="featureArea__main cc-slide-wrap">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="sectionTitle mb-65">
                            <span className="sectionTitle__small">
                                <i className="fa-solid fa-heart btn__icon"></i>
                                need your help
                            </span>
                            <h2 className="sectionTitle__big">Featured Campaigns</h2>
                        </div>
                    </div>

                </div>
                <div className="cc-sliderStyle1 swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={15}
                                slidesPerView={1}
                                loop={false}
                                speed={1800}
                                parallax={true}
                                ref={swiperRef}
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                breakpoints={{
                                    576: {
                                        slidesPerView: 2,
                                    },
                                    1025: {
                                        slidesPerView: 3,
                                    },
                                }}
                            >
                                {Donation.length > 0 && Donation.slice(0, Math.min(3, Donation.length)).map((donation, index) => (
                                    <SwiperSlide key={index}>
                                        <div className={`featureBlock ${activeIndex === index ? "featureBlock--active" : ""}`}
                                            onMouseEnter={() => handleMouseEnter(index)} >
                                            <div className="featureBlock__wrap hoverEffect3">
                                                {/* <figure className="featureBlock__thumb">
                                                    <Link to={`#`} className="featureBlock__thumb__link">
                                                        <img src={port + "Events/" + donation.filename} alt="" />
                                                    </Link>
                                                    <Link  to={`#`} className="featureBlock__hashLink">
                                                        <span className="featureBlock__hashLink__text">{donation.thumb}</span>
                                                    </Link>
                                                </figure> */}
                                                <figure className="featureBlock__thumb" style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                                                    <Link to={`/blooddonation/register`} className="featureBlock__thumb__link">
                                                        <img src={ bloodImage /* port + "Events/" + donation.filename */} alt="" style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            objectPosition: 'center',
                                                            cursor: "pointer"
                                                        }} />
                                                    </Link>
                                                    <Link to={`#`} className="featureBlock__hashLink">
                                                        <span className="featureBlock__hashLink__text">{donation.thumb}</span>
                                                    </Link>
                                                </figure>
                                                <div className="featureBlock__content">
                                                    <h3 className="featureBlock__heading">
                                                        <Link to={`/blooddonation/register`} className="featureBlock__heading__link" >
                                                            {donation.EventName}
                                                        </Link>
                                                    </h3>
                                                    {console.log(donation.place)}
                                                    <p className="featureBlock__text" style={{ fontWeight: 600, color: "black", marginBottom: "0.2rem" }}>
                                                     {/*  Venu:  {donation.Colleges[0].bloodBanks[0].venu} */}
                                                      Venu : {donation.Colleges[0].bloodBanks[0].Venue}
                                                    </p>
                                                    <p className="featureBlock__text" style={{ fontWeight: 600, color: "black" }}>
                                                        Date: {moment(donation.Date).format("DD-MM-YYYY")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div style={{ width: "100%", justifyContent: "flex-end", display: "flex" }}>
                                <Link onClick={ClickHandler} className="btn btn--styleOne btn--primary it-btn wow animate__fadeInUp animate__animated" data-wow-duration="1200ms" data-wow-delay="500ms" to="/blooddonation/events">
                                    <span className="btn__text">View more</span>
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
                            <FeaturesSection3 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DonationListSection2;
