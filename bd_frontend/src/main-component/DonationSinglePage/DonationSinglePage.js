import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import Donation from '../../api/donation'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
 
 
const DonationSinglePage = (props) => {
    const { slug } = useParams()
    const DonationDetails = Donation.find(item => item.slug === slug)

    const SubmitHandler = (e) => {
        e.preventDefault()
    }


    return (
        <Fragment>
            <Header hclass={'header--styleFour'} />
            <main className="main">
                <PageTitle pageTitle={DonationDetails.title} pagesub={'Details 😃'} pageTop={'Portfolio'} />

                <section className="donation pt-130 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mb-30">
                                <div className="innerWrapper">
                                    <div className="donationDetails">
                                        <div className="donationDetails__header mb-45">
                                            <figure className="thumb mb-45">
                                                <img src={DonationDetails.sImg} alt="Gainioz" />
                                            </figure>
                                            <h3 className="donationDetails__title text-uppercase">{DonationDetails.title}</h3>
                                        </div>
                                        <div className="featureBlock__donation featureBlock__donation--style2 mb-50">
                                            <div className="featureBlock__donation__progress">
                                                <div className="featureBlock__donation__bar">
                                                    <span className="featureBlock__donation__text skill-bar" style={{ width: '80%' }}>80%</span>
                                                    <div className="featureBlock__donation__line">
                                                        <span className="skill-bars">
                                                            <span className="skill-bars__line skill-bar" style={{ width: '80%' }}></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="featureBlock__eqn">
                                                <div className="featureBlock__eqn__block">
                                                    <span className="featureBlock__eqn__title">our goal</span>
                                                    <span className="featureBlock__eqn__price">{DonationDetails.goal}</span>
                                                </div>
                                                <div className="featureBlock__eqn__block text-center">
                                                    <span className="featureBlock__eqn__title">Raised</span>
                                                    <span className="featureBlock__eqn__price">{DonationDetails.raised}</span>
                                                </div>
                                                <div className="featureBlock__eqn__block text-end">
                                                    <span className="featureBlock__eqn__title">to go</span>
                                                    <span className="featureBlock__eqn__price">{DonationDetails.togo}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="donationDetails__warning">
                                            <p>
                                                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M23.8236 19.6887L12.7561 0.966058C12.6007 0.698209 12.3114 0.5 12.0007 0.5C11.6847 0.5 11.3954 0.698209 11.2454 0.966058L0.177863 19.6887C0.0278673 19.9566 -0.0792725 20.3851 0.0760802 20.6476C0.231433 20.9101 0.515353 21.0708 0.826059 21.0708H23.1701C23.4808 21.0708 23.7647 20.9101 23.92 20.6476C24.0807 20.3851 23.9736 19.9512 23.8236 19.6887ZM13.715 18.4995H10.2865V15.9281H13.715V18.4995ZM13.715 14.2139H10.2865V6.49983H13.715V14.2139Z" fill="black" />
                                                </svg>
                                                <span>Notice:</span> Test mode is enabled. While in test mode no live donations are processed.
                                            </p>
                                        </div>
                                        <div className="donationDetails__payments">
                                            <div className="payments">
                                                <div className="paymentsHeader">
                                                    <div className="payments__title">
                                                        <h4 className="donationDetails__heading">Select Payment Method</h4>
                                                    </div>
                                                    <div className="payments__methods">
                                                        <div className="payments__method">
                                                            <input className="payments__input" id="pay1" type="radio" name="pay" />
                                                            <label className="payments__label" htmlFor="pay1"><span
                                                                className="payments__label__check"></span>Donation</label>
                                                        </div>
                                                        <div className="payments__method">
                                                            <input className="payments__input" id="pay2" type="radio" name="pay" />
                                                            <label className="payments__label" htmlFor="pay2"><span className="payments__label__check"></span>Cradint
                                                                Donation</label>
                                                        </div>
                                                        <div className="payments__method">
                                                            <input className="payments__input" id="pay3" type="radio" name="pay" />
                                                            <label className="payments__label" htmlFor="pay3"><span className="payments__label__check"></span>Offline
                                                                Donation</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="paymentsCustoms">
                                                    <div className="paymentsInput">
                                                        <input className="paymentsCustoms__field" type="text" placeholder="Custom Donation" />
                                                    </div>
                                                    <div className="paymentsAmountChoice">
                                                        <div className="payments__method">
                                                            <input className="payments__input" id="pay4" type="radio" name="pay2" />
                                                            <label className="paymentsAmountChoice__label" htmlFor="pay4">$20</label>
                                                        </div>
                                                        <div className="payments__method">
                                                            <input className="payments__input" id="pay5" type="radio" name="pay2" />
                                                            <label className="paymentsAmountChoice__label" htmlFor="pay5">$50</label>
                                                        </div>
                                                        <div className="payments__method">
                                                            <input className="payments__input" id="pay6" type="radio" name="pay2" />
                                                            <label className="paymentsAmountChoice__label" htmlFor="pay6">$100</label>
                                                        </div>
                                                        <div className="payments__method">
                                                            <input className="payments__input" id="pay7" type="radio" name="pay2" />
                                                            <label className="paymentsAmountChoice__label" htmlFor="pay7">$500</label>
                                                        </div>
                                                        <div className="payments__method">
                                                            <input className="payments__input" id="pay8" type="radio" name="pay2" />
                                                            <label className="paymentsAmountChoice__label" htmlFor="pay8">$1000</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="donationDetails__cross mb-45">
                                            <p>
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <mask id="mask0_1265_247"  maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="21">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.5 0C4.70156 0 0 4.70156 0 10.5C0 16.2984 4.70156 21 10.5 21C16.2984 21 21 16.2984 21 10.5C21 4.70156 16.2984 0 10.5 0ZM15.5766 14.0391C15.6469 14.1094 15.6844 14.2031 15.6844 14.3016C15.6844 14.4 15.6469 14.4984 15.5766 14.5641L14.5641 15.5812C14.4891 15.6562 14.3953 15.6891 14.3016 15.6891C14.2078 15.6891 14.1094 15.6516 14.0391 15.5812L10.5 12.0375L6.96562 15.5859C6.89531 15.6609 6.79687 15.6937 6.70312 15.6937C6.60937 15.6937 6.51093 15.6562 6.44062 15.5859L5.42812 14.5687C5.35781 14.4984 5.32031 14.4047 5.32031 14.3062C5.32031 14.2078 5.35781 14.1094 5.42812 14.0437L8.97656 10.4812L5.41874 6.96562C5.27343 6.82031 5.27343 6.58124 5.41874 6.43593L6.43124 5.41874C6.50156 5.34843 6.59531 5.31093 6.69374 5.31093C6.79218 5.31093 6.88593 5.34843 6.95624 5.41874L10.5047 8.92031L14.0531 5.41874C14.1234 5.34843 14.2172 5.31093 14.3156 5.31093C14.4141 5.31093 14.5078 5.34843 14.5781 5.41874L15.5906 6.43593C15.7359 6.58124 15.7359 6.82031 15.5906 6.96562L12.0328 10.4812L15.5766 14.0391Z" fill="white" />
                                                    </mask>
                                                    <g mask="url(#mask0_1265_247)">
                                                        <rect width="21" height="21" rx="10.5" fill="#F05359" />
                                                    </g>
                                                </svg>
                                                We're unable to recognize your session. Please refresh the screen to try again; otherwise contact your
                                                website
                                                administrator for assistance.
                                            </p>
                                        </div>
                                        <p className="donationDetails__text mb-30">We have covered many special events such as fireworks, fairs,
                                            parades,
                                            races, walks, awards ceremonies, fashion shows,
                                            sporting events, and even a memorial service.</p>
                                        <p className="donationDetails__text mb-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                                            vulputate vestibulum rhoncus, dolor eget viverra
                                            pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo
                                            consectetur,
                                            cursus ante,
                                            tincidunt sapien. Nulla quis diam sit amet turpis interd enim. Vivamus faucibus ex sed nibh egestas
                                            elementum. Mauris et
                                            bibendum dui. Aenean consequat pulvinar luctus. Suspendisse consectetur tristique tortor</p>
                                        <h4 className="donationDetails__heading mb-25">Our challenge & Goal</h4>
                                        <p className="donationDetails__text mb-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                                            vulputate vestibulum Phasellus rhoncus, dolor eget
                                            viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo
                                            consectetur, cursus
                                            ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis nec enim. Vivamus
                                            faucibus ex sed nibh
                                            egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus</p>
                                        <p className="donationDetails__text mb-30">We have covered many special events such as fireworks, fairs,
                                            parades, races, walks, awards ceremonies,
                                            fashion shows,
                                            sporting events, and even a memorial service.</p>
                                        <p className="donationDetails__text mb-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                                            vulputate vestibulum Phasellus rhoncus, dolor eget
                                            viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo
                                            consectetur, cursus
                                            ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis nec enim. Vivamus
                                            faucibus ex sed nibh
                                            egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus. Suspendisse consectetur
                                            tristique tortor</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-30">
                                <div className="sidebarLayout">
                                    <div className="innerWrapperSidebar mb-30">
                                        <div className="sidebarWidget">
                                            <div className="sidebarTitle">
                                                <h5 className="sidebarTitle__heading text-uppercase mb-30">categories</h5>
                                            </div>
                                            <div className="sidebarCategories">
                                                <ul>
                                                    <li>
                                                        <Link to="/">
                                                            <span>Charity</span>
                                                            <span>03</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            <span>Donation</span>
                                                            <span>03</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            <span>Medical & Aid Kit</span>
                                                            <span>03</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            <span>Volenteer Team</span>
                                                            <span>03</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            <span>Food and Water</span>
                                                            <span>03</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/">
                                                            <span>Help Hoomeless People</span>
                                                            <span>03</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="innerWrapperSidebar">
                                        <div className="sidebarWidget">
                                            <div className="sidebarTitle">
                                                <h5 className="sidebarTitle__heading text-uppercase mb-30">Direct Contact us</h5>
                                            </div>
                                            <form className="sidebarContacts" onSubmit={SubmitHandler}>
                                                <input type="text" className="sidebarContacts__input" placeholder="Enter name*" />
                                                <input type="email" className="sidebarContacts__input" placeholder="Enter your mail*" />
                                                <textarea className="sidebarContacts__input textarea" name="message" id="message" placeholder="Massage*"></textarea>
                                                <button className="btn btn--styleOne btn--secondary it-btn" type='submit'>
                                                    <span className="btn__text">donate now</span>
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
                                                                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10">
                                                                </feGaussianBlur>
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
                    </div>
                </section>
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default DonationSinglePage;
