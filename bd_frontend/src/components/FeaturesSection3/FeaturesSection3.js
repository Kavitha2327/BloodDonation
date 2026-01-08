import React from 'react';
// import DonationListSection2 from '../DonationListSection2/DonationListSection2';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
import { Slide } from "react-awesome-reveal";
import map from '../../images/shapes/map.png'
import icon1 from '../../images/icons/icon1.svg'
import icon2 from '../../images/icons/icon2.svg'
import icon3 from '../../images/icons/icon3.svg'

const Features = [
    {
        title: 'Stays healthy',
        des: 'Donating boosts heart health, giving you purpose and lowering risks.',
        icon: icon1,
        width: '100%',
        duration: 1000,
    },
    {
        title: 'Being young',
        des: 'Donating boosts well-being, giving you a sense of purpose and energy.',
        icon: icon2,
        width: '100%',
        duration: 1200,
    },
    {
        title: 'Saves lives',
        des: 'Each donation can save up to three lives, making a real difference.',
        icon: icon3,
        width: '100%',
        duration: 1400,
    },


]


const FeaturesSection3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <div className="featureArea pt-10">
            <span className="sectionTitle__small">
                                <i className="fa-solid fa-heart btn__icon"></i>
                                What happens if you donate blood
                            </span>
                            <h2 className="sectionTitle__big" >Benefits</h2>
            <div className="featureArea__map">
                <img src={map} alt="Gainioz Map" />
            </div>
            <div className="container" style={{marginTop: "0"}}>
                <div className="row">
                    <div className="col-12">
                        <div className="keyFeatureBox mb-30">
                            <div className="row">
                                {Features.map((features, fitem) => (
                                    <div className="col-lg-4 wow animate__fadeInLeft" key={fitem}>
                                        <Slide direction='left' triggerOnce={'false'} duration={features.duration}>
                                            <div>
                                                <div className="keyFeatureBlock mb-30">
                                                    <div className="keyFeatureBlock__left">
                                                        <span className="keyFeatureBlock__icon">
                                                            <img src={features.icon} alt="Gainioz Feature_Icon" />
                                                        </span>
                                                    </div>
                                                    <div className="keyFeatureBlock__content">
                                                        <h3 className="keyFeatureBlock__heading">
                                                            <Link onClick={ClickHandler} className="keyFeatureBlock__heading__link" to="/services">
                                                                {features.title}
                                                            </Link>
                                                        </h3>
                                                        <p className="keyFeatureBlock__text">{features.des}</p>
                                                    </div>
                                                    <div className="keyFeatureBlock__skill skill-bar" style={{ width: features.width }}>
                                                        <span className="keyFeatureBlock__skill__bar"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturesSection3;