import React from 'react';
import map from '../../images/map/map-thumb.png'
import tImg1 from '../../images/users/review-user-1.jpg'
import tImg2 from '../../images/users/review-user-2.jpg'
import tImg3 from '../../images/users/review-user-3.jpg'
import tImg4 from '../../images/users/review-user-4.jpg'


const testimonial = [
    {
        id: '01',
        tImg: tImg1,
        Title: 'Amazing services',
        Des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,",
        Name: 'Jane Cooper',
        sub: 'Founder & Co (HTJ)',
    },
    {
        id: '02',
        tImg: tImg2,
        Title: 'We Are Satisfied',
        Des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,",
        Name: 'Cameron Williamson',
        sub: 'Tech Startup Founder',
    },
    {
        id: '03',
        tImg: tImg3,
        Title: 'Fast Respond',
        Des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,.",
        Name: 'Bohdan Maksym',
        sub: 'Monprofit Director',
    },
    {
        id: '04',
        tImg: tImg4,
        Title: 'We Are Satisfied',
        Des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,",
        Name: 'Michel johnson',
        sub: 'Tech Startup Founder',
    },
]

const Testimonial3 = () => {

    return (

        <section className="review pt-110 pb-60 position-relative overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="sectionTitle mb-65">
                            <span className="sectionTitle__small justify-content-start">
                                <i className="fa-solid fa-heart btn__icon"></i>
                                Testimonial
                            </span>
                            <h2 className="sectionTitle__big">People Say about our foundation</h2>
                        </div>
                        <div className="reviewMap mb-50">
                            <img src={map} alt="Gainioz Map" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            {testimonial.map((testimonial, tsm) => (
                                <div className="col-lg-6" key={tsm}>
                                    <div className="reviewblock reviewblock--style2">
                                        <div className="reviewblock__content">
                                            <div className="reviewblock__author">
                                                <div className="reviewblock__authorImage">
                                                    <img src={testimonial.tImg} alt="Gainioz Reviewer" />
                                                </div>
                                                <h3 className="reviewblock__authorName">{testimonial.Name}</h3>
                                                <p className="reviewblock__authorSpeech">{testimonial.Des}</p>
                                                <span className="reviewblock__authorDes">{testimonial.sub}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial3;