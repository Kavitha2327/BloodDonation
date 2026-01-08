import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import BlogList from '../../components/BlogList';


const BlogPage = (props) => {

    return (
        <Fragment>
            <Header hclass={'header--styleFour'} />
            <main className="main">
                <PageTitle pageTitle={'Our Latest Blog'} pagesub={'Blogs'} pageTop={'Our'}/>
                <BlogList/>
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogPage;
