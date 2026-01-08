import React, { useState } from "react";
import Stories from '../../api/stories'
import { Link } from "react-router-dom";
import shape from '../../images/shapes/portfolio-shape-2.svg'

const StoriesSection2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [activeIndex, setActiveIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    return (

        <section className="portfolio">
            <div className="container-fluid p-0 overflow-hidden">
                <div className="row g-0">
                    {Stories.slice(3, 6).map((stories, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                            <div className={`portfolioBlock portfolioBlock--style2 position-relative ${activeIndex === index ? "portfolioBlock--active" : ""}`}
                                onMouseEnter={() => handleMouseEnter(index)}  >
                                <figure className="portfolioBlock__figure">
                                    <img className="portfolioBlock__figure__thumb" src={stories.pImg} alt="Gainioz Portfolio" />
                                    <div className="portfolioBlock__figure__shape">
                                        <img src={shape} alt="" />
                                        <Link onClick={ClickHandler} to={`/story-details/${stories.slug}`} className="portfolioBlock__more">
                                            <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.6758 0.734375L11.8164 1.59375C11.6445 1.80859 11.6445 2.10938 11.8594 2.32422L15.2969 5.63281H0.515625C0.214844 5.63281 0 5.89062 0 6.14844V7.35156C0 7.65234 0.214844 7.86719 0.515625 7.86719H15.2969L11.8594 11.2188C11.6445 11.4336 11.6445 11.7344 11.8164 11.9492L12.6758 12.8086C12.8906 12.9805 13.1914 12.9805 13.4062 12.8086L19.0781 7.13672C19.25 6.92188 19.25 6.62109 19.0781 6.40625L13.4062 0.734375C13.1914 0.5625 12.8906 0.5625 12.6758 0.734375Z" fill="white" />
                                            </svg>
                                        </Link>
                                    </div>
                                </figure>
                                <div className="portfolioBlock__content">
                                    <Link onClick={ClickHandler} to='/donation-listing' className="portfolioBlock__hashLink mb-10"><span>#
                                        Donation</span></Link>
                                    <h2 className="portfolioBlock__heading text-uppercase"><Link onClick={ClickHandler} to={`/story-details/${stories.slug}`} >{stories.title}</Link></h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StoriesSection2;