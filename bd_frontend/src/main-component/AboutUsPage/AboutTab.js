import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import aImg from '../../images/map/map-about-tab.svg'
import aImg1 from '../../images/about/aboutDetailsthumb1.jpg'
import aImg2 from '../../images/about/aboutDetailsthumb2.jpg'
import aImg3 from '../../images/about/aboutDetailsthumb3.jpg'

import img2 from '../../assets/donationOne.jpeg'
import img3 from '../../assets/donationTwo.jpeg'
import img1 from '../../assets/donationThree.avif'

const AboutTab = (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    return (
        <div className="about position-relative">
            <img src={aImg} alt="Gainioz" className="map-about-tab" />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="featureTab">
                            <Nav tabs className="nav justify-content-center">
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => { toggle('1'); }}
                                    >
                                        about foundation
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { toggle('2'); }}
                                    >
                                        our mission
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '3' })}
                                        onClick={() => { toggle('3'); }}
                                    >

                                        our vission
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab} className="pt-55">
                                <TabPane tabId="1">
                                    <div className="row">
                                        <div className="col-lg-10 mx-auto">
                                            <div className="aboutDetails text-center">
                                                <p className="aboutDetailsText mb-20" style={{color: "black"}}>From a deep-rooted desire to help humanity and make a positive difference, this foundation was created to inspire and spread acts of kindness while fostering a compassionate and caring community. In our eyes, there is no gift more powerful or selfless than the act of blood donation. It represents hope, healing, and the possibility of saving lives. Our entire organization is passionately committed to this cause, as we understand that the health and well-being of others depend on it.

Our foundation is driven by the vision of a world where everyone, regardless of circumstance, has access to life-saving blood donations when they need it most. Through our work, we aim to create a network of dedicated donors and compassionate volunteers who are bound together by a common goal: to save lives and enhance the quality of healthcare for all. With unwavering dedication, our team upholds the belief that every life is precious and deserves a chance to thrive. We are determined to support and amplify this life-saving effort across communities, ensuring that no one faces a crisis alone.

                                                </p>
                                                <p className="aboutDetailsText mb-20" style={{color: "black"}}>Our foundation is driven by the vision of a world where everyone, regardless of circumstance, has access to life-saving blood donations when they need it most. Through our work, we aim to create a network of dedicated donors and compassionate volunteers who are bound together by a common goal: to save lives and enhance the quality of healthcare for all. With unwavering dedication, our team upholds the belief that every life is precious and deserves a chance to thrive. We are determined to support and amplify this life-saving effort across communities, ensuring that no one faces a crisis alone.
                                                </p>

                                            </div>
                                            <div className="aboutDetailsThumbs pt-100">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-lg-4">
                                                        <div className="aboutDetailsThumb">
                                                            <img src={img1} alt="About Gainioz" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="aboutDetailsThumb aboutDetailsThumb--big">
                                                            <img src= {img2} alt="About Gainioz" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="aboutDetailsThumb">
                                                            <img src={img3} alt="About Gainioz" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tabId="2">
                                    <div className="row">
                                        <div className="col-lg-10 mx-auto">

                                            <div className="aboutDetails text-center  pt-100">
                                                <p className="aboutDetailsText mb-20" style={{color: "black"}}>At the core of our foundation is a mission rooted in the belief that there is no greater act of service than protecting and saving the lives of others. We view this not only as a responsibility but as a sacred duty that transcends boundaries and brings humanity together. Our mission is to assist those in need by building a stronger, more resilient community of blood donors and to inspire a collective belief in the transformative power of giving.
                                                </p>
                                                <p className="aboutDetailsText mb-20" style={{color: "black"}}>By doing so, we hope to cultivate a deep awareness of the importance of blood donation and its impact on individuals, families, and entire communities. We are not just saving lives—we are building hope and trust. Anyone who joins us on this journey becomes part of a greater movement—one that recognizes the noble sacrifice of those who give to sustain others. Our foundation leads a growing network of donors and supporters, working tirelessly to ensure that blood is always available when needed, so that no life is ever at risk due to shortages.


                                                </p>
                                            </div>
                                            <div className="aboutDetailsThumbs">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-lg-4">
                                                        <div className="aboutDetailsThumb">
                                                            <img src={img1} alt="About Gainioz" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="aboutDetailsThumb aboutDetailsThumb--big">
                                                            <img src={img2} alt="About Gainioz" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="aboutDetailsThumb">
                                                            <img src={img3} alt="About Gainioz" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tabId="3">
                                    <div className="row">
                                        <div className="col-lg-10 mx-auto">
                                            <div className="aboutDetails text-center">
                                                <p className="aboutDetailsText mb-20" style={{color: "black"}}>We envision a world where no one suffers due to a lack of blood, proper medical care, or support within their community. Our vision is a future where healthcare and compassion are accessible to all, where every individual—regardless of location or circumstance—benefits from the generosity and kindness of others. No one should experience the fear or pain of not being able to receive a life-saving blood transfusion due to shortages.

                                                </p>
                                                <p className="aboutDetailsText mb-20" style={{color: "black"}}>We believe that through collaboration and consistent effort, we can build a future where blood donations flow abundantly and regularly, ensuring that every patient in need receives timely help. We dream of a society where the act of blood donation becomes a natural part of life—a symbol of our shared humanity. In this vision, donors, recipients, and healthcare providers work hand-in-hand to create a healthy, thriving society. Our ultimate goal is to foster an environment where giving back becomes second nature and where the power of collective kindness leads to stronger, healthier communities.
                                                </p>
                                            </div>
                                            <div className="aboutDetailsThumbs pt-100">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-lg-4">
                                                        <div className="aboutDetailsThumb">
                                                            <img src={img1} alt="About Gainioz" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="aboutDetailsThumb aboutDetailsThumb--big">
                                                            <img src={img2} alt="About Gainioz" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="aboutDetailsThumb">
                                                            <img src={img3} alt="About Gainioz" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTab;