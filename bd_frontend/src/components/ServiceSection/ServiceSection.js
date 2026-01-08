import React from 'react';
import { useRef, useEffect } from 'react';
import Services from '../../api/service'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
import PartnerSection from '../PartnerSection';


const ServiceSection = (props) => {

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


    return (

        <section className="feature feature--bg cc-slide-wrap2 pt-130 pb-75">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-55">
                        <div className="sectionTitle">
                            <span className="sectionTitle__small">
                                <i className="fa-solid fa-heart btn__icon"></i>
                                who we are
                            </span>
                            <h2 className="sectionTitle__big">Make a Difference</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-55">
                        <div className="sliderNav sliderNav--style1">
                            <span className="sliderNav__btn btn-prev" tabIndex="0" role="button" ref={prevRef}>
                                <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.75 9.40625L6.375 8.78125C6.5 8.625 6.5 8.40625 6.34375 8.25L3.84375 5.8125H14.625C14.8125 5.8125 15 5.65625 15 5.4375V4.5625C15 4.375 14.8125 4.1875 14.625 4.1875H3.84375L6.34375 1.78125C6.5 1.625 6.5 1.40625 6.375 1.25L5.75 0.625C5.59375 0.5 5.375 0.5 5.21875 0.625L1.09375 4.75C0.96875 4.90625 0.96875 5.125 1.09375 5.28125L5.21875 9.40625C5.375 9.53125 5.59375 9.53125 5.75 9.40625Z"
                                        fill="white"></path>
                                </svg>
                            </span>
                            <span className="sliderNav__btn btn-next" tabIndex="0" ref={nextRef}>
                                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.21875 0.625L8.59375 1.25C8.46875 1.40625 8.46875 1.625 8.625 1.78125L11.125 4.1875H0.375C0.15625 4.1875 0 4.375 0 4.5625V5.4375C0 5.65625 0.15625 5.8125 0.375 5.8125H11.125L8.625 8.25C8.46875 8.40625 8.46875 8.625 8.59375 8.78125L9.21875 9.40625C9.375 9.53125 9.59375 9.53125 9.75 9.40625L13.875 5.28125C14 5.125 14 4.90625 13.875 4.75L9.75 0.625C9.59375 0.5 9.375 0.5 9.21875 0.625Z"
                                        fill="white"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="featureActive">
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
                                    1200: {
                                        slidesPerView: 4,
                                    },
                                }}
                            >
                                {Services.slice(3, 8).map((service, srv) => (
                                    <SwiperSlide key={srv}>
                                        <div className="keyFeatureBlock keyFeatureBlock--style3 mb-30">
                                            <div className="keyFeatureBlock__left">
                                                <span className="keyFeatureBlock__icon">
                                                    <img src={service.icon} alt="Gainioz Feature_Icon" />
                                                </span>
                                            </div>
                                            <div className="keyFeatureBlock__content">
                                                <h3 className="keyFeatureBlock__heading">
                                                    <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="keyFeatureBlock__heading__link">
                                                        {service.title}
                                                    </Link>
                                                </h3>
                                                <p className="keyFeatureBlock__text">{service.description}</p>
                                                <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="keyFeatureBlock__link">
                                                    <svg width="61" height="16" viewBox="0 0 61 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M60.7071 8.70711C61.0976 8.31658 61.0976 7.68342 60.7071 7.29289L54.3432 0.928932C53.9526 0.538408 53.3195 0.538408 52.9289 0.928932C52.5384 1.31946 52.5384 1.95262 52.9289 2.34315L58.5858 8L52.9289 13.6569C52.5384 14.0474 52.5384 14.6805 52.9289 15.0711C53.3195 15.4616 53.9526 15.4616 54.3432 15.0711L60.7071 8.70711ZM0 9H60V7H0V9Z" fill="#BBBBBB" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <PartnerSection pClass={'pb-0 pt-80'}/>
        </section>
    );
}

export default ServiceSection;