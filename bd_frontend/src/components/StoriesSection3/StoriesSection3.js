import React, { useState } from "react";
import Stories from '../../api/stories'
import { Link } from "react-router-dom";

const StoriesSection3 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [activeIndex, setActiveIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    return (

        <section className="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="sectionTitle text-center mb-65">
                            <span className="sectionTitle__small justify-content-center">
                                <i className="fa-solid fa-heart btn__icon"></i>
                                Smile is Everything
                            </span>
                            <h2 className="sectionTitle__big">What Is Our Portfolio In Our Journey</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {Stories.slice(6, 9).map((stories, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                            <div className={`portfolioBlock portfolioBlock--style3 position-relative ${activeIndex === index ? "portfolioBlock--active" : ""}`}
                                onMouseEnter={() => handleMouseEnter(index)}  >
                                <figure className="portfolioBlock__figure">
                                    <img className="portfolioBlock__figure__thumb" src={stories.pImg} alt="Gainioz Portfolio" />
                                </figure>
                                <div className="portfolioBlock__content">
                                    <h2 className="portfolioBlock__heading text-uppercase"><Link onClick={ClickHandler} to={`/story-details/${stories.slug}`} >{stories.title}</Link></h2>
                                    <Link onClick={ClickHandler} to='/donation-listing' className="portfolioBlock__hashLink mb-10"><span>#
                                        Donation</span></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StoriesSection3;