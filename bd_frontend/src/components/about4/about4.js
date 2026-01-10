import React, { useEffect } from 'react';
import { useState } from 'react';
import CountUp from 'react-countup';
// import shape1 from '../../images/shapes/love-shape3.svg';
// import shape2 from '../../images/shapes/love-shape4.svg';
// import shape3 from '../../images/shapes/love-shape5.svg';

import icon1 from '../../images/icons/mission-icon1.svg';
import icon2 from '../../images/icons/mission-icon2.svg';
import icon3 from '../../images/icons/mission-icon3.svg';
import icon4 from '../../images/icons/mission-icon4.svg';

import DonationListSection2 from '../DonationListSection2/DonationListSection2';


/// Mine
import BloodShare from '../BloodShare/BloodShare';
import axios from 'axios';


const About4 = () => {

    const [OverviewCounts, setOverviewCounts] = useState({});
    const port = process.env.REACT_APP_SERVER_PORT;
    // console.log("SERVER PORT",  port);

    useEffect(() => {
        axios.get(port + "total-counts").then((result) => {
            //console.log(result.data);
            setOverviewCounts(result.data);
        })
    }, [])


    const missionData = [
        {
            name: "Number of Donors",
            value: OverviewCounts.NumberOfDonors,
            image: icon3
        },
        {
            name: "No.Of Blood Camps",
            value: OverviewCounts.NumberOfBloodCamps,
            image: icon2
        },
        {
            name: "No.Of Lives Saved",
            value: "16K",
            image: icon1
        },
        {
            name: "No.Of Blood Units",
            value: OverviewCounts.UnitsCollected,
            image: icon4
        }
    ];

    const formatValue = (value) => {
        if (value === null || value === undefined) {
            return { numericValue: 0, suffix: "" };
        }
        // Extract numeric and suffix portions
        const numericValue = parseInt(value);
        const suffix = typeof value === 'string' ? value.replace(/\d+/, '') : '';

        return { numericValue, suffix };
    };

    return (

        <section className="about">
            {/* <img className="about__shape about__shape--one" src={shape1} alt="Gainioz Shape" /> */}
            {/* <img className="about__shape about__shape--two" src={shape2} alt="Gainioz Shape" /> */}
            {/* <img className="about__shape about__shape--three" src={shape3} alt="Gainioz Shape" /> */}
            <div className="aboutArea aboutArea--padding position-relative">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-30">
                            <div className="aboutContent">
                                <div className="sectionTitle mb-20">
                                    <span className="sectionTitle__small">
                                        <i className="fa-solid fa-heart btn__icon"></i>
                                        about foundation
                                    </span>
                                    <h2 className="sectionTitle__big">what have we done with your help</h2>
                                </div>
                                <p className="aboutContent__text">
                                    There are many lives we have impacted through your donations, but the majority of our success comes from the dedication of donors like you. By participating in our drives, volunteering your time, or spreading awareness, you’ve ensured every drop counts.There are many ways to help, and each act strengthens the community we serve together.
                                </p>
                                <span className="aboutContent__quote">Join our Action  Everyone can help</span>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row g-4">
                                {
                                    missionData.map((item, index) => {
                                        const { numericValue, suffix } = formatValue(item.value);

                                        return (
                                            <div className="col-lg-6 col-md-6" style={{ borderRadius: "20px" }} key={index}>
                                                <div className={`missionBlock ${index % 3 === 0 ? "bgSecondary" : "bgPrimary"} hoverEffect`} style={{ borderRadius: "10px" }}>
                                                    <div className="missionBlock__icon">
                                                        <img src={item.image} alt="Gainioz Mission" />
                                                    </div>
                                                    <div className="missionBlock__content">
                                                        <span className="missionBlock__counter">
                                                            <CountUp end={numericValue} enableScrollSpy={true} />
                                                            {suffix}
                                                        </span>
                                                        <p className="missionBlock__title">{item.name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <BloodShare />
            <DonationListSection2 />

        </section>
    );
};

export default About4;
