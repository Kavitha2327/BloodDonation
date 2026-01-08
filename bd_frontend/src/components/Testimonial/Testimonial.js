import { useRef, useEffect } from 'react';
import { Navigation } from 'swiper';
import tImg1 from '../../images/auth/reviewAuth1.png'
import tImg2 from '../../images/auth/reviewAuth2.png'
import tImg3 from '../../images/auth/reviewAuth3.png'
import tImg4 from '../../images/auth/reviewAuth4.png'
import tImg5 from '../../images/auth/reviewAuth5.png'
import shape1 from '../../images/shapes/testi-shape1.svg'
import shape2 from '../../images/shapes/testi-shape2.svg'
import shape3 from '../../images/shapes/testi-shape4.svg'
import man from '../../images/man/testi-man1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import MissionVision from '../MissionVision/MissionVision';



const testimonial = [
    {
        id: '01',
        tImg: tImg1,
        Title: 'Amazing services',
        Des: "I ah4preciate your amazing services and professional staff for all your hard work and creative thinking! It was fun, and I hope to work with you again soon",
        Name: 'Roman Dymtro',
        sub: 'Director of Marketing',
    },
    {
        id: '02',
        tImg: tImg1,
        Title: 'We Are Satisfied',
        Des: "I ah4preciate your amazing services and professional staff for all your hard work and creative thinking! It was fun, and I hope to work with you again soon",
        Name: 'Michel johnson',
        sub: 'Tech Startup Founder',
    },
    {
        id: '03',
        tImg: tImg1,
        Title: 'Fast Respond',
        Des: "I ah4preciate your amazing services and professional staff for all your hard work and creative thinking! It was fun, and I hope to work with you again soon",
        Name: 'Bohdan Maksym',
        sub: 'Monprofit Director',
    },
]

const Testimonial = () => {

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

        <section className="review pt-110 pb-100 position-relative overflow-hidden cc-slide-wrap3">
            <img src={shape1} alt="Gainioz Shape" className="review__shape review__shape--one" />
            <img src={shape2} alt="Gainioz Shape" className="review__shape review__shape--two" />
            <div className="mask mask--review position-absolute">
                <img src={man} alt="Gainioz Shape" className="mask__thumb" />
                <img className="mask__overlay" src={shape3} alt="Gainioz Shape" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <div className="sectionTitle text-center mb-65">
                            <span className="sectionTitle__small justify-content-center">
                                <i className="fa-solid fa-heart btn__icon"></i>
                                Testimonial
                            </span>
                            <h2 className="sectionTitle__big">People Say about our foundation</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="review__box mb-30">
                            <div className="sliderNav sliderNav--style2">
                                <span className="sliderNav__btn btn-prev" tabIndex="0" role="button" ref={prevRef}>
                                    <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.75 9.40625L6.375 8.78125C6.5 8.625 6.5 8.40625 6.34375 8.25L3.84375 5.8125H14.625C14.8125 5.8125 15 5.65625 15 5.4375V4.5625C15 4.375 14.8125 4.1875 14.625 4.1875H3.84375L6.34375 1.78125C6.5 1.625 6.5 1.40625 6.375 1.25L5.75 0.625C5.59375 0.5 5.375 0.5 5.21875 0.625L1.09375 4.75C0.96875 4.90625 0.96875 5.125 1.09375 5.28125L5.21875 9.40625C5.375 9.53125 5.59375 9.53125 5.75 9.40625Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </span>
                                <span className="sliderNav__btn btn-next" tabIndex="0" role="button" ref={nextRef}>
                                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.21875 0.625L8.59375 1.25C8.46875 1.40625 8.46875 1.625 8.625 1.78125L11.125 4.1875H0.375C0.15625 4.1875 0 4.375 0 4.5625V5.4375C0 5.65625 0.15625 5.8125 0.375 5.8125H11.125L8.625 8.25C8.46875 8.40625 8.46875 8.625 8.59375 8.78125L9.21875 9.40625C9.375 9.53125 9.59375 9.53125 9.75 9.40625L13.875 5.28125C14 5.125 14 4.90625 13.875 4.75L9.75 0.625C9.59375 0.5 9.375 0.5 9.21875 0.625Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </span>
                            </div>
                            <ul className="review__box__images">
                                <li><img src={tImg2} alt="Gainioz Reviewer" /></li>
                                <li><img src={tImg3} alt="Gainioz Reviewer" /></li>
                                <li><img src={tImg4} alt="Gainioz Reviewer" /></li>
                                <li><img src={tImg5} alt="Gainioz Reviewer" /></li>
                            </ul>
                            <div className="reviewblock text-center">
                                <span className="reviewblock__quoteIcon__two">
                                    <svg width="300" height="263" viewBox="0 0 300 263" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M271.875 131.5H225V94C225 73.4922 241.406 56.5 262.5 56.5H267.188C274.805 56.5 281.25 50.6406 281.25 42.4375V14.3125C281.25 6.69531 274.805 0.25 267.188 0.25H262.5C210.352 0.25 168.75 42.4375 168.75 94V234.625C168.75 250.445 181.055 262.75 196.875 262.75H271.875C287.109 262.75 300 250.445 300 234.625V159.625C300 144.391 287.109 131.5 271.875 131.5ZM103.125 131.5H56.25V94C56.25 73.4922 72.6562 56.5 93.75 56.5H98.4375C106.055 56.5 112.5 50.6406 112.5 42.4375V14.3125C112.5 6.69531 106.055 0.25 98.4375 0.25H93.75C41.6016 0.25 0 42.4375 0 94V234.625C0 250.445 12.3047 262.75 28.125 262.75H103.125C118.359 262.75 131.25 250.445 131.25 234.625V159.625C131.25 144.391 118.359 131.5 103.125 131.5Z"
                                            fill="#F8F7F7" />
                                    </svg>
                                </span>
                                <div className="testi-slider-active1 swiper">
                                    <Swiper
                                        // install Swiper modules
                                        modules={[Navigation]}
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        loop={true}
                                        speed={1800}
                                        parallax={true}
                                        ref={swiperRef}
                                        onBeforeInit={(swiper) => {
                                            swiperRef.current = swiper;
                                        }}
                                    >
                                        {testimonial.map((testimonial, tsm) => (
                                            <SwiperSlide key={tsm}>
                                                <div className="reviewblock__content">
                                                    <img className="reviewblock__author__image" src={testimonial.tImg} alt="Gainioz Reviewer" />
                                                    <span className="reviewblock__quoteIcon__one">
                                                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M21.75 10.9951H18V7.99512C18 6.35449 19.3125 4.99512 21 4.99512H21.375C21.9844 4.99512 22.5 4.52637 22.5 3.87012V1.62012C22.5 1.01074 21.9844 0.495117 21.375 0.495117H21C16.8281 0.495117 13.5 3.87012 13.5 7.99512V19.2451C13.5 20.5107 14.4844 21.4951 15.75 21.4951H21.75C22.9688 21.4951 24 20.5107 24 19.2451V13.2451C24 12.0264 22.9688 10.9951 21.75 10.9951ZM8.25 10.9951H4.5V7.99512C4.5 6.35449 5.8125 4.99512 7.5 4.99512H7.875C8.48438 4.99512 9 4.52637 9 3.87012V1.62012C9 1.01074 8.48438 0.495117 7.875 0.495117H7.5C3.32812 0.495117 0 3.87012 0 7.99512V19.2451C0 20.5107 0.984375 21.4951 2.25 21.4951H8.25C9.46875 21.4951 10.5 20.5107 10.5 19.2451V13.2451C10.5 12.0264 9.46875 10.9951 8.25 10.9951Z"
                                                                fill="#EB9309" />
                                                        </svg>
                                                    </span>
                                                    <h4 className="reviewblock__qotes">“{testimonial.Des}“</h4>
                                                    <span className="reviewblock__author__name">{testimonial.Name}</span>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MissionVision />

        </section>
    );
}

export default Testimonial;