import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../images/logos/logo_1.svg'
import logo2 from '../../images/logos/logo_1.svg'
import MobileMenu from '../MobileMenu/MobileMenu'
import './header.css'
import adityaLogo from '../../assets/image-removebg-v2.png';
import LogoHome from '../../assets/logoHome.png';


const Header2 = (props) => {

    const [searchActive, setSearchState] = useState(false);
    const [mobailActive, setMobailState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div>
            <header className={`header myHeader header--styleOne header--styleFive sticky-on  ${isSticky ? 'sticky' : ''}`}>
                <div id="sticky-placeholder"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header__wrapper">
                                <div className="header__logo">
                                    <Link onClick={ClickHandler} to="/blooddonation/home" className="header__logo__link">
                                        <img src={adityaLogo} height={"60px"} width={"200px"} alt="Aditya" className="header__logo__image" />
                                    </Link>
                                </div>
                                <div className="header__menu header__menu--style2">
                                    <nav className="mainMenu">
                                        <ul>
                                            <li className="dropdown"><Link onClick={ClickHandler} to="/blooddonation/home">Home</Link>

                                            </li>
                                            <li className="dropdown">
                                                <Link onClick={ClickHandler} to="/blooddonation/events">Events</Link>
                                                <ul className="dropdown_menu dropdown_menu-2">
                                                    <li className="dropdown_item-1"><Link onClick={ClickHandler} to="/blooddonation/events">Events</Link></li>
                                                    <li className="dropdown_item-2"><Link onClick={ClickHandler} to="/blooddonation/gallery">Gallery</Link></li>
                                                </ul>
                                            </li>


                                            <li className="dropdown">
                                                <Link onClick={ClickHandler} to="/blooddonation/donation-listing">Donations</Link>
                                                <ul className="dropdown_menu dropdown_menu-2">
                                                    <li className="dropdown_item-1"><Link onClick={ClickHandler} to="/blooddonation/donation-listing">Donation Process</Link></li>
                                                    <li className="dropdown_item-2"><Link onClick={ClickHandler} to="/blooddonation/volunteers">Our Volunteers</Link></li>
                                                </ul>
                                            </li>

                                            <li><Link onClick={ClickHandler} to="/blooddonation/live-counts">Live counts</Link></li>
                                            <li><Link onClick={ClickHandler} to="/blooddonation/stats">Statistics</Link></li>
                                            <li><Link onClick={ClickHandler} to="/blooddonation/about">About</Link></li>
                                            <li><Link onClick={ClickHandler} to="/blooddonation/contact">Contact</Link></li>
                                            <li><Link onClick={ClickHandler} to="/blooddonation/myTeamPage">Team</Link></li>
                                            <li><Link onClick={ClickHandler} to="/blooddonation/register">Register</Link></li>
                                            
                                            {/* <li>
                                            <div style={{ width: "100%", justifyContent: "flex-end", display: "flex" }}>
                                                <Link onClick={ClickHandler} className="btn btn--styleOne btn--primary it-btn wow animate__fadeInUp animate__animated" data-wow-duration="1200ms" data-wow-delay="500ms" to="/blooddonation/events">
                                                    <span className="btn__text">Register</span>
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
                                            </li> */}

                                        </ul>
                                    </nav>
                                </div>
                                <div className="header__right header__right--style2">


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* header--mobile */}
            <div className="header header--mobile cc-header-menu mean-container position-relative" id="meanmenu">
                <div className="mean-bar headerBurgerMenu">
                    <Link onClick={ClickHandler} to="/blooddonation">
                        <img className="mean-bar__logo" alt="Aditya" src= {LogoHome} width="200px" />
                    </Link>
                    <div className="header__right">
                        <div className="header__actions">
                            <ul>
                                <li>
                                    <button className={`headerBurgerMenu__button sidebarBtn ${mobailActive ? "opened" : ""}`} aria-label="Main Menu" onClick={() => setMobailState(!mobailActive)}>
                                        <svg width="50" height="50" viewBox="0 0 100 100">
                                            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                                            <path className="line line2" d="M 20,50 H 80" />
                                            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobail-left */}
            <div className={`cc cc--slideNav ${mobailActive ? "show" : ""}`}>
                <div className="cc__logo mb-40">
                    <Link onClick={ClickHandler} to="/blooddonation">
                        <img className="mean-bar__logo" alt="Aditya" src={LogoHome} height="70px" width="200px" />
                    </Link>
                </div>
                <div className="offscreen-navigation mb-40">
                    <nav className="menu-main-primary-container">
                        <MobileMenu />
                    </nav>
                </div>
                <div className="itSocial itSocial--sidebar mb-40">
                <ul>
                                <li>
                                    <a
                                        className="facebook"
                                        href="https://www.facebook.com/technicalhubio/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                {/* <li>
                                    <a
                                        className="twitter"
                                        href="https://twitter.com/technicalhubio?t=5niR3EQITmZ2ksy3wC0yFA&s=09"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li> */}
                                <li>
                                    <a
                                        className="instagram"
                                        href="https://www.instagram.com/technicalhubio?utm_medium=copy_link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="linkedin"
                                        href="https://www.linkedin.com/company/technicalhub"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="youtube"
                                        href="https://www.youtube.com/channel/UCMNULLz42OXFrQvHnX7NANQ"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                </div>
                <div className="cc__button">
                    <div className="header__button">
                        <Link onClick={ClickHandler} className="btn btn--styleOne btn--secondary it-btn" to="/blooddonation/register">
                            <span className="btn__text">Register</span>
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
                                    <filter id="goo">
                                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10">
                                        </feGaussianBlur>
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


            {/* search */}
            <div id="template-search" className={`template-search ${searchActive ? "open" : ""}`}>
                <button type="button" className="close" onClick={() => setSearchState(false)}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <form className="search-form" onSubmit={SubmitHandler}>
                    <input type="search" placeholder="Type your search" />
                    <button type="submit" className="search-btn">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        </div>


    )
}

export default Header2; 