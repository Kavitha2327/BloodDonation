import React, { useState } from 'react';
import Services from '../../api/service'
import { Link } from "react-router-dom";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';


const FeaturesSection2 = (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <section className="feature pt-130 pb-100" id='feature'>
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
                                        Live Donation
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { toggle('2'); }}
                                    >
                                        Process WE Follow
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '3' })}
                                        onClick={() => { toggle('3'); }}
                                    >

                                        our mission
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab} className="mb-30">
                                <TabPane tabId="1">
                                    <div className="featureTab__content">
                                        <div className="sponsorsTitle sponsorsTitle--style2">
                                            <span className="sponsorsTitle__line"></span>
                                            <h2 className="sponsorsTitle__heading text-uppercase">Donate For African Child</h2>
                                            <span className="sponsorsTitle__line"></span>
                                        </div>
                                        <h3 className="featureTab__content__counter">28,0000</h3>
                                        <div className="featureBlock__donation__progress">
                                            <div className="featureBlock__donation__bar">
                                                <span className="featureBlock__donation__text skill-bar skill-bar--text"
                                                    style={{ width: '80%' }}><span>80%</span></span>
                                                <div className="featureBlock__donation__line">
                                                    <span className="skill-bars">
                                                        <span className="skill-bars__line skill-bar" style={{ width: '80%' }}></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tabId="2">
                                    <div className="featureTab__content">
                                        <div className="sponsorsTitle sponsorsTitle--style2">
                                            <span className="sponsorsTitle__line"></span>
                                            <h2 className="sponsorsTitle__heading text-uppercase">Donate For African Child</h2>
                                            <span className="sponsorsTitle__line"></span>
                                        </div>
                                        <h3 className="featureTab__content__counter">29,0000</h3>
                                        <div className="featureBlock__donation__progress">
                                            <div className="featureBlock__donation__bar">
                                                <span className="featureBlock__donation__text skill-bar skill-bar--text"
                                                    style={{ width: '90%' }}><span>90%</span></span>
                                                <div className="featureBlock__donation__line">
                                                    <span className="skill-bars">
                                                        <span className="skill-bars__line skill-bar" style={{ width: '90%' }}></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tabId="3">
                                    <div className="featureTab__content">
                                        <div className="sponsorsTitle sponsorsTitle--style2">
                                            <span className="sponsorsTitle__line"></span>
                                            <h2 className="sponsorsTitle__heading text-uppercase">Donate For African Child</h2>
                                            <span className="sponsorsTitle__line"></span>
                                        </div>
                                        <h3 className="featureTab__content__counter">50,0000</h3>
                                        <div className="featureBlock__donation__progress">
                                            <div className="featureBlock__donation__bar">
                                                <span className="featureBlock__donation__text skill-bar skill-bar--text"
                                                    style={{ width: '50%' }}><span>50%</span></span>
                                                <div className="featureBlock__donation__line">
                                                    <span className="skill-bars">
                                                        <span className="skill-bars__line skill-bar" style={{ width: '50%' }}></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                </div>
                <div className="row gx-35">
                    {Services.slice(0, 3).map((service, srv) => (
                        <div className="col-lg-4" key={srv}>
                            <div className="keyFeatureBlock keyFeatureBlock--style2 mb-30">
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
                                        <span className="keyFeatureBlock__link__dot"></span>
                                        <span className="keyFeatureBlock__link__dot"></span>
                                        <span className="keyFeatureBlock__link__dot"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default FeaturesSection2;