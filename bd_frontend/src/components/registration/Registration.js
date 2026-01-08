import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
// import ContactSection from '../../components/ContactSection';
import ContactForm from './RegistraionForms'
// <ContactSection />
// <ContactForm/> 

const ContactPage = (props) => {

    return (
        <Fragment>
            <Header hclass={'header--styleFour'}/>
            <main className="main">
                <PageTitle pageTitle={'Register now'} pagesub={'register'}/>
                <ContactForm/> 
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default ContactPage;