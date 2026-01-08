import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';


const MissionVision = (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    return (

        <div className="mvv pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mvvTabs">
                            <div className="mvvTabs__wrapper d-flex align-items-start">
                                <div className="nav nav-pills mb-30" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <Nav tabs className="nav justify-content-center">
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '1' })}
                                                onClick={() => { toggle('1'); }}
                                            >
                                                Our MIssion
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '2' })}
                                                onClick={() => { toggle('2'); }}
                                            >
                                                Our Vision
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '3' })}
                                                onClick={() => { toggle('3'); }}
                                            >

                                                Our Values
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                                <TabContent activeTab={activeTab} className="mb-30">
                                    <TabPane tabId="1">
                                        <div className="mvvTabs__content">
                                            <h2 className="mvvTabs__heading">Listen, Act, Learn, Repeat</h2>
                                            <p className="mvvTabs__text mb-25">There are many variations of passages of Lorem Ipsum available, but
                                                the
                                                majority have suffered
                                                alteration in some form,
                                                by injected humour, or randomised words which don't look even slightly believable. If you are
                                                going to use a passage of
                                                Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle There
                                                are many variations</p>
                                            <div className="mvvTabs__skills">
                                                <div className="mvvTabs__skills__block mb-20">
                                                    <h4 className="mvvTabs__skills__counter"><span className="mvvTabs__skills__counter">45</span>%</h4>
                                                    <span className="mvvTabs__skills__title color-title">kids need help</span>
                                                </div>
                                                <div className="mvvTabs__skills__block mb-20">
                                                    <h4 className="mvvTabs__skills__counter">$<span className="mvvTabs__skills__counter">140</span>k</h4>
                                                    <span className="mvvTabs__skills__title color-title">raised Now</span>
                                                </div>
                                                <div className="mvvTabs__skills__block mb-20">
                                                    <h4 className="mvvTabs__skills__counter"><span className="mvvTabs__skills__counter">189</span>+</h4>
                                                    <span className="mvvTabs__skills__title color-title">Voleenteer</span>
                                                </div>
                                            </div>
                                            <p className="mvvTabs__text mb-0">There are many variations of passages of Lorem Ipsum available, but
                                                the
                                                majority have suffered alteration in some form,
                                                by injected humour.</p>
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <div className="mvvTabs__content">
                                            <h2 className="mvvTabs__heading">Do good For Others</h2>
                                            <p className="mvvTabs__text mb-25">There are many variations of passages of Lorem Ipsum available, but
                                                the
                                                majority have suffered
                                                alteration in some form,
                                                by injected humour, or randomised words which don't look even slightly believable. If you are
                                                going to use a passage of
                                                Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle There
                                                are many variations</p>
                                            <div className="mvvTabs__skills">
                                                <div className="mvvTabs__skills__block mb-20">
                                                    <h4 className="mvvTabs__skills__counter"><span className="mvvTabs__skills__counter">35</span>%</h4>
                                                    <span className="mvvTabs__skills__title color-title">kids need help</span>
                                                </div>
                                                <div className="mvvTabs__skills__block mb-20">
                                                    <h4 className="mvvTabs__skills__counter">$<span className="mvvTabs__skills__counter">100</span>k</h4>
                                                    <span className="mvvTabs__skills__title color-title">raised Now</span>
                                                </div>
                                                <div className="mvvTabs__skills__block mb-20">
                                                    <h4 className="mvvTabs__skills__counter"><span className="mvvTabs__skills__counter">152</span>+</h4>
                                                    <span className="mvvTabs__skills__title color-title">Voleenteer</span>
                                                </div>
                                            </div>
                                            <p className="mvvTabs__text mb-0">There are many variations of passages of Lorem Ipsum available, but
                                                the
                                                majority have suffered alteration in some form,
                                                by injected humour.</p>
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <div className="mvvTabs__content">
                                            <h2 className="mvvTabs__heading">Foodless People In Sudan</h2>
                                            <p className="mvvTabs__text mb-25">There are many variations of passages of Lorem Ipsum available, but
                                                the
                                                majority have suffered
                                                alteration in some form,
                                                by injected humour, or randomised words which don't look even slightly believable. If you are
                                                going to use a passage of
                                                Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle There
                                                are many variations</p>
                                            <div className="mvvTabs__skills">
                                                <div className="mvvTabs__skills__block mb-20">
                                                    <h4 className="mvvTabs__skills__counter"><span className="mvvTabs__skills__counter">65</span>%</h4>
                                                    <span className="mvvTabs__skills__title color-title">kids need help</span>
                                                </div>
                                                <div className="mvvTabs__skills__block mb-20">
                                                    <h4 className="mvvTabs__skills__counter">$<span className="mvvTabs__skills__counter">190</span>k</h4>
                                                    <span className="mvvTabs__skills__title color-title">raised Now</span>
                                                </div>
                                                <div className="mvvTabs__skills__block mb-20">
                                                    <h4 className="mvvTabs__skills__counter"><span className="mvvTabs__skills__counter">220</span>+</h4>
                                                    <span className="mvvTabs__skills__title color-title">Voleenteer</span>
                                                </div>
                                            </div>
                                            <p className="mvvTabs__text mb-0">There are many variations of passages of Lorem Ipsum available, but
                                                the
                                                majority have suffered alteration in some form,
                                                by injected humour.</p>
                                        </div>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionVision;