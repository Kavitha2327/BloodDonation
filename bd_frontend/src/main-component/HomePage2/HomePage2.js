import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import Hero2 from '../../components/hero2/hero2';
import About2 from '../../components/about2/about2';
import FunFactSection from '../../components/FunFact/FunFact';
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import StoriesSection2 from '../../components/StoriesSection2/StoriesSection2';
import BlogSection2 from '../../components/BlogSection2/BlogSection2';
import PartnerSection from '../../components/PartnerSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import FeaturesSection2 from '../../components/FeaturesSection2/FeaturesSection2';


const HomePage2 = () => {

    return (
        <Fragment>
            <div>
                <Header hclass={'header--styleTwo'}/>
                <main className="page_content">
                    <Hero2 />
                    <FeaturesSection2 />
                    <About2 />
                    <FunFactSection />
                    <PartnerSection />
                    <StoriesSection2 />
                    <Testimonial2 />
                    <BlogSection2 />
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage2;