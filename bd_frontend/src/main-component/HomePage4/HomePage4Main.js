import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import Hero4 from '../../components/hero4/hero4';
import About4 from '../../components/about4/about4';

// import Testimonial from '../../components/Testimonial/Testimonial';
// import StoriesSection3 from '../../components/StoriesSection3/StoriesSection3';
// import BlogSection4 from '../../components/BlogSection4/BlogSection4';

// import PartnerSection from '../../components/PartnerSection';

import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';


const HomePage = () => {

    return (
        <Fragment>
            <div>
                <Header2 />
                <main className="main main--wrapper4">
                    <Hero4 />
                    <About4 />
                    {/* <Testimonial />
                    <StoriesSection3 />
                    <BlogSection4 /> */}
                    
                    {/* <PartnerSection pClass={'sponsors--style2'}/> */}
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage;