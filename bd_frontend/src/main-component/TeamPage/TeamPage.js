import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import TeamSection from '../../components/TeamSection/TeamSection';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const TeamPage = (props) => {

    return (
        <Fragment>
            <Header hclass={'header--styleFour'}/>
            <main className="page_content about-page">
                <PageTitle pageTitle={'Our Volunteers'} pagesub={'Volunteers'}/>
                <TeamSection/>
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamPage;
