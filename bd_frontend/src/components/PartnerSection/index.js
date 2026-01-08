import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pimg1 from '../../images/sponsors/sponsors1.png'
import pimg2 from '../../images/sponsors/sponsors2.png'
import pimg3 from '../../images/sponsors/sponsors3.png'
import pimg4 from '../../images/sponsors/sponsors4.png'
import pimg5 from '../../images/sponsors/sponsors5.png'
import pimg6 from '../../images/sponsors/sponsors6.png'

const partners = [
    {
        pImg: pimg1,
    },
    {
        pImg: pimg2,
    },
    {
        pImg: pimg3,
    },
    {
        pImg: pimg4,
    },
    {
        pImg: pimg5,
    },
    {
        pImg: pimg6,
    },
    {
        pImg: pimg2,
    },
]

var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,

    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
};



const PartnerSection = (props) => {

    return (
        <section className={`sponsors pb-60 ${props.pClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sponsorsTitle">
                            <span className="sponsorsTitle__line"></span>
                            <h2 className="sponsorsTitle__heading text-uppercase">“ Become Support Partner ”</h2>
                            <span className="sponsorsTitle__line"></span>
                        </div>
                    </div>
                </div>
                <div className="sponsor-slider-active">
                    <Slider {...settings}>
                        {partners.map((partner, pitem) => (
                            <div className="sponsorsItem mb-40" key={pitem}>
                                <img src={partner.pImg} alt="Techco - Client Logo" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;