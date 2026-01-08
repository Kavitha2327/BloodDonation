import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import Hero3 from '../../components/hero3/hero3';
import CtaSection2 from '../../components/CtaSection2/CtaSection2';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import JoinSection from '../../components/JoinSection/JoinSection';
import About3 from '../../components/about3/about3';
import Testimonial3 from '../../components/Testimonial3/Testimonial3';
import BlogSection3 from '../../components/BlogSection3/BlogSection3';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';


const HomePage3 = () => {

    return (
        <Fragment>
            <div>
                <Header hclass={'header--styleThree '}/>
                <main className="page_content">
                    <Hero3 />
                    <CtaSection2 />
                    <ServiceSection />
                    <JoinSection />
                    <About3 />
                    <Testimonial3 />
                    <BlogSection3 />
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage3;