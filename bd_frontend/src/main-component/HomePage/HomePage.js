import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';
import Testimonial from '../../components/Testimonial/Testimonial';
import StoriesSection from '../../components/StoriesSection/StoriesSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import PartnerSection from '../../components/PartnerSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';


const HomePage = () => {

    return (
        <Fragment>
            <div>
                <Header />
                <main className="page_content">
                    <Hero />
                    <About />
                    <Testimonial />
                    <StoriesSection />
                    <BlogSection />
                    <PartnerSection />
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage;