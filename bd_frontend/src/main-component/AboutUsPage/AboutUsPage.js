import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import AboutTab from './AboutTab';
import FunFactSection from '../../components/FunFact/FunFact';
import TeamSection from '../../components/TeamSection/TeamSection';

const AboutUsPage = (props) => {

    
    

    return (
        <Fragment>
            <Header hclass={'header--styleFour'} />
            <main className="main about-page">
                <PageTitle pageTitle={'About Us'} pagesub={'About'} />
                <section className="about pt-120 pb-105">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="sectionTitle text-center mb-30">
                                    <span className="sectionTitle__small justify-content-center">
                                        <i className="fa-solid fa-heart btn__icon"></i>
                                        about foundation
                                    </span>
                                    <h2 className="sectionTitle__big">We are always there others need help</h2>
                                </div>
                            </div>
                            <div className="col-lg-10 mx-auto">
                                <div className="aboutDetails text-center">
                                    <p className="aboutDetailsText mb-20" style={{color: "black"}}>From a deep-rooted desire to help humanity and make a positive difference, this foundation was created to inspire and spread acts of kindness while fostering a compassionate and caring community. In our eyes, there is no gift more powerful or selfless than the act of blood donation. It represents hope, healing, and the possibility of saving lives. Our entire organization is passionately committed to this cause, as we understand that the health and well-being of others depend on it.</p>
                                    <p className="aboutDetailsText mb-20" style={{color: "black"}}>Our foundation is driven by the vision of a world where everyone, regardless of circumstance, has access to life-saving blood donations when they need it most. Through our work, we aim to create a network of dedicated donors and compassionate volunteers who are bound together by a common goal: to save lives and enhance the quality of healthcare for all. With unwavering dedication, our team upholds the belief that every life is precious and deserves a chance to thrive. We are determined to support and amplify this life-saving effort across communities, ensuring that no one faces a crisis alone.

</p>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <AboutTab />
                <FunFactSection />
                
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default AboutUsPage;
