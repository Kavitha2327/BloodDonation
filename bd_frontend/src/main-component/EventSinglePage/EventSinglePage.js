import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import { Link } from "react-router-dom";
import Events from '../../api/events'
import { useParams } from 'react-router-dom';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import esImg from '../../images/utilites/event-details1.jpg'
import esImg2 from '../../images/utilites/event-details2.jpg'


const EventSinglePage = (props) => {
    const { slug } = useParams()

    const EventDetails = Events.find(item => item.slug === slug)

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Header hclass={'header--styleFour'} />
            <main className="page_content about-page">
                <PageTitle pageTitle={EventDetails.title} pagesub={'Event'} />
                <section className="stories pt-130 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mb-30">
                                <div className="innerWrapper">
                                    <div className="donationDetails storiesDetails">
                                        <div className="donationDetails__header mb-45">
                                            <figure className="thumb mb-45">
                                                <img src={esImg} alt="Gainioz" />
                                            </figure>
                                        </div>
                                        <h3 className="eventsBlock__heading text-uppercase">
                                            Temple and Family History Leadership
                                        </h3>
                                        <div className="eventsBlock__meta">
                                            <ul>
                                                <li>
                                                    <span className="eventsBlock__meta__title">Featured :</span>
                                                    <span className="eventsBlock__meta__text">Feb 10, 2022 @ 8:00 am - Feb 11, 2022 @ 5:00 pm</span>
                                                </li>
                                                <li>
                                                    <span className="eventsBlock__meta__title">Newyork :</span>
                                                    <span className="eventsBlock__meta__text">233 Main St, New York</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="donationDetails__text storiesDetails__text storiesDetails__text--first mb-30">We have covered
                                            many special events such as fireworks, fairs,
                                            parades, races, walks, awards ceremonies, fashion shows, sporting events, and even a memorial service.
                                        </p>
                                        <p className="donationDetails__text mb-30">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum rhoncus, dolor
                                            eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non
                                            justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interd enim. Vivamus
                                            faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus.
                                            Suspendisse consectetur tristique tortor
                                        </p>
                                        <h4 className="donationDetails__heading mb-25">Family History Event Details</h4>
                                        <p className="donationDetails__text mb-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                                            vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae
                                            ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla
                                            quis diam sit amet turpis interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh egestas
                                            elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus</p>
                                        <p className="donationDetails__text mb-30">We have covered many special events such as fireworks, fairs,
                                            parades, races, walks, awards ceremonies, fashion shows, sporting events, and even a memorial service.
                                        </p>
                                        <div className="row g-4">
                                            <div className="col-lg-6">
                                                <div className="eventAddress">
                                                    <ul>
                                                        <li>
                                                            <h3 className="eventAddress__heading">Event Date</h3>
                                                            <span>Feb 10, 2022 @ 8:00</span>
                                                            <span>am - Feb 11, 2022 @</span>
                                                            <span>5:00 pm</span>
                                                        </li>
                                                        <li>
                                                            <h3 className="eventAddress__heading">Event Location</h3>
                                                            <span>Feb 10, 2022 @ 8:00</span>
                                                            <span>am - Feb 11, 2022 @</span>
                                                            <span>5:00 pm</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <figure className="thumb mb-35">
                                                    <img src={esImg2} alt="Gainioz" />
                                                </figure>
                                            </div>
                                        </div>
                                        <h4 className="donationDetails__heading mb-25">If you need to join this event</h4>
                                        <Link onClick={ClickHandler}  className="btn btn--styleOne btn--primary it-btn" to="/donation-listing">
                                            <span className="btn__text">join the journey</span>
                                            <i className="fa-solid fa-heart btn__icon"></i>
                                            <span className="it-btn__inner">
                                                <span className="it-btn__blobs">
                                                    <span className="it-btn__blob"></span>
                                                    <span className="it-btn__blob"></span>
                                                    <span className="it-btn__blob"></span>
                                                    <span className="it-btn__blob"></span>
                                                </span>
                                            </span>
                                            <svg className="it-btn__animation" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                <defs>
                                                    <filter>
                                                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo">
                                                        </feColorMatrix>
                                                        <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-30">
                                <div className="innerWrapperSidebar">
                                    <div className="sidebarWidget">
                                        <div className="sidebarTitle">
                                            <h5 className="sidebarTitle__heading text-uppercase mb-30">Direct Contact us</h5>
                                        </div>
                                        <form className="sidebarContacts" onSubmit={SubmitHandler}>
                                            <input type="text" className="sidebarContacts__input" placeholder="Enter name*" />
                                            <input type="email" className="sidebarContacts__input" placeholder="Enter your mail*" />
                                            <textarea className="sidebarContacts__input textarea" name="message" id="message" placeholder="Massage*"></textarea>
                                            <button className="btn btn--styleOne btn--primary it-btn" type='submit'>
                                                <span className="btn__text">send massage</span>
                                                <span className="it-btn__inner">
                                                    <span className="it-btn__blobs">
                                                        <span className="it-btn__blob"></span>
                                                        <span className="it-btn__blob"></span>
                                                        <span className="it-btn__blob"></span>
                                                        <span className="it-btn__blob"></span>
                                                    </span>
                                                </span>
                                                <svg className="it-btn__animation" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                    <defs>
                                                        <filter>
                                                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                                                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo">
                                                            </feColorMatrix>
                                                            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                                        </filter>
                                                    </defs>
                                                </svg>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default EventSinglePage;