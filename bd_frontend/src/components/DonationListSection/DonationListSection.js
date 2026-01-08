import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Donation from '../../api/donation'
import { Link } from 'react-router-dom'

const DonationListSection = (props) => {

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
                    <div className="col-lg-6">
                        <div className="sliderNav sliderNav--style1 mb-65">
                            <span className="sliderNav__btn btn-prev" ref={prevRef}>
                                <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.75 9.40625L6.375 8.78125C6.5 8.625 6.5 8.40625 6.34375 8.25L3.84375 5.8125H14.625C14.8125 5.8125 15 5.65625 15 5.4375V4.5625C15 4.375 14.8125 4.1875 14.625 4.1875H3.84375L6.34375 1.78125C6.5 1.625 6.5 1.40625 6.375 1.25L5.75 0.625C5.59375 0.5 5.375 0.5 5.21875 0.625L1.09375 4.75C0.96875 4.90625 0.96875 5.125 1.09375 5.28125L5.21875 9.40625C5.375 9.53125 5.59375 9.53125 5.75 9.40625Z"
                                        fill="white" />
                                </svg>
                            </span>
                            <span className="sliderNav__btn btn-next" ref={nextRef}>
                                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.21875 0.625L8.59375 1.25C8.46875 1.40625 8.46875 1.625 8.625 1.78125L11.125 4.1875H0.375C0.15625 4.1875 0 4.375 0 4.5625V5.4375C0 5.65625 0.15625 5.8125 0.375 5.8125H11.125L8.625 8.25C8.46875 8.40625 8.46875 8.625 8.59375 8.78125L9.21875 9.40625C9.375 9.53125 9.59375 9.53125 9.75 9.40625L13.875 5.28125C14 5.125 14 4.90625 13.875 4.75L9.75 0.625C9.59375 0.5 9.375 0.5 9.21875 0.625Z"
                                        fill="white" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="cc-sliderStyle1 swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation]}
                                spaceBetween={15}
                                slidesPerView={1}
                                loop={true}
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
                                {Donation.map((donation, index) => (
                                    <SwiperSlide key={index}>
                                        <div className={`featureBlock ${activeIndex === index ? "featureBlock--active" : ""}`}
                                            onMouseEnter={() => handleMouseEnter(index)} >
                                            <div className="featureBlock__wrap">
                                                <figure className="featureBlock__thumb">
                                                    <Link onClick={ClickHandler} to={`/donation-details/${donation.slug}`} className="featureBlock__thumb__link">
                                                        <img src={donation.sImg} alt="Gainioz Featured Thumb" />
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
                                                    <p className="featureBlock__text">
                                                        We help local nonprofits access the funding, training, and support they need to become more
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="featureBlock__donation">
                                                <div className="featureBlock__donation__progress">
                                                    <div className="featureBlock__donation__bar">
                                                        <span className="featureBlock__donation__text skill-bar" style={{ width: donation.progress }}>{donation.progress}</span>
                                                        <div className="featureBlock__donation__line">
                                                            <span className="skill-bars">
                                                                <span className="skill-bars__line skill-bar" style={{ width: donation.progress }}></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="featureBlock__eqn">
                                                    <div className="featureBlock__eqn__block">
                                                        <span className="featureBlock__eqn__title">our goal</span>
                                                        <span className="featureBlock__eqn__price">{donation.goal}</span>
                                                    </div>
                                                    <div className="featureBlock__eqn__block">
                                                        <span className="featureBlock__eqn__title">Raised</span>
                                                        <span className="featureBlock__eqn__price">{donation.raised}</span>
                                                    </div>
                                                    <div className="featureBlock__eqn__block">
                                                        <span className="featureBlock__eqn__title">to go</span>
                                                        <span className="featureBlock__eqn__price">{donation.togo}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DonationListSection;