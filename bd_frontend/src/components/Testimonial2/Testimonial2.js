import { Pagination } from 'swiper';
import tImg1 from '../../images/auth/reviewAuth6.png'
import tImg2 from '../../images/auth/reviewAuth7.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



const testimonial = [
    {
        id: '01',
        tImg: tImg1,
        Title: 'Amazing services',
        Des: "Compared to the other organizations in the world I have seen that the service Lovecon provides is safe and their service much better than the other care organizations in the world",
        Name: 'Roman Dymtro',
        sub: 'Director of Marketing',
    },
    {
        id: '02',
        tImg: tImg2,
        Title: 'We Are Satisfied',
        Des: "They are giving their service 24/7 to help the people who are needy. Once I informed them that A man was in trouble. They helped that man within 1 hr and solved that problem and I was impressed",
        Name: 'Michel johnson',
        sub: 'Tech Startup Founder',
    },
    {
        id: '03',
        tImg: tImg1,
        Title: 'Fast Respond',
        Des: "Compared to the other organizations in the world I have seen that the service Lovecon provides is safe and their service much better than the other care organizations in the world.",
        Name: 'Bohdan Maksym',
        sub: 'Monprofit Director',
    },
    {
        id: '02',
        tImg: tImg2,
        Title: 'We Are Satisfied',
        Des: "They are giving their service 24/7 to help the people who are needy. Once I informed them that A man was in trouble. They helped that man within 1 hr and solved that problem and I was impressed",
        Name: 'Michel johnson',
        sub: 'Tech Startup Founder',
    },
]

const Testimonial2 = () => {

    return (

        <section className="review review--layout2 position-relative overflow-hidden">
            <div className="container-fluid p-0">
                <div className="testi-slider-active2 swiper row g-0">

                    <Swiper
                        // install Swiper modules
                        modules={[Pagination]}
                        spaceBetween={0}
                        pagination={{ clickable: true }}
                        loop={true}
                        speed={1800}
                        parallax={true}
                        breakpoints={{
                            991: {
                                slidesPerView: 1,
                            },
                            1025: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {testimonial.map((testimonial, tsm) => (
                            <SwiperSlide key={tsm}>
                                <div className="review__box mb-30">
                                    <div className="reviewblock reviewblock--style3 text-center">
                                        <div className="reviewblock__content">
                                            <div className="reviewblock__author">
                                                <img className="reviewblock__author__image" src={testimonial.tImg} alt="Gainioz Reviewer" />
                                                <span className="reviewblock__author__name d-block mb-25">{testimonial.Name}</span>
                                            </div>
                                            <span className="reviewblock__quoteIcon__one">
                                                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M21.75 10.9951H18V7.99512C18 6.35449 19.3125 4.99512 21 4.99512H21.375C21.9844 4.99512 22.5 4.52637 22.5 3.87012V1.62012C22.5 1.01074 21.9844 0.495117 21.375 0.495117H21C16.8281 0.495117 13.5 3.87012 13.5 7.99512V19.2451C13.5 20.5107 14.4844 21.4951 15.75 21.4951H21.75C22.9688 21.4951 24 20.5107 24 19.2451V13.2451C24 12.0264 22.9688 10.9951 21.75 10.9951ZM8.25 10.9951H4.5V7.99512C4.5 6.35449 5.8125 4.99512 7.5 4.99512H7.875C8.48438 4.99512 9 4.52637 9 3.87012V1.62012C9 1.01074 8.48438 0.495117 7.875 0.495117H7.5C3.32812 0.495117 0 3.87012 0 7.99512V19.2451C0 20.5107 0.984375 21.4951 2.25 21.4951H8.25C9.46875 21.4951 10.5 20.5107 10.5 19.2451V13.2451C10.5 12.0264 9.46875 10.9951 8.25 10.9951Z"
                                                        fill="#EB9309" />
                                                </svg>
                                            </span>
                                            <h4 className="reviewblock__qotes">“{testimonial.Des}“</h4>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Testimonial2;